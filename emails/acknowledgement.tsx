import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

export default function Acknowledgement() {
  return (
    <Html>
      <Head />
      <Preview>Victor Five - Thank You</Preview>
      <Body style={{ padding: "20px" }}>
        <Container>
          <Section>
            <Heading>Thank You</Heading>
          </Section>
          <Text>Hello,</Text>
          <Text>
            Thank you for taking the time to fill out my contact form and
            questionnaire. I’ve received your submission and will review it
            shortly.
          </Text>
          <Text>You can expect to hear back from me soon.</Text>
          <Hr />
          <Text>Best regards,</Text>
          <Text>Victor Five</Text>
        </Container>
      </Body>
    </Html>
  );
}
