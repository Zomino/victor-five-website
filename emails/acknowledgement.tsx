import {
  Html,
  Body,
  Heading,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface AcknowledgementProps {
  firstName?: string;
}

export default function Acknowledgement(props: AcknowledgementProps) {
  return (
    <Html>
      <Body>
        <Preview>Thank you for your booking request</Preview>
        <Heading>VICTOR FIVE</Heading>
        <Section>
          <Text>Hello {props.firstName},</Text>
          <Text>
            Thank you for your booking request. I will review your information
            and get back to you shortly.
          </Text>
          <Text>Best regards,</Text>
          <Text>Victor Five</Text>
        </Section>
      </Body>
    </Html>
  );
}
