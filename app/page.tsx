import {
  ActionIcon,
  Box,
  Container,
  Flex,
  Stack,
  Text,
  Title,
  VisuallyHidden,
} from "@mantine/core";
import { Resend } from "resend";
import { IconBrandInstagram, IconMail } from "@tabler/icons-react";

import BookSessionForm from "./components/BookSessionForm";
import logger from "./lib/logger";
import {
  type BookSessionPayload,
  bookSessionValidationSchema,
} from "./lib/validation/bookSession";
import Acknowledgement from "../emails/acknowledgement";
import Notification from "../emails/notification/notification";

export default function Page() {
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
      <Box component="header" m="lg">
        <Stack gap="md">
          <Title order={1} ta={{ base: "left", sm: "center" }}>
            VICTOR FIVE
          </Title>
          <Text
            c="dimmed"
            size="2rem"
            // fs="italic"
            ta={{ base: "left", sm: "center" }}
          >
            Force Your Way!
          </Text>
        </Stack>
      </Box>
      <Box component="main" m="lg" mt="xl">
        <section>
          <VisuallyHidden>
            <Title order={2}>About</Title>
          </VisuallyHidden>
          <Stack gap="0">
            <Text size="lg" ta={{ base: "left", sm: "center" }}>
              VIP Personal Trainer
            </Text>
            <Text
              c="dimmed"
              visibleFrom="sm"
              size="sm"
              ta={{ base: "left", sm: "center" }}
            >
              Fat Loss | Body Recomposition | Muscle Building
            </Text>
            <Stack gap={0} hiddenFrom="sm">
              <Text c="dimmed" size="sm">
                Fat Loss
              </Text>
              <Text c="dimmed" size="sm">
                Body Recomposition
              </Text>
              <Text c="dimmed" size="sm">
                Muscle Building
              </Text>
            </Stack>
          </Stack>
        </section>
        <Box component="section" mt="xl">
          <Title order={2} ta={{ base: "left", sm: "center" }}>
            Request Booking
          </Title>
          <Box mt="md">
            <BookSessionForm onSubmit={handleSubmit} />
          </Box>
        </Box>
        <Box component="section" mt="xl">
          <Title order={2} ta={{ base: "left", sm: "center" }}>
            Connect
          </Title>
          <Box component="nav" ta={{ base: "left", sm: "center" }}>
            <Flex
              component="ul"
              display="inline-flex"
              gap="sm"
              mt="sm"
              p="0"
              style={{ listStyle: "none" }}
            >
              <li>
                <ActionIcon
                  color="black"
                  component="a"
                  href="https://www.instagram.com/victorfive_"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  variant="outline"
                  aria-label="Open Instagram"
                >
                  <IconBrandInstagram />
                </ActionIcon>
              </li>
              <li>
                <ActionIcon
                  color="black"
                  component="a"
                  href="mailto:victorfivecoaching@gmail.com"
                  size="lg"
                  variant="outline"
                  aria-label="Send email"
                >
                  <IconMail />
                </ActionIcon>
              </li>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
