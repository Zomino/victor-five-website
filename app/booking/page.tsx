import { Box, Container, Title } from "@mantine/core";
import { Resend } from "resend";

import Acknowledgement from "@emails/acknowledgement";
import Notification from "@emails/notification/notification";
import logger from "@lib/logger";
import {
  type BookSessionPayload,
  bookSessionValidationSchema,
} from "@lib/validation/bookSession";
import BookSessionForm from "@components/BookSessionForm";

export function Page() {
  const handleSubmit = async (payload: BookSessionPayload) => {
    "use server";

    try {
      const result = bookSessionValidationSchema.safeParse(payload);

      if (!result.success) {
        logger.error(result.error);
        throw new Error(result.error.message);
      }

      const resend = new Resend(process.env.RESEND_API_KEY);

      const acknowledgementResponse = await resend.emails.send({
        from: "Victor Five <noreply@victorfivecoaching.com>",
        to: payload.email,
        subject: "Acknowledgement",
        react: Acknowledgement({ firstName: payload.firstName }),
      });

      if (acknowledgementResponse.error) {
        logger.error(acknowledgementResponse.error);
        throw new Error(acknowledgementResponse.error.message);
      }

      logger.info(
        `Acknowledgement email sent: ${acknowledgementResponse.data.id}`
      );

      const notificationResponse = await resend.emails.send({
        from: "Victor Five <noreply@victorfivecoaching.com>",
        to: process.env.NOTIFICATION_EMAIL,
        subject: "New Booking Request",
        react: Notification(payload),
      });

      if (notificationResponse.error) {
        logger.error(notificationResponse.error);
        throw new Error(notificationResponse.error.message);
      }

      logger.info(`Notification email sent: ${notificationResponse.data.id}`);
    } catch (error) {
      logger.error(error);
      throw new Error(error.message);
    }
  };

  return (
    <Container size="xs">
      <section>
        <Title order={2} ta={{ base: "left", sm: "center" }}>
          Request Booking
        </Title>
        <Box mt="md">
          <BookSessionForm onSubmit={handleSubmit} />
        </Box>
      </section>
    </Container>
  );
}
