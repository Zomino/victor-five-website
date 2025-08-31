import BookSessionInfo from "./notification";

export default function Preview() {
  return (
    <BookSessionInfo
      firstName="John"
      lastName="Doe"
      email="john.doe@example.com"
      phoneNumber="123-456-7890"
      dateOfBirth="1990-01-01"
      heightCm={180}
      weightKg={75}
      trainingDaysPerWeek={3}
      trainingSessionLengthMinutes={60}
      injuriesOrLimitations="no"
      foodIssues="no"
      approximateDailyCalorieIntake={2200}
      supplements="yes"
      supplementsDescription="Protein, Creatine"
      shortTermGoal="Lose 5kg"
      longTermGoal="Run a marathon"
    />
  );
}
