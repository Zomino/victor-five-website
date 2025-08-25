import {
  ActionIcon,
  Box,
  Container,
  Flex,
  Stack,
  TabsTab,
  Tabs,
  TabsList,
  TabsPanel,
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

export default function Page() {
  const handleSubmit = async (payload: BookSessionPayload) => {
    "use server";

    const result = bookSessionValidationSchema.safeParse(payload);

    if (!result.success) {
      logger.error(result.error);
      throw new Error(result.error.message);
    }

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { data } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "zouminowa@gmail.com",
        subject: "Hello",
        html: "<h1>Hello</h1>",
      });

      logger.info(payload);
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
            Book
          </Title>
          <Tabs color="black" defaultValue="session" mt="md">
            <TabsList style={{ flexWrap: "nowrap" }}>
              <TabsTab value="session">1:1 Session</TabsTab>
              <TabsTab value="inquiry">Private Consultation</TabsTab>
            </TabsList>
            <TabsPanel value="session" pt="md">
              <BookSessionForm onSubmit={handleSubmit} />
            </TabsPanel>
            <TabsPanel value="inquiry" pt="md">
              <Text>Form</Text>
            </TabsPanel>
          </Tabs>
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
