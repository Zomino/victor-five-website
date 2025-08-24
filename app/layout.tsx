import "@radix-ui/themes/styles.css";
import { Box, Flex, Text, Theme } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Reset default margin to position copyright with flexbox. */}
      <body style={{ margin: 0 }}>
        <Theme accentColor="gray">
          <Flex direction="column" style={{ minHeight: "100vh" }}>
            <Box flexGrow="1">{children}</Box>
            <footer>
              <Flex justify="center">
                <Text size="1">
                  © {new Date().getFullYear()} Victor Five. All rights reserved.
                </Text>
              </Flex>
            </footer>
          </Flex>
        </Theme>
      </body>
    </html>
  );
}
