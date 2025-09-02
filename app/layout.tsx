import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
  Stack,
  Text,
  Box,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export const metadata = {
  title: "Victor Five",
  // applicationName will be shown for PWA
  applicationName: "Victor Five",
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
        <meta name="description" content="VIP Personal Trainer - Victor Five. Force Your Way! Specializing in Fat Loss, Body Recomposition, and Muscle Building." />
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
            <Box flex="1" px={{ sm: "xs", md: "md" }} py={{ base: "md", sm: "xl" }}>
              {children}
            </Box>
            <Box component="footer">
              <Text c="gray.7" size="sm" ta="center">
                © {new Date().getFullYear()} Victor Five. All rights reserved.
              </Text>
            </Box>
          </Stack>
        </MantineProvider>
      </body>
    </html>
  );
}
