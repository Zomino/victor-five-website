import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import {
  Box,
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
  Stack,
  Text,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
<<<<<<< Updated upstream
        <title>Victor Five</title>
=======
        <meta
          name="description"
          content="VIP Personal Trainer - Victor Five. Force Your Way! Specializing in Fat Loss, Body Recomposition, and Muscle Building."
        />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <Box flex="1">{children}</Box>
=======
            <Box
              flex="1"
              px={{ sm: "xs", md: "md" }}
              py={{ base: "md", sm: "xl" }}
            >
              {children}
              <Analytics />
              <SpeedInsights />
            </Box>
>>>>>>> Stashed changes
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
