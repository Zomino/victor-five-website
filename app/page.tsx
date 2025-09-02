import {
  Box,
  Container,
  Stack,
  Text,
  Title,
  VisuallyHidden,
} from "@mantine/core";

export default function Page() {
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
      </Box>
    </Container>
  );
}
