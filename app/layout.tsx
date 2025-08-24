import "@radix-ui/themes/styles.css";
import { Flex, Text, Theme } from "@radix-ui/themes";

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
            <div style={{ flexGrow: 1 }}>{children}</div>
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
