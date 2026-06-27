import { Box, Flex, SimpleGrid, Skeleton, Stack } from "@mantine/core";

const DAY_CELLS = Array.from({ length: 35 }, (_, i) => `day-${i}`);
const TIME_SLOTS = Array.from({ length: 8 }, (_, i) => `slot-${i}`);

export default function CalSkeleton() {
  return (
    <Box
      p="lg"
      bd={{ base: "none", md: "1px solid var(--mantine-color-gray-2)" }}
      bdrs={{ base: 0, md: 16 }}
    >
      <Flex direction={{ base: "column", md: "row" }} gap="xl">
        <Stack gap="sm" w={{ base: "100%", md: 200 }}>
          <Skeleton height={48} circle />
          <Skeleton height={14} width="50%" />
          <Skeleton height={10} width="35%" />
          <Skeleton height={10} width="90%" mt="sm" />
          <Skeleton height={10} width="80%" />
          <Skeleton height={10} width="60%" />
        </Stack>

        <Box style={{ flex: 1 }}>
          <Skeleton height={16} width={150} mb="md" />
          <SimpleGrid cols={7} spacing="xs">
            {DAY_CELLS.map((id) => (
              <Skeleton key={id} height={32} radius="sm" />
            ))}
          </SimpleGrid>
        </Box>

        <Stack gap="xs" w={{ base: "100%", md: 130 }}>
          {TIME_SLOTS.map((id) => (
            <Skeleton key={id} height={36} radius="sm" />
          ))}
        </Stack>
      </Flex>
    </Box>
  );
}
