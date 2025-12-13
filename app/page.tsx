import {
  Box,
  Button,
  Center,
  Stack,
  Text,
  Title,
  VisuallyHidden,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

import ConnectSection from "@components/ConnectSection";
import heroImage from "./hero.jpg";

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
          <Box
            component="figure"
            m={0}
            mx="auto"
            maw={420}
            style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
            }}
          >
            <Image
              src={heroImage}
              alt="Victor Five on stage"
              placeholder="blur"
              priority
              sizes="(max-width: 768px) 90vw, 420px"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
        <Box ta="center">
          <Stack gap="xs" align="center">
            <Button color="black" component={Link} href="/booking" miw={220}>
              Book 1:1 Session Zurich
            </Button>
          </Stack>
        </Box>
        <Box>
          <ConnectSection />
        </Box>
      </Stack>
    </ResponsiveContainer>
  );
}
