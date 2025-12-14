import { Box, Center, Stack, Text, Title, VisuallyHidden } from "@mantine/core";

import ConnectSection from "@components/ConnectSection";
import LinkButton from "@components/LinkButton";

const ResponsiveContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Center h="100%" visibleFrom="sm">
        {children}
      </Center>
      <Box hiddenFrom="sm">{children}</Box>
    </>
  );
};

export default function Page() {
  return (
    <ResponsiveContainer>
      <Stack gap="xl">
        <Box component="header">
          <Stack gap="lg">
            <Title order={1} ta="center" m="xl">
              VICTOR FIVE
            </Title>
            <Text c="gray.7" size="2rem" ta="center">
              Force Your Way!
            </Text>
          </Stack>
        </Box>
        <Box component="main">
          <VisuallyHidden>
            <Title order={2}>About</Title>
          </VisuallyHidden>
          <Stack gap="0">
            <Text size="lg" ta="center">
              VIP Personal Trainer
            </Text>
            <Text c="gray.7" visibleFrom="sm" size="sm" ta="center">
              <span>Fat Loss </span>
              <span aria-hidden="true">|</span>
              <span> Body Recomposition </span>
              <span aria-hidden="true">|</span>
              <span> Muscle Building</span>
            </Text>
            <Stack gap={0} hiddenFrom="sm" ta="center">
              <Text c="gray.7" size="sm">
                Fat Loss
              </Text>
              <Text c="gray.7" size="sm" ta="center">
                Body Recomposition
              </Text>
              <Text c="gray.7" size="sm" ta="center">
                Muscle Building
              </Text>
            </Stack>
          </Stack>
        </Box>
        <Box ta="center">
          <LinkButton color="black" href="/booking">
            Book
          </LinkButton>
        </Box>
        <Box>
          <ConnectSection />
        </Box>
      </Stack>
    </ResponsiveContainer>
  );
}
