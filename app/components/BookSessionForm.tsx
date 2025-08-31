"use client";

import {
  Button,
  Fieldset,
  Grid,
  Group,
  InputWrapper,
  NumberInput,
  Radio,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { zod4Resolver } from "mantine-form-zod-resolver";

import {
  type BookSessionPayload,
  bookSessionValidationSchema,
} from "../lib/validation/bookSession";

export default function BookSessionForm({
  onSubmit,
}: {
  onSubmit: (payload: BookSessionPayload) => Promise<void>;
}) {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: null,
      heightCm: null,
      weightKg: null,
      trainingDaysPerWeek: null,
      trainingSessionLengthMinutes: null,
      injuriesOrLimitations: "no",
      injuriesDescription: "",
      foodIssues: "no",
      approximateDailyCalorieIntake: null,
      supplements: "no",
      supplementsDescription: "",
      shortTermGoal: "",
      longTermGoal: "",
    },

    validate: zod4Resolver(bookSessionValidationSchema),
  });

  const handleSubmit = async (values: BookSessionPayload) => {
    try {
      await onSubmit(values);
      form.reset();
      notifications.show({
        title: "Success",
        message: "Your information has been received.",
        color: "gray",
      });
    } catch {
      notifications.show({
        title: "Error",
        message:
          "There was an error submitting the form. Please try again later.",
        color: "red",
      });
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Fieldset legend="Basic Information">
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <InputWrapper label="First Name" required>
              <TextInput
                key={form.key("firstName")}
                placeholder="e.g. John"
                {...form.getInputProps("firstName")}
              />
            </InputWrapper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <InputWrapper label="Last Name" required>
              <TextInput
                key={form.key("lastName")}
                placeholder="e.g. Doe"
                {...form.getInputProps("lastName")}
              />
            </InputWrapper>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <InputWrapper label="Email" required>
              <TextInput
                key={form.key("email")}
                placeholder="e.g. j.doe@example.com"
                {...form.getInputProps("email")}
              />
            </InputWrapper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <InputWrapper label="Phone Number">
              <TextInput
                key={form.key("phoneNumber")}
                placeholder="e.g. +1 234 567 8901"
                {...form.getInputProps("phoneNumber")}
              />
            </InputWrapper>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <InputWrapper label="Date of Birth">
              <DatePickerInput
                key={form.key("dateOfBirth")}
                placeholder="e.g. June 15, 1990"
                {...form.getInputProps("dateOfBirth")}
              />
            </InputWrapper>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 6, sm: 3 }}>
            <InputWrapper label="Height (cm)">
              <NumberInput
                key={form.key("heightCm")}
                placeholder="e.g. 168"
                {...form.getInputProps("heightCm")}
              />
            </InputWrapper>
          </Grid.Col>
          <Grid.Col span={{ base: 6, sm: 3 }}>
            <InputWrapper label="Weight (kg)">
              <NumberInput
                key={form.key("weightKg")}
                placeholder="e.g. 63"
                {...form.getInputProps("weightKg")}
              />
            </InputWrapper>
          </Grid.Col>
        </Grid>
      </Fieldset>
      <Fieldset legend="Questionnaire" mt="md">
        <Grid>
          <Grid.Col span={{ base: 12, sm: 12 }}>
            <InputWrapper label="How many days per week can you train?">
              <Grid>
                <Grid.Col span={{ base: 6, sm: 3 }}>
                  <NumberInput
                    key={form.key("trainingDaysPerWeek")}
                    placeholder="e.g. 3"
                    {...form.getInputProps("trainingDaysPerWeek")}
                  />
                </Grid.Col>
              </Grid>
            </InputWrapper>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 12 }}>
            <InputWrapper label="How long can each training session be? (minutes)">
              <Grid>
                <Grid.Col span={{ base: 6, sm: 3 }}>
                  <NumberInput
                    key={form.key("trainingSessionLengthMinutes")}
                    placeholder="e.g. 45"
                    {...form.getInputProps("trainingSessionLengthMinutes")}
                  />
                </Grid.Col>
              </Grid>
            </InputWrapper>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 12 }}>
            <InputWrapper label="Do you currently have any injuries or physical limitations?">
              <Radio.Group
                key={form.key("injuriesOrLimitations")}
                {...form.getInputProps("injuriesOrLimitations")}
              >
                <Group>
                  <Radio color="black" value="no" label="No" mb="xs" />
                  <Radio color="black" value="yes" label="Yes" mb="xs" />
                </Group>
              </Radio.Group>
            </InputWrapper>
          </Grid.Col>
        </Grid>
        {form.values.injuriesOrLimitations === "yes" && (
          <Grid>
            <Grid.Col span={{ base: 12, sm: 12 }}>
              <InputWrapper label="Please describe your injuries or physical limitations.">
                <Textarea
                  key={form.key("injuriesDescription")}
                  placeholder="e.g. I have a knee injury that limits my squatting ability."
                  {...form.getInputProps("injuriesDescription")}
                />
              </InputWrapper>
            </Grid.Col>
          </Grid>
        )}
        <Grid>
          <Grid.Col span={{ base: 12, sm: 12 }}>
            <InputWrapper label="Do you have any food intolerances, allergies, or digestion issues?">
              <Radio.Group
                key={form.key("foodIssues")}
                {...form.getInputProps("foodIssues")}
              >
                <Group>
                  <Radio color="black" value="no" label="No" mb="xs" />
                  <Radio color="black" value="yes" label="Yes" mb="xs" />
                </Group>
              </Radio.Group>
            </InputWrapper>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 12 }}>
            <InputWrapper label="Approximate daily calorie intake (kcal)">
              <Grid>
                <Grid.Col span={{ base: 6, sm: 3 }}>
                  <NumberInput
                    key={form.key("approximateDailyCalorieIntake")}
                    placeholder="e.g. 45"
                    {...form.getInputProps("approximateDailyCalorieIntake")}
                  />
                </Grid.Col>
              </Grid>
            </InputWrapper>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 12 }}>
            <InputWrapper label="Are you currently taking any supplements?">
              <Radio.Group
                key={form.key("supplements")}
                {...form.getInputProps("supplements")}
              >
                <Group>
                  <Radio color="black" value="no" label="No" mb="xs" />
                  <Radio color="black" value="yes" label="Yes" mb="xs" />
                </Group>
              </Radio.Group>
            </InputWrapper>
          </Grid.Col>
        </Grid>
        {form.values.supplements === "yes" && (
          <Grid>
            <Grid.Col span={{ base: 12, sm: 12 }}>
              <InputWrapper label="Please list your supplements and explain why you are taking them.">
                <Textarea
                  key={form.key("supplementsDescription")}
                  placeholder="e.g. Magnesium at night for sleep. Whey after training."
                  {...form.getInputProps("supplementsDescription")}
                />
              </InputWrapper>
            </Grid.Col>
          </Grid>
        )}
        <Grid>
          <Grid.Col span={{ base: 12, sm: 12 }}>
            <InputWrapper label="What is your short-term fitness goal? (1-3 months)">
              <Textarea
                key={form.key("shortTermGoal")}
                placeholder="e.g.Lose 3kg, tone arms and legs, increase energy."
                {...form.getInputProps("shortTermGoal")}
              />
            </InputWrapper>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 12 }}>
            <InputWrapper label="What is your long-term fitness goal? (6+ months)">
              <Textarea
                key={form.key("longTermGoal")}
                placeholder="e.g. Build strength, reduce fat, improve posture, maintain healthy routine."
                {...form.getInputProps("longTermGoal")}
              />
            </InputWrapper>
          </Grid.Col>
        </Grid>
      </Fieldset>
      <Grid mt="md">
        <Grid.Col span={{ base: 9, sm: 6 }}>
          <Button color="black" type="submit">
            Submit
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  );
}
