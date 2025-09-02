import { Html, Body, Heading, Text, Section } from "@react-email/components";

import { BookSessionPayload } from "../../lib/validation/bookSession";

export default function Notification(props: BookSessionPayload) {
  return (
    <Html>
      <Body>
        <Heading>VICTOR FIVE</Heading>
        <Heading as="h2">New Booking Request</Heading>
        <Section>
          <Text>
            <strong>Name:</strong> {props.firstName} {props.lastName}
          </Text>
          <Text>
            <strong>Email:</strong> {props.email}
          </Text>
          {props.phoneNumber && (
            <Text>
              <strong>Phone Number:</strong> {props.phoneNumber}
            </Text>
          )}
          {props.dateOfBirth && (
            <Text>
              <strong>Date of Birth:</strong> {props.dateOfBirth}
            </Text>
          )}
          {props.heightCm && (
            <Text>
              <strong>Height:</strong> {props.heightCm} cm
            </Text>
          )}
          {props.weightKg && (
            <Text>
              <strong>Weight:</strong> {props.weightKg} kg
            </Text>
          )}
          {props.trainingDaysPerWeek && (
            <Text>
              <strong>Training Days/Week:</strong> {props.trainingDaysPerWeek}
            </Text>
          )}
          {props.trainingSessionLengthMinutes && (
            <Text>
              <strong>Session Length:</strong>{" "}
              {props.trainingSessionLengthMinutes} minutes
            </Text>
          )}
          {props.injuriesOrLimitations && (
            <Text>
              <strong>Injuries or Limitations:</strong>{" "}
              {props.injuriesOrLimitations}
            </Text>
          )}
          {props.injuriesDescription && (
            <Text>
              <strong>Injuries Description:</strong> {props.injuriesDescription}
            </Text>
          )}
          {props.foodIssues && (
            <Text>
              <strong>Food Issues:</strong> {props.foodIssues}
            </Text>
          )}
          {props.approximateDailyCalorieIntake && (
            <Text>
              <strong>Approximate Daily Calorie Intake:</strong>{" "}
              {props.approximateDailyCalorieIntake}
            </Text>
          )}
          {props.supplements && (
            <Text>
              <strong>Supplements:</strong> {props.supplements}
            </Text>
          )}
          {props.supplementsDescription && (
            <Text>
              <strong>Supplements Description:</strong>{" "}
              {props.supplementsDescription}
            </Text>
          )}
          {props.shortTermGoal && (
            <Text>
              <strong>Short Term Goal:</strong> {props.shortTermGoal}
            </Text>
          )}
          {props.longTermGoal && (
            <Text>
              <strong>Long Term Goal:</strong> {props.longTermGoal}
            </Text>
          )}
        </Section>
      </Body>
    </Html>
  );
}
