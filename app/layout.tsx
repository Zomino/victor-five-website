import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
  Stack,
  Text,
  ActionIcon,
  Box,
  Flex,
  Title,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { IconBrandInstagram, IconMail } from "@tabler/icons-react";

export const metadata = {
  title: "Victor Five",
  // applicationName will be shown for PWA
  applicationName: "Victor Five",
  description: "Personal training and nutrition coaching.",
  authors: [{ name: "Zou Minowa", url: "https://github.com/Zomino" }],
  creator: "Zou Minowa",
  publisher: "Zou Minowa",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    // Google specific
    googleBot: {
      index: true,
      follow: true,
      // -1 means "no limit"
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  // Set referrer policy to avoid leaking full URL with sensitive info in query params to third parties
  referer: "origin-when-cross-origin",
  keywords: [
    "personal training",
    "nutrition coaching",
    "fitness",
    "health",
    "workout plans",
    "diet plans",
    "online coaching",
    "strength training",
    "weight loss",
    "muscle gain",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      {/* Reset default margin to position copyright with flexbox. */}
      <body style={{ margin: 0 }}>
        <MantineProvider
          theme={{
            headings: {
              sizes: {
                h1: { fontSize: "4rem", lineHeight: "1.1" },
              },
            },
          }}
        >
          <Stack h="100vh">
            <Notifications />
            <Box flex="1">{children}</Box>
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
            <Box component="footer">
              <Text c="dimmed" size="sm" ta="center">
                © {new Date().getFullYear()} Victor Five. All rights reserved.
              </Text>
            </Box>
          </Stack>
        </MantineProvider>
      </body>
    </html>
  );
}
