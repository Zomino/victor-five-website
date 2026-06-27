import { Box, Container, Stack, Title } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

import CalEmbed from "@components/CalEmbed/CalEmbed";
import LinkButton from "@components/LinkButton";

export const metadata = {
  title: "Schedule a Session · Victor Five",
  alternates: {
    canonical: "/schedule",
  },
};

export default function Page() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  return (
    <Stack>
      <Box component="header" m="xl">
        <Title order={1} ta="center">
          <Link
            aria-label="Go to homepage"
            href="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            VICTOR FIVE
          </Link>
        </Title>
      </Box>
      <Box component="main" my="lg">
        <Title order={2} ta="center" px="lg">
          Schedule a Meeting
        </Title>
        <Box
          mt="md"
          w={{ base: "auto", md: "100vw" }}
          mx={{ base: 0, md: "calc(50% - 50vw)" }}
        >
          <Container size="lg" px={{ base: 0, md: "md" }}>
            {calLink && <CalEmbed calLink={calLink} />}
          </Container>
        </Box>
      </Box>
      <Box ta="center">
        <LinkButton
          color="black"
          variant="transparent"
          href="/"
          leftSection={<IconArrowLeft size={18} />}
        >
          Back
        </LinkButton>
      </Box>
    </Stack>
  );
}
