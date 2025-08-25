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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <title>Victor Five</title>
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
