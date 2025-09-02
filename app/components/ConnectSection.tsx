import { ActionIcon, Box, Flex, Title } from "@mantine/core";
import { IconBrandInstagram, IconMail } from "@tabler/icons-react";

export default function ConnectSection() {
  return (
    <Box component="section">
      <Title order={2} ta="center">
        Connect
      </Title>
      <Box component="nav" ta="center">
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
  );
}
