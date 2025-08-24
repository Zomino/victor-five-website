import { Resend } from "resend";
import {
  AccessibleIcon,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Section,
  Tabs,
  Text,
  VisuallyHidden,
} from "@radix-ui/themes";
import { EnvelopeClosedIcon, InstagramLogoIcon } from "@radix-ui/react-icons";

export default function Page() {
  const submit = async () => {
    "use server";

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const { data } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "zouminowa@gmail.com",
        subject: "Hello",
        html: "<h1>Hello</h1>",
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container m="5">
      <Flex asChild direction="column" gap="5">
        <header>
          <Heading size="9">VICTOR FIVE</Heading>
          <Text color="gray" size="6">
            Force Your Way!
          </Text>
        </header>
      </Flex>
      <main>
        <Section>
          <VisuallyHidden>
            <Heading as="h2">About</Heading>
          </VisuallyHidden>
          <Flex asChild direction="column">
            <Text>VIP PERSONAL TRAINER</Text>
          </Flex>
          <Text size="1">Fat Loss · Body Recomposition · Muscle Building</Text>
        </Section>
        <Section>
          <Tabs.Root></Tabs.Root>
          <form action={submit}>
            <Button type="submit" variant="outline">
              Send email
            </Button>
          </form>
        </Section>
        <Section>
          <Heading as="h2">Connect</Heading>
          <nav>
            <Flex asChild gap="3">
              <ul style={{ padding: 0 }}>
                <Box asChild>
                  <li>
                    <IconButton asChild variant="outline">
                      <a
                        href="https://www.instagram.com/victorfive_"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AccessibleIcon label="Open Instagram">
                          <InstagramLogoIcon />
                        </AccessibleIcon>
                      </a>
                    </IconButton>
                  </li>
                </Box>
                <Box asChild>
                  <li>
                    <IconButton asChild variant="outline">
                      <a href="mailto:victorfivecoaching@gmail.com">
                        <AccessibleIcon label="Send email">
                          <EnvelopeClosedIcon />
                        </AccessibleIcon>
                      </a>
                    </IconButton>
                  </li>
                </Box>
              </ul>
            </Flex>
          </nav>
        </Section>
      </main>
    </Container>
  );
}
