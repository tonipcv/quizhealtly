export type Unit = 'imperial' | 'metric';

export type Goal = {
  id: string;
  text: string;
  image: string;
  selected: boolean;
};

export type Experience = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type BodyType = {
  id: string;
  text: string;
  image: string;
};

export type TimeOption = {
  id: string;
  text: string;
  emoji: string;
};

export type TargetBodyType = {
  id: string;
  text: string;
  image: string;
};

export type TargetZone = {
  id: string;
  text: string;
  selected: boolean;
  isWholeBody?: boolean;
};

export type ActivityLevel = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type MedicalCondition = {
  id: string;
  text: string;
  image: string;
  selected: boolean;
  isNone?: boolean;
};

export type WeeklyFrequency = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type SessionDuration = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type Capability = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type CoachCapability = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type SleepDuration = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type WaterIntake = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type WalkingTime = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type MenopauseStatus = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type DietType = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type FoodAllergy = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
  isNone?: boolean;
};

export type ProgramSuccess = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type PricingPlan = {
  id: string;
  duration: string;
  originalPrice: number;
  discountedPrice: number;
  perDay: number;
  discountedPerDay: number;
  isPopular?: boolean;
  hasGift?: boolean;
};

export type QuizState = {
  currentStep: number;
  unit: Unit;
  weightSt: string;
  weightLbs: string;
  weightKg: string;
  targetWeightSt: string;
  targetWeightLbs: string;
  targetWeightKg: string;
  // Add other state properties you want to persist
}; 