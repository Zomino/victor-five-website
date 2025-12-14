import { Box, Stack, Text, Title, VisuallyHidden } from "@mantine/core";
import Image from "next/image";

import ConnectSection from "@components/ConnectSection";
import heroImage from "./hero.jpg";
import styles from "./page.module.css";

import LinkButton from "@components/LinkButton";

export default function Page() {
  return (
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
          Book 1:1 Session - Zürich
        </LinkButton>
      </Box>
      <Box ta="center">
        <Box
          component="figure"
          m={0}
          mx="auto"
          maw={420}
          className={styles.heroFigure}
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
      <Box>
        <ConnectSection />
      </Box>
    </Stack>
  );
}
