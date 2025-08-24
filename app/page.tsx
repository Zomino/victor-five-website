import { Resend } from "resend";
import {
  AccessibleIcon,
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  Section,
  Text,
  VisuallyHidden,
} from "@radix-ui/themes";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

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
      <header>
        <Heading size="9" align="right">
          VICTOR FIVE
        </Heading>
      </header>
      <main>
        <Section>
          <VisuallyHidden>
            <Heading as="h2">Bio</Heading>
          </VisuallyHidden>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            iure quae impedit ratione libero. Quae fugiat labore quam quos sit
            nihil, culpa tenetur molestias earum expedita iure rem? Esse, rerum.
          </Text>
        </Section>
        <Section>
          <Box>
            <form action={submit}>
              <Button type="submit" variant="outline">
                Send email
              </Button>
            </form>
          </Box>
        </Section>
        <Section>
          <Heading as="h2">Socials</Heading>
          <Box pt="3">
            <IconButton asChild variant="outline">
              <a
                href="https://www.instagram.com/victorfive_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AccessibleIcon label="Instagram">
                  <InstagramLogoIcon />
                </AccessibleIcon>
              </a>
            </IconButton>
          </Box>
        </Section>
      </main>
    </Container>
  );
}
