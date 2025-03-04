"use client";

import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import { loadStripe } from '@stripe/stripe-js';

type Goal = {
  id: string;
  text: string;
  image: string;
  selected: boolean;
};

type Experience = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

type BodyType = {
  id: string;
  text: string;
  image: string;
};

type TimeOption = {
  id: string;
  text: string;
  emoji: string;
};

type TargetBodyType = {
  id: string;
  text: string;
  image: string;
};

type TargetZone = {
  id: string;
  text: string;
  selected: boolean;
  isWholeBody?: boolean;
};

type ActivityLevel = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

type MedicalCondition = {
  id: string;
  text: string;
  image: string;
  selected: boolean;
  isNone?: boolean;
};

type WeeklyFrequency = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

type SessionDuration = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

type Capability = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

type CoachCapability = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

type SleepDuration = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

type WaterIntake = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

type WalkingTime = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

type MenopauseStatus = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

type DietType = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

type FoodAllergy = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
  isNone?: boolean;
};

type ProgramSuccess = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

// Add new types and state variables
type Unit = 'imperial' | 'metric';

// Add new types
type PricingPlan = {
  id: string;
  duration: string;
  originalPrice: number;
  discountedPrice: number;
  perDay: number;
  discountedPerDay: number;
  isPopular?: boolean;
  hasGift?: boolean;
};

// Add new type for quiz state
type QuizState = {
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

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Quiz() {
  // Initialize with default values
  const [currentStep, setCurrentStep] = useState(0);
  const [unit, setUnit] = useState<Unit>('imperial');
  const [weightSt, setWeightSt] = useState('');
  const [weightLbs, setWeightLbs] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [targetWeightSt, setTargetWeightSt] = useState('');
  const [targetWeightLbs, setTargetWeightLbs] = useState('');
  const [targetWeightKg, setTargetWeightKg] = useState('');
  // ... other state variables

  // Load saved state on mount
  useEffect(() => {
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
      const state = JSON.parse(savedState);
      setCurrentStep(state.currentStep);
      setUnit(state.unit);
      setWeightSt(state.weightSt);
      setWeightLbs(state.weightLbs);
      setWeightKg(state.weightKg);
      setTargetWeightSt(state.targetWeightSt);
      setTargetWeightLbs(state.targetWeightLbs);
      setTargetWeightKg(state.targetWeightKg);
      // ... set other state variables
    }
  }, []);

  // Save state when it changes
  useEffect(() => {
    const state = {
      currentStep,
      unit,
      weightSt,
      weightLbs,
      weightKg,
      targetWeightSt,
      targetWeightLbs,
      targetWeightKg,
      // ... other state properties
    };
    localStorage.setItem('quizState', JSON.stringify(state));
  }, [currentStep, unit, weightSt, weightLbs, weightKg, targetWeightSt, targetWeightLbs, targetWeightKg /* Add other dependencies */]);

  // Add reset function
  const resetQuiz = useCallback(() => {
    localStorage.removeItem('quizState');
    setCurrentStep(0);
    setUnit('imperial');
    setWeightSt('');
    setWeightLbs('');
    setWeightKg('');
    setTargetWeightSt('');
    setTargetWeightLbs('');
    setTargetWeightKg('');
    // ... reset other state variables
  }, []);

  const [goals, setGoals] = useState<Goal[]>([
    {
      id: 'lose-weight',
      text: 'Lose weight',
      image: '/P2-E1-lose-weight.avif',
      selected: false
    },
    {
      id: 'more-strength',
      text: 'More strength & flexibility',
      image: '/P2-E2-more-strength.avif',
      selected: false
    },
    {
      id: 'get-slim',
      text: 'Get slim & toned body',
      image: '/P2-E3-get-slim.avif',
      selected: false
    },
    {
      id: 'reduce-stress',
      text: 'Reduce stress',
      image: '/P2-E4-reduce-stress.avif',
      selected: false
    }
  ]);
  const [experiences] = useState<Experience[]>([
    {
      id: 'regular',
      text: 'Yes, I do it regularly',
      emoji: '😊',
      selected: false
    },
    {
      id: 'before',
      text: "I've done it before",
      emoji: '💪🏼',
      selected: false
    },
    {
      id: 'never',
      text: "I've never done it before",
      emoji: '🙅🏻‍♀️',
      selected: false
    }
  ]);

  const bodyTypes: BodyType[] = [
    {
      id: 'regular',
      text: 'Regular',
      image: '/P5-E1-regular.avif'
    },
    {
      id: 'flabby',
      text: 'Flabby',
      image: '/P5-E2-flabby.avif'
    },
    {
      id: 'muffin-top',
      text: 'Muffin top',
      image: '/P5-E3-muffin-top.avif'
    },
    {
      id: 'overweight',
      text: 'Overweight',
      image: '/P5-E4-overweight.avif'
    },
    {
      id: 'obese',
      text: 'Obese',
      image: '/P5-E5-obese.avif'
    }
  ];

  const timeOptions: TimeOption[] = [
    {
      id: 'less-than-1',
      text: 'Less than 1 year',
      emoji: '😅'
    },
    {
      id: '1-3-years',
      text: '1-3 years',
      emoji: '😳'
    },
    {
      id: 'more-than-3',
      text: 'More than 3 years',
      emoji: '😬'
    },
    {
      id: 'never',
      text: 'Never',
      emoji: '🙅🏻‍♀️'
    },
    {
      id: 'feel-good',
      text: 'I feel good now',
      emoji: '💃🏻'
    }
  ];

  const targetBodyTypes: TargetBodyType[] = [
    {
      id: 'curvy',
      text: 'Curvy',
      image: '/P7-E1-curvy.avif'
    },
    {
      id: 'regular',
      text: 'Regular',
      image: '/P7-E2-regular.avif'
    },
    {
      id: 'flat',
      text: 'Flat',
      image: '/P7-E3-flat.avif'
    },
    {
      id: 'fit',
      text: 'Fit',
      image: '/P7-E4-fit.avif'
    },
    {
      id: 'athletic',
      text: 'Athletic',
      image: '/P7-E5-athletic.avif'
    }
  ];

  const [targetZones, setTargetZones] = useState<TargetZone[]>([
    { id: 'arms', text: 'Arms', selected: false },
    { id: 'stomach', text: 'Stomach', selected: false },
    { id: 'back', text: 'Back', selected: false },
    { id: 'glutes', text: 'Glutes', selected: false },
    { id: 'legs', text: 'Legs', selected: false },
    { id: 'hips', text: 'Hips', selected: false },
    { id: 'whole-body', text: 'Whole body', selected: false, isWholeBody: true }
  ]);

  const [activityLevels, setActivityLevels] = useState<ActivityLevel[]>([
    {
      id: 'not-at-all',
      text: 'Not at all',
      emoji: '❌',
      selected: false
    },
    {
      id: 'just-walking',
      text: 'Just walking',
      emoji: '🚶🏻‍♀️',
      selected: false
    },
    {
      id: 'one-session',
      text: '1 exercise session / week',
      emoji: '👍🏼',
      selected: false
    },
    {
      id: 'three-four-sessions',
      text: '3-4 exercise sessions / week',
      emoji: '💪🏼',
      selected: false
    },
    {
      id: 'five-sessions',
      text: '5 exercise sessions / week',
      emoji: '🚀',
      selected: false
    }
  ]);

  const [medicalConditions, setMedicalConditions] = useState<MedicalCondition[]>([
    {
      id: 'sensitive-back',
      text: 'Sensitive back',
      image: '/P10-E1-sensitive-back.avif',
      selected: false
    },
    {
      id: 'sensitive-knees',
      text: 'Sensitive knees',
      image: '/P10-E2-sensitive-knees.avif',
      selected: false
    },
    {
      id: 'hip-surgery',
      text: 'Hip surgery',
      image: '/P10-E3-hip-surgery.avif',
      selected: false
    },
    {
      id: 'other',
      text: 'Other',
      image: '/P10-E4-other-medical-issues.avif',
      selected: false
    },
    {
      id: 'none',
      text: 'None of the above',
      image: '/P10-E5-none-of-the-above.avif',
      selected: false,
      isNone: true
    }
  ]);

  const [weeklyFrequencies, setWeeklyFrequencies] = useState<WeeklyFrequency[]>([
    {
      id: 'one-two',
      text: '1-2 times',
      emoji: '👍🏼',
      selected: false
    },
    {
      id: 'three-four',
      text: '3-4 times',
      emoji: '💪🏼',
      selected: false
    },
    {
      id: 'five-plus',
      text: '5+ times',
      emoji: '⚡️',
      selected: false
    }
  ]);

  const [sessionDurations, setSessionDurations] = useState<SessionDuration[]>([
    {
      id: 'ten-fifteen',
      text: '10-15 min',
      emoji: '😌',
      selected: false
    },
    {
      id: 'fifteen-twenty',
      text: '15-20 min',
      emoji: '😉',
      selected: false
    },
    {
      id: 'twenty-five-plus',
      text: '25+ min',
      emoji: '😍',
      selected: false
    },
    {
      id: 'dont-know',
      text: "I don't know",
      emoji: '🙄',
      selected: false
    }
  ]);

  const [capabilities, setCapabilities] = useState<Capability[]>([
    {
      id: 'yes',
      text: 'Yes',
      emoji: '👍🏼',
      selected: false
    },
    {
      id: 'no',
      text: 'No',
      emoji: '👎🏼',
      selected: false
    },
    {
      id: 'almost',
      text: 'Almost',
      emoji: '🤞🏼',
      selected: false
    }
  ]);

  const [couchCapabilities, setCouchCapabilities] = useState<CoachCapability[]>([
    {
      id: 'yes',
      text: 'Yes',
      emoji: '👍🏼',
      selected: false
    },
    {
      id: 'no',
      text: 'No',
      emoji: '👎🏼',
      selected: false
    },
    {
      id: 'almost',
      text: 'Almost',
      emoji: '🤞🏼',
      selected: false
    }
  ]);

  const [sleepDurations, setSleepDurations] = useState<SleepDuration[]>([
    {
      id: 'less-than-5',
      text: 'Fewer than 5 hours',
      emoji: '🫣',
      selected: false
    },
    {
      id: 'five-to-six',
      text: 'Between 5 and 6 hours',
      emoji: '🥱',
      selected: false
    },
    {
      id: 'seven-to-eight',
      text: 'Between 7 and 8 hours',
      emoji: '😴',
      selected: false
    },
    {
      id: 'over-eight',
      text: 'Over 8 hours',
      emoji: '😊',
      selected: false
    }
  ]);

  const [waterIntakes, setWaterIntakes] = useState<WaterIntake[]>([
    {
      id: 'only-coffee',
      text: 'Only coffee, tea or soda',
      emoji: '☕️',
      selected: false
    },
    {
      id: 'less-than-2',
      text: 'Less than 2 glasses',
      emoji: '🚰',
      selected: false
    },
    {
      id: 'two-to-six',
      text: '2-6 glasses',
      emoji: '💧',
      selected: false
    },
    {
      id: 'seven-to-ten',
      text: '7-10 glasses',
      emoji: '💦',
      selected: false
    },
    {
      id: 'more-than-ten',
      text: 'More than 10 glasses',
      emoji: '🌊',
      selected: false
    }
  ]);

  const [walkingTimes, setWalkingTimes] = useState<WalkingTime[]>([
    {
      id: 'less-than-20',
      text: 'Less than 20 mins',
      emoji: '🚶🏻‍♀️',
      selected: false
    },
    {
      id: 'twenty-to-sixty',
      text: '20-60 mins',
      emoji: '🚶🏻‍♀️🚶🏻‍♀️',
      selected: false
    },
    {
      id: 'more-than-60',
      text: 'More than 60 mins',
      emoji: '🚶🏻‍♀️🚶🏻‍♀️🚶🏻‍♀️',
      selected: false
    }
  ]);

  const [menopauseStatuses, setMenopauseStatuses] = useState<MenopauseStatus[]>([
    {
      id: 'perimenopause',
      text: "I'm in perimenopause",
      emoji: '🙋‍♀',
      selected: false
    },
    {
      id: 'menopause',
      text: "I'm in menopause",
      emoji: '🙋🏼‍♀️',
      selected: false
    },
    {
      id: 'postmenopause',
      text: "I'm in postmenopause",
      emoji: '🙋🏽‍♀️',
      selected: false
    },
    {
      id: 'none',
      text: "None of the above",
      emoji: '❌',
      selected: false
    }
  ]);

  const [dietTypes, setDietTypes] = useState<DietType[]>([
    {
      id: 'everything',
      text: 'I eat everything',
      emoji: '🥘',
      selected: false
    },
    {
      id: 'low-carb',
      text: 'I eat low-carb',
      emoji: '🥑',
      selected: false
    },
    {
      id: 'vegetarian',
      text: "I'm a vegetarian",
      emoji: '🥬',
      selected: false
    },
    {
      id: 'vegan',
      text: "I'm a vegan",
      emoji: '🍆',
      selected: false
    },
    {
      id: 'pescatarian',
      text: "I'm a pescatarian",
      emoji: '🐟',
      selected: false
    },
    {
      id: 'carnitarian',
      text: "I'm a carnitarian",
      emoji: '🥩',
      selected: false
    }
  ]);

  const [foodAllergies, setFoodAllergies] = useState<FoodAllergy[]>([
    {
      id: 'none',
      text: 'None',
      emoji: '❌',
      selected: false,
      isNone: true
    },
    {
      id: 'dairy',
      text: 'Dairy',
      emoji: '🧀',
      selected: false
    },
    {
      id: 'gluten',
      text: 'Gluten',
      emoji: '🥐',
      selected: false
    },
    {
      id: 'eggs',
      text: 'Eggs',
      emoji: '🥚',
      selected: false
    },
    {
      id: 'nuts',
      text: 'Nuts',
      emoji: '🥜',
      selected: false
    },
    {
      id: 'fish',
      text: 'Fish',
      emoji: '🐟',
      selected: false
    },
    {
      id: 'shellfish',
      text: 'Shellfish',
      emoji: '🦐',
      selected: false
    },
    {
      id: 'soy',
      text: 'Soy',
      emoji: '🌱',
      selected: false
    },
    {
      id: 'other',
      text: 'Other',
      emoji: '🙄',
      selected: false
    }
  ]);

  const [programSuccesses, setProgramSuccesses] = useState<ProgramSuccess[]>([
    {
      id: 'yes',
      text: 'Yes, I was able to reach my goals',
      emoji: '👍🏼',
      selected: false
    },
    {
      id: 'somewhat',
      text: 'Somewhat',
      emoji: '😬',
      selected: false
    },
    {
      id: 'no',
      text: 'No, nothing has helped',
      emoji: '❌',
      selected: false
    },
    {
      id: 'not-tried',
      text: "I haven't tried anything else",
      emoji: '🙄',
      selected: false
    }
  ]);

  // Add new state variables in the Quiz component
  const [age, setAge] = useState<string>('');
  const [consent, setConsent] = useState(false);
  const [isAgeFocused, setIsAgeFocused] = useState(false);

  // Add conversion functions
  const convertImperialToMetric = (ft: string, inches: string) => {
    const totalInches = (parseInt(ft) * 12) + parseInt(inches);
    return Math.round(totalInches * 2.54).toString();
  };

  const convertMetricToImperial = (cm: string) => {
    const totalInches = Math.round(parseInt(cm) / 2.54);
    const ft = Math.floor(totalInches / 12);
    const inches = totalInches % 12;
    return { ft: ft.toString(), inches: inches.toString() };
  };

  // Add validation function
  const validateHeight = () => {
    if (unit === 'imperial') {
      const ft = parseInt(heightFt) || 0;
      const inches = parseInt(heightIn) || 0;
      const totalInches = (ft * 12) + inches;
      return totalInches >= 39; // 3ft 3in = 39 inches
    } else {
      return parseInt(heightCm) >= 99;
    }
  };

  const toggleGoal = (goalId: string) => {
    setGoals(goals.map(goal => 
      goal.id === goalId ? { ...goal, selected: !goal.selected } : goal
    ));
  };

  const toggleZone = (zoneId: string) => {
    setTargetZones(zones => {
      const zone = zones.find(z => z.id === zoneId);
      if (!zone) return zones;

      if (zone.isWholeBody) {
        return zones.map(z => ({
          ...z,
          selected: z.id === zoneId ? !z.selected : false
        }));
      } else {
        const wholeBodySelected = zones.find(z => z.isWholeBody)?.selected;
        if (wholeBodySelected) return zones;

        return zones.map(z => ({
          ...z,
          selected: z.id === zoneId ? !z.selected : z.selected
        }));
      }
    });
  };

  const selectActivity = (activityId: string) => {
    setActivityLevels(levels => 
      levels.map(level => ({
        ...level,
        selected: level.id === activityId
      }))
    );
  };

  const toggleCondition = (conditionId: string) => {
    setMedicalConditions(conditions => {
      const condition = conditions.find(c => c.id === conditionId);
      if (!condition) return conditions;

      if (condition.isNone) {
        return conditions.map(c => ({
          ...c,
          selected: c.id === conditionId ? !c.selected : false
        }));
      } else {
        const noneSelected = conditions.find(c => c.isNone)?.selected;
        if (noneSelected) return conditions;

        return conditions.map(c => ({
          ...c,
          selected: c.id === conditionId ? !c.selected : c.selected
        }));
      }
    });
  };

  const selectFrequency = (frequencyId: string) => {
    setWeeklyFrequencies(frequencies => 
      frequencies.map(freq => ({
        ...freq,
        selected: freq.id === frequencyId
      }))
    );
  };

  const selectDuration = (durationId: string) => {
    setSessionDurations(durations => 
      durations.map(duration => ({
        ...duration,
        selected: duration.id === durationId
      }))
    );
  };

  const selectCapability = (capabilityId: string) => {
    setCapabilities(caps => 
      caps.map(cap => ({
        ...cap,
        selected: cap.id === capabilityId
      }))
    );
  };

  const selectCouchCapability = (capabilityId: string) => {
    setCouchCapabilities(caps => 
      caps.map(cap => ({
        ...cap,
        selected: cap.id === capabilityId
      }))
    );
  };

  const selectSleepDuration = (durationId: string) => {
    setSleepDurations(durations => 
      durations.map(duration => ({
        ...duration,
        selected: duration.id === durationId
      }))
    );
  };

  const selectWaterIntake = (intakeId: string) => {
    setWaterIntakes(intakes => 
      intakes.map(intake => ({
        ...intake,
        selected: intake.id === intakeId
      }))
    );
  };

  const selectWalkingTime = (timeId: string) => {
    setWalkingTimes(times => 
      times.map(time => ({
        ...time,
        selected: time.id === timeId
      }))
    );
  };

  const selectMenopauseStatus = (statusId: string) => {
    setMenopauseStatuses(statuses => 
      statuses.map(status => ({
        ...status,
        selected: status.id === statusId
      }))
    );
  };

  const selectDietType = (dietId: string) => {
    setDietTypes(diets => 
      diets.map(diet => ({
        ...diet,
        selected: diet.id === dietId
      }))
    );
  };

  const toggleAllergy = (allergyId: string) => {
    setFoodAllergies(allergies => {
      const allergy = allergies.find(a => a.id === allergyId);
      if (!allergy) return allergies;

      if (allergy.isNone) {
        return allergies.map(a => ({
          ...a,
          selected: a.id === allergyId ? !a.selected : false
        }));
      } else {
        const noneSelected = allergies.find(a => a.isNone)?.selected;
        if (noneSelected) return allergies;

        return allergies.map(a => ({
          ...a,
          selected: a.id === allergyId ? !a.selected : a.selected
        }));
      }
    });
  };

  const selectProgramSuccess = (successId: string) => {
    setProgramSuccesses(successes => 
      successes.map(success => ({
        ...success,
        selected: success.id === successId
      }))
    );
  };

  const renderStep1 = () => (
    <div className="space-y-10">
      {/* Stats */}
      <div className="text-center">
        <h1 className="text-[#027bbd] text-4xl font-bold mb-3 tracking-[-0.03em]">
          500,000+
        </h1>
        <p className="text-[#263853] text-xl font-medium max-w-[75%] mx-auto leading-snug tracking-[-0.03em]">
          women have already joined
        </p>
      </div>

      {/* Image */}
      <div className="w-[75%] mx-auto">
        <Image
          src="/P1-E1-join-us.avif"
          alt="Join us"
          width={600}
          height={338}
          className="w-full h-auto rounded-xl shadow-md"
          priority
        />
      </div>

      {/* Description */}
      <div className="text-center">
        <h2 className="text-[#263853] text-[28px] font-medium leading-tight tracking-[-0.03em]">
          Designed for women's bodies'
          <br />
          changing needs over 40
        </h2>
      </div>

      {/* Continue Button */}
      <div className="mt-8">
        <button 
          onClick={() => setCurrentStep(1)}
          className="w-full h-12 bg-[#027bbd] rounded-full relative group 
                   flex items-center justify-center transition-all duration-300
                   hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
        >
          <span className="text-white text-lg font-medium">Continue</span>
          <div className="absolute right-3 w-8 h-8 bg-[#3b99cb] rounded-full 
                       flex items-center justify-center transition-transform 
                       group-hover:scale-105 group-hover:bg-[#4ba5d4]">
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => {
    const hasSelectedGoals = goals.some(goal => goal.selected);

    return (
      <div className="space-y-10">
        {/* Question */}
        <div className="text-center">
          <h1 className="text-[#263853] text-[32px] font-medium mb-3 tracking-[-0.03em]">
            What is your goal?
          </h1>
          <p className="text-[#263853] text-sm tracking-[-0.03em]">
            You can have multiple goals
          </p>
        </div>

        {/* Goals Selection */}
        <div className="space-y-4">
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className={`w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300
                ${goal.selected 
                  ? 'bg-[#f5fafc] border-2 border-[#027bbd]/20' 
                  : 'bg-[#f5fafc]'}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all
                  ${goal.selected 
                    ? 'bg-[#027bbd]/10 border-2 border-[#027bbd]' 
                    : 'bg-[#f5fafc] border-2 border-[#d3dee2]'}`}
                >
                  {goal.selected && (
                    <Check className="w-4 h-4 text-[#027bbd]" />
                  )}
                </div>
                <span className="text-[#263853] text-lg md:text-xl font-medium">{goal.text}</span>
              </div>
              <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                <Image
                  src={goal.image}
                  alt={goal.text}
                  fill
                  className="object-cover"
                />
              </div>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button 
            onClick={() => hasSelectedGoals && setCurrentStep(currentStep + 1)}
            className={`w-full h-12 rounded-full relative flex items-center justify-center transition-all duration-300
              ${hasSelectedGoals 
                ? 'bg-[#027bbd] hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20' 
                : 'bg-[#027bbd]/50 cursor-not-allowed'}`}
          >
            <span className="text-white text-lg font-medium">Continue</span>
            {hasSelectedGoals && (
              <div className="absolute right-3 w-8 h-8 bg-[#3b99cb] rounded-full 
                           flex items-center justify-center transition-transform 
                           group-hover:scale-105 group-hover:bg-[#4ba5d4]">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            )}
          </button>
        </div>
      </div>
    );
  };

  const renderStep3 = () => {
    return (
      <div className="space-y-10">
        {/* Question */}
        <div className="text-center">
          <h1 className="text-[#263853] text-[32px] font-medium tracking-[-0.03em]">
            Have you done Wall
            <br />
            Pilates before?
          </h1>
        </div>

        {/* Experience Selection */}
        <div className="space-y-4">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setCurrentStep(currentStep + 1)}
              className={`w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300
                hover:bg-white hover:border-2 hover:border-[#f5fafc]
                bg-[#f5fafc] group`}
            >
              <span className="text-[#263853] text-lg md:text-xl font-medium">{exp.text}</span>
              <span className="text-3xl">{exp.emoji}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderStep4 = () => {
    return (
      <div className="space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[#263853] text-[36px] font-bold tracking-[-0.03em] leading-tight mb-6">
            Wall Pilates - the most effective
            <br />
            exercise for women over 40
          </h1>
          <div className="space-y-2">
            <p className="text-[#263853] text-lg tracking-[-0.03em] font-medium">
              Strengthen and tone your body like never before
            </p>
            <p className="text-[#263853] text-lg tracking-[-0.03em] font-medium">
              with low-impact exercises. The wall intensifies
            </p>
            <p className="text-[#263853] text-lg tracking-[-0.03em] font-medium">
              each exercise while providing support.
            </p>
          </div>
        </div>

        {/* Benefits Card */}
        <div className="bg-[#fcf9f0] rounded-2xl p-6 space-y-6">
          <div className="text-center space-y-4">
            <span className="text-4xl block">🤩</span>
            <div className="space-y-1">
              <p className="text-[#263853] text-sm tracking-[-0.03em]">
                No need for expensive equipment or to leave
              </p>
              <p className="text-[#263853] text-sm tracking-[-0.03em]">
                your home - just your mat.
              </p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <span className="text-4xl block">💪🏼</span>
            <div className="space-y-1">
              <p className="text-[#263853] text-sm tracking-[-0.03em]">
                Low-impact exercise to protect your joints
              </p>
              <p className="text-[#263853] text-sm tracking-[-0.03em]">
                and strengthen your core.
              </p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <span className="text-4xl block">✅</span>
            <p className="text-[#263853] text-sm tracking-[-0.03em]">
              Accessible for all fitness levels
            </p>
          </div>

          <div className="rounded-xl overflow-hidden">
            <Image
              src="/P4-E1-why-pilates.avif"
              alt="Why Pilates"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button 
            onClick={() => setCurrentStep(currentStep + 1)}
            className="w-full h-12 bg-[#027bbd] rounded-full relative group 
                     flex items-center justify-center transition-all duration-300
                     hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
          >
            <span className="text-white text-lg font-medium">Continue</span>
            <div className="absolute right-3 w-8 h-8 bg-[#3b99cb] rounded-full 
                         flex items-center justify-center transition-transform 
                         group-hover:scale-105 group-hover:bg-[#4ba5d4]">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    );
  };

  const renderStep5 = () => {
    return (
      <div className="space-y-10">
        {/* Question */}
        <div className="text-center">
          <h1 className="text-[#263853] text-[32px] font-medium tracking-[-0.03em]">
            What is your current body type
          </h1>
        </div>

        {/* Body Type Selection */}
        <div className="space-y-4">
          {bodyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setCurrentStep(currentStep + 1)}
              className="w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300
                bg-[#f5fafc] hover:bg-white hover:border-2 hover:border-[#f5fafc]"
            >
              <span className="text-[#263853] text-lg md:text-xl font-medium">{type.text}</span>
              <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                <Image
                  src={type.image}
                  alt={type.text}
                  fill
                  className="object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderStep6 = () => {
    return (
      <div className="space-y-10">
        {/* Question */}
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            How long has it been
            <br />
            since you've felt good
            <br />
            in your own body?
          </h1>
        </div>

        {/* Time Options */}
        <div className="space-y-4">
          {timeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setCurrentStep(currentStep + 1)}
              className="w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300
                bg-[#f5fafc] hover:bg-white hover:border-2 hover:border-[#f5fafc]"
            >
              <span className="text-[#263853] text-lg md:text-xl font-medium">{option.text}</span>
              <span className="text-3xl">{option.emoji}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderStep7 = () => {
    return (
      <div className="space-y-10">
        {/* Question */}
        <div className="text-center">
          <h1 className="text-[#263853] text-[32px] font-medium tracking-[-0.03em]">
            What is your target body type?
          </h1>
        </div>

        {/* Target Body Type Selection */}
        <div className="space-y-4">
          {targetBodyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setCurrentStep(currentStep + 1)}
              className="w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300
                bg-[#f5fafc] hover:bg-white hover:border-2 hover:border-[#f5fafc]"
            >
              <span className="text-[#263853] text-lg md:text-xl font-medium">{type.text}</span>
              <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                <Image
                  src={type.image}
                  alt={type.text}
                  fill
                  className="object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderStep8 = () => {
    const hasSelectedZones = targetZones.some(zone => zone.selected);
    const isWholeBodySelected = targetZones.find(z => z.isWholeBody)?.selected;

    // Add function to deselect all zones
    const deselectAll = () => {
      const newZones = targetZones.map(z => ({
        ...z,
        selected: false
      }));
      setTargetZones(newZones);
    };

    return (
      <div className="space-y-10">
        {/* Title with Clear Selection */}
        <div className="text-center space-y-2">
          <h1 className="text-[#263853] text-[32px] font-bold tracking-[-0.03em]">
            Select your target zones
          </h1>
          <p className="text-[#263853] text-lg">
            Select all that apply
          </p>
          {hasSelectedZones && (
            <button
              onClick={deselectAll}
              className="text-[#027bbd] text-sm hover:text-[#0269a3] transition-colors"
            >
              Clear selection
            </button>
          )}
        </div>

        {/* Selection Area */}
        <div className="flex flex-col md:flex-row md:gap-16 items-center md:items-start">
          {/* Image Side */}
          <div className="w-[70%] md:w-[60%] mb-8 md:mb-0">
            <div className="md:sticky md:top-8">
              <div className="aspect-[2/3] relative h-[300px] md:h-[700px]">
                <Image
                  src="/P8-E1-target-zones-blonde.png"
                  alt="Target zones"
                  fill
                  className="object-contain"
                  priority
                />
                {/* Highlight Overlays */}
                {targetZones.map((zone) => (
                  zone.selected && !zone.isWholeBody && (
                    <div
                      key={zone.id}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(255, 0, 0, 0.2)',
                        clipPath: getZoneClipPath(zone.id),
                        transition: 'opacity 300ms'
                      }}
                    />
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Options Side */}
          <div className="w-full md:w-[40%] space-y-3">
            {targetZones.map((zone) => (
              <button
                key={zone.id}
                onClick={() => {
                  const newZones = targetZones.map(z => ({
                    ...z,
                    selected: zone.isWholeBody 
                      ? z.id === zone.id 
                      : z.isWholeBody 
                        ? false 
                        : z.id === zone.id 
                          ? !z.selected // Toggle selection
                          : z.selected
                  }));
                  setTargetZones(newZones);
                }}
                disabled={isWholeBodySelected && !zone.isWholeBody}
                className={`w-full h-14 rounded-xl flex items-center gap-5 px-5 transition-all duration-300
                  ${zone.selected 
                    ? 'bg-[#f5fafc] border-2 border-[#027bbd]/20' 
                    : 'bg-[#f5fafc]'}
                  ${isWholeBodySelected && !zone.isWholeBody 
                    ? 'opacity-50 cursor-not-allowed' 
                    : ''}`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all
                  ${zone.selected 
                    ? 'bg-[#027bbd]/10 border-2 border-[#027bbd]' 
                    : 'border-2 border-[#d3dee2] bg-[#f5fafc]'}`}
                >
                  {zone.selected && (
                    <Check className="w-4 h-4 text-[#027bbd]" />
                  )}
                </div>
                <span className="text-[#263853] text-lg">{zone.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <button 
          onClick={() => hasSelectedZones && setCurrentStep(currentStep + 1)}
          className={`w-full h-14 rounded-full relative flex items-center justify-center transition-all duration-300
            ${hasSelectedZones 
              ? 'bg-[#027bbd] hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20' 
              : 'bg-[#027bbd]/50 cursor-not-allowed'}`}
        >
          <span className="text-white text-lg font-medium">Continue</span>
          {hasSelectedZones && (
            <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                         flex items-center justify-center transition-transform 
                         group-hover:scale-105 group-hover:bg-[#4ba5d4]">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          )}
        </button>
      </div>
    );
  };

  const renderStep21 = () => {
    const hasSelectedSuccess = programSuccesses.some(success => success.selected);

    return (
      <div className="space-y-10">
        {/* Question */}
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            Has any other exercise
            <br />
            program helped you to
            <br />
            reach goals over 40?
          </h1>
        </div>

        {/* Program Success Selection */}
        <div className="space-y-4">
          {programSuccesses.map((success) => (
            <button
              key={success.id}
              onClick={() => selectProgramSuccess(success.id)}
              className={`w-full h-16 rounded-xl flex items-center justify-between px-6 transition-all duration-300
                ${success.selected 
                  ? 'bg-white border-2 border-[#f5fafc]' 
                  : 'bg-[#f5fafc] hover:bg-white hover:border-2 hover:border-[#f5fafc]'}`}
            >
              <span className="text-[#263853] text-lg">{success.text}</span>
              <span className="text-3xl">{success.emoji}</span>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button 
            onClick={() => hasSelectedSuccess && setCurrentStep(currentStep + 1)}
            className={`w-full h-14 rounded-full relative flex items-center justify-center transition-all duration-300
              ${hasSelectedSuccess 
                ? 'bg-[#027bbd] hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20' 
                : 'bg-[#027bbd]/50 cursor-not-allowed'}`}
          >
            <span className="text-white text-lg font-medium">Continue</span>
            {hasSelectedSuccess && (
              <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                           flex items-center justify-center transition-transform 
                           group-hover:scale-105 group-hover:bg-[#4ba5d4]">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            )}
          </button>
        </div>
      </div>
    );
  };

  const renderStep22 = () => {
    return (
      <div className="space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            99% of exercise programs are
            <br />
            fantastic
          </h1>
        </div>

        {/* Info Card */}
        <div className="bg-[#fcf9f0] rounded-2xl p-6 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-[#263853] text-sm tracking-[-0.03em]">
              However, they rarely focus on women's bodies
            </p>
            <p className="text-[#263853] text-sm tracking-[-0.03em]">
              changing needs over 40. Our program is
            </p>
            <p className="text-[#263853] text-sm tracking-[-0.03em]">
              designed to take into account these
            </p>
            <p className="text-[#263853] text-sm tracking-[-0.03em]">
              physiological changes so you can achieve
            </p>
            <p className="text-[#263853] text-sm tracking-[-0.03em]">
              your goals of your best body yet!
            </p>
          </div>

          <div className="rounded-xl overflow-hidden">
            <Image
              src="/P22-E1-reached-goals-answer.avif"
              alt="Reached goals"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button 
            onClick={() => setCurrentStep(currentStep + 1)}
            className="w-full h-14 rounded-full relative flex items-center justify-center 
                     bg-[#027bbd] transition-all duration-300
                     hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
          >
            <span className="text-white text-lg font-medium">Continue</span>
            <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                         flex items-center justify-center transition-transform 
                         group-hover:scale-105 group-hover:bg-[#4ba5d4]">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </button>
        </div>
      </div>
    );
  };

  const renderStep23 = () => {
    const isValid = age !== '' && consent;

    return (
      <div className="space-y-10">
        {/* Question */}
        <div className="text-center">
          <h1 className="text-[#263853] text-[32px] font-medium tracking-[-0.03em]">
            How old are you?
          </h1>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-[#263853] text-sm tracking-[-0.03em] leading-relaxed">
            This information helps us in metabolic calculations
            <br />
            and to personalize your plan to get your best body!
          </p>
        </div>

        {/* Age Input */}
        <div className="relative">
          <div className="flex items-center h-16 px-6 rounded-xl border border-[#c0cfd5] bg-white">
            <span className={`mr-4 ${isAgeFocused ? 'text-[#565656]' : 'text-[#e1e4e8]'}`}>
              Age
            </span>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              onFocus={() => setIsAgeFocused(true)}
              onBlur={() => setIsAgeFocused(false)}
              className="flex-1 bg-transparent outline-none text-[#263853] text-lg"
              placeholder=""
            />
            <span className={`ml-4 ${isAgeFocused ? 'text-[#565656]' : 'text-[#e8f0f4]'}`}>
              years
            </span>
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-4">
          <button
            onClick={() => setConsent(!consent)}
            className={`w-6 h-6 rounded border flex-shrink-0 flex items-center justify-center transition-all duration-300 cursor-pointer
              ${consent 
                ? 'bg-[#273854] border-[#273854]' 
                : 'border-[#C5CDE4] bg-white hover:border-[#273854]'}`}
          >
            {consent && (
              <Check className="w-4 h-4 text-white" />
            )}
          </button>
          <p className="text-[#475966] text-xs leading-relaxed">
            I consent to Reverse Health processing my health onboarding data to provide services and enhance my user experience{' '}
            <a 
              href="#" 
              className="text-[#027bbd] underline hover:text-[#0269a3] transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button 
            onClick={() => isValid && setCurrentStep(currentStep + 1)}
            className={`w-full h-14 rounded-full relative flex items-center justify-center transition-all duration-300
              ${isValid 
                ? 'bg-[#027bbd] hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20' 
                : 'bg-[#027bbd]/50 cursor-not-allowed'}`}
          >
            <span className="text-white text-lg font-medium">Continue</span>
            {isValid && (
              <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                           flex items-center justify-center transition-transform 
                           group-hover:scale-105 group-hover:bg-[#4ba5d4]">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            )}
          </button>
        </div>
      </div>
    );
  };

  // Add new state variables
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [heightError, setHeightError] = useState(false);
  const [isFtFocused, setIsFtFocused] = useState(false);
  const [isInFocused, setIsInFocused] = useState(false);
  const [isCmFocused, setIsCmFocused] = useState(false);

  const renderStep24 = () => {
    const handleUnitChange = (newUnit: Unit) => {
      if (newUnit === unit) return;

      if (newUnit === 'metric' && heightFt && heightIn) {
        setHeightCm(convertImperialToMetric(heightFt, heightIn));
      } else if (newUnit === 'imperial' && heightCm) {
        const { ft, inches } = convertMetricToImperial(heightCm);
        setHeightFt(ft);
        setHeightIn(inches);
      }

      setUnit(newUnit);
    };

    const isValid = unit === 'imperial' ? (heightFt && heightIn) : heightCm;
    const showError = isValid && !validateHeight();

    return (
      <div className="space-y-10">
        {/* Question */}
        <div className="text-center">
          <h1 className="text-[#263853] text-[32px] font-medium tracking-[-0.03em]">
            What is your height?
          </h1>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-[#263853] text-sm tracking-[-0.03em] leading-relaxed">
            This information helps us in metabolic calculations
            <br />
            and to personalize your plan to get your best body!
          </p>
        </div>

        {/* Unit Toggle */}
        <div className="flex rounded-xl overflow-hidden">
          <button
            onClick={() => handleUnitChange('imperial')}
            className={`flex-1 h-14 font-medium text-lg transition-colors
              ${unit === 'imperial' 
                ? 'bg-[#239b77] text-white shadow-md' 
                : 'bg-[#f5fafc] text-[#445664]'}`}
          >
            Imperial
          </button>
          <button
            onClick={() => handleUnitChange('metric')}
            className={`flex-1 h-12 font-medium transition-colors
              ${unit === 'metric' 
                ? 'bg-[#239b77] text-white' 
                : 'bg-[#f5fafc] text-[#445664]'}`}
          >
            Metric
          </button>
        </div>

        {/* Height Input */}
        {unit === 'imperial' ? (
          <div className="flex gap-3">
            <div className="flex-1">
              <div className="flex items-center h-16 px-6 rounded-xl border border-[#c0cfd5] bg-white">
                <span className="text-[#c0cfd5] mr-4">Height</span>
                <input
                  type="number"
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                  onFocus={() => setIsFtFocused(true)}
                  onBlur={() => setIsFtFocused(false)}
                  className="flex-1 bg-transparent outline-none text-[#263853] text-lg"
                  placeholder=""
                  min="0"
                  max="8"
                />
                <span className={`ml-4 ${isFtFocused ? 'text-[#565656]' : 'text-[#e8f0f4]'}`}>
                  ft
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center h-16 px-6 rounded-xl border border-[#c0cfd5] bg-white">
                <input
                  type="number"
                  value={heightIn}
                  onChange={(e) => setHeightIn(e.target.value)}
                  onFocus={() => setIsInFocused(true)}
                  onBlur={() => setIsInFocused(false)}
                  className="flex-1 bg-transparent outline-none text-[#263853] text-lg"
                  placeholder=""
                  min="0"
                  max="11"
                />
                <span className={`ml-4 ${isInFocused ? 'text-[#565656]' : 'text-[#e8f0f4]'}`}>
                  in
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center h-16 px-6 rounded-xl border border-[#c0cfd5] bg-white">
            <span className="text-[#c0cfd5] mr-4">Height</span>
            <input
              type="number"
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value)}
              onFocus={() => setIsCmFocused(true)}
              onBlur={() => setIsCmFocused(false)}
              className="flex-1 bg-transparent outline-none text-[#263853] text-lg"
              placeholder=""
            />
            <span className={`ml-4 ${isCmFocused ? 'text-[#565656]' : 'text-[#e8f0f4]'}`}>
              cm
            </span>
          </div>
        )}

        {/* Error Message */}
        {!isValid && (
          <p className="text-[#027bbd] text-sm">
            Please enter your height
          </p>
        )}

        {/* Validation Error */}
        {showError && (
          <div className="p-4 rounded-xl border-2 border-dashed border-[#027bbd]/20 bg-[#f5fafc]">
            <p className="text-[#263853] text-sm leading-relaxed">
              🙋🏻‍♀️️ Hello there! It seems that there might be an issue with the number you entered.
              Please review and input your height again. We're here to help you successfully reach
              your goals!
            </p>
          </div>
        )}

        {/* Continue Button */}
        <div className="mt-8">
          <button 
            onClick={() => isValid && !showError && setCurrentStep(currentStep + 1)}
            className={`w-full h-14 rounded-full relative flex items-center justify-center transition-all duration-300
              ${isValid && !showError
                ? 'bg-[#027bbd] hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20' 
                : 'bg-[#027bbd]/50 cursor-not-allowed'}`}
          >
            <span className="text-white text-lg font-medium">Continue</span>
            {isValid && !showError && (
              <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                           flex items-center justify-center transition-transform 
                           group-hover:scale-105 group-hover:bg-[#4ba5d4]">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            )}
          </button>
        </div>
      </div>
    );
  };

  // Add new state variables
  const [isStFocused, setIsStFocused] = useState(false);
  const [isLbsFocused, setIsLbsFocused] = useState(false);
  const [isKgFocused, setIsKgFocused] = useState(false);

  // Add conversion functions
  const convertImperialToMetricWeight = (st: string, lbs: string) => {
    const totalLbs = (parseInt(st) * 14) + parseInt(lbs);
    return Math.round(totalLbs * 0.45359237).toString();
  };

  const convertMetricToImperialWeight = (kg: string) => {
    const totalLbs = Math.round(parseInt(kg) * 2.20462);
    const st = Math.floor(totalLbs / 14);
    const lbs = totalLbs % 14;
    return { st: st.toString(), lbs: lbs.toString() };
  };

  // Add BMI calculation function
  const calculateBMI = () => {
    if (unit === 'imperial') {
      const heightInches = (parseInt(heightFt) * 12) + parseInt(heightIn);
      const weightLbsTotal = (parseInt(weightSt) * 14) + parseInt(weightLbs);
      return (weightLbsTotal * 703) / (heightInches * heightInches);
    } else {
      const heightM = parseInt(heightCm) / 100;
      return parseInt(weightKg) / (heightM * heightM);
    }
  };

  // Add the renderStep25
  const renderStep25 = () => {
    const handleUnitChange = (newUnit: Unit) => {
      if (newUnit === unit) return;

      if (newUnit === 'metric' && weightSt && weightLbs) {
        setWeightKg(convertImperialToMetricWeight(weightSt, weightLbs));
      } else if (newUnit === 'imperial' && weightKg) {
        const { st, lbs } = convertMetricToImperialWeight(weightKg);
        setWeightSt(st);
        setWeightLbs(lbs);
      }

      setUnit(newUnit);
    };

    const isValid = unit === 'imperial' ? (weightSt && weightLbs) : weightKg;
    const bmi = isValid ? calculateBMI() : 0;
    const showLowBMIWarning = isValid && bmi < 18.5;

    return (
      <div className="space-y-10">
        {/* Question */}
        <div className="text-center">
          <h1 className="text-[#263853] text-[32px] font-medium tracking-[-0.03em]">
            What is your weight?
          </h1>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-[#263853] text-sm tracking-[-0.03em] leading-relaxed">
            This information helps us in metabolic calculations
            <br />
            and to personalize your plan to get your best body!
          </p>
        </div>

        {/* Unit Toggle */}
        <div className="flex rounded-xl overflow-hidden">
          <button
            onClick={() => handleUnitChange('imperial')}
            className={`flex-1 h-14 font-medium text-lg transition-colors
              ${unit === 'imperial' 
                ? 'bg-[#239b77] text-white shadow-md' 
                : 'bg-[#f5fafc] text-[#445664]'}`}
          >
            Imperial
          </button>
          <button
            onClick={() => handleUnitChange('metric')}
            className={`flex-1 h-12 font-medium transition-colors
              ${unit === 'metric' 
                ? 'bg-[#239b77] text-white' 
                : 'bg-[#f5fafc] text-[#445664]'}`}
          >
            Metric
          </button>
        </div>

        {/* Weight Input */}
        {unit === 'imperial' ? (
          <div className="flex gap-3">
            <div className="flex-1">
              <div className="flex items-center h-16 px-6 rounded-xl border border-[#c0cfd5] bg-white">
                <span className="text-[#c0cfd5] mr-4">Weight</span>
                <input
                  type="number"
                  value={weightSt}
                  onChange={(e) => setWeightSt(e.target.value)}
                  onFocus={() => setIsStFocused(true)}
                  onBlur={() => setIsStFocused(false)}
                  className="flex-1 bg-transparent outline-none text-[#263853] text-lg"
                  placeholder=""
                />
                <span className={`ml-4 ${isStFocused ? 'text-[#565656]' : 'text-[#e8f0f4]'}`}>
                  st
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center h-16 px-6 rounded-xl border border-[#c0cfd5] bg-white">
                <input
                  type="number"
                  value={weightLbs}
                  onChange={(e) => setWeightLbs(e.target.value)}
                  onFocus={() => setIsLbsFocused(true)}
                  onBlur={() => setIsLbsFocused(false)}
                  className="flex-1 bg-transparent outline-none text-[#263853] text-lg"
                  placeholder=""
                />
                <span className={`ml-4 ${isLbsFocused ? 'text-[#565656]' : 'text-[#e8f0f4]'}`}>
                  lbs
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center h-16 px-6 rounded-xl border border-[#c0cfd5] bg-white">
            <span className="text-[#c0cfd5] mr-4">Weight</span>
            <input
              type="number"
              value={weightKg}
              onChange={(e) => setWeightKg(e.target.value)}
              onFocus={() => setIsKgFocused(true)}
              onBlur={() => setIsKgFocused(false)}
              className="flex-1 bg-transparent outline-none text-[#263853] text-lg"
              placeholder=""
            />
            <span className={`ml-4 ${isKgFocused ? 'text-[#565656]' : 'text-[#e8f0f4]'}`}>
              kg
            </span>
          </div>
        )}

        {/* Error Message */}
        {!isValid && (
          <p className="text-[#027bbd] text-sm">
            Please enter your weight
          </p>
        )}

        {/* Continue Button */}
        <div className="mt-8">
          <button 
            onClick={() => isValid && setCurrentStep(currentStep + 1)}
            className={`w-full h-14 rounded-full relative flex items-center justify-center transition-all duration-300
              ${isValid 
                ? 'bg-[#027bbd] hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20' 
                : 'bg-[#027bbd]/50 cursor-not-allowed'}`}
          >
            <span className="text-white text-lg font-medium">Continue</span>
            {isValid && (
              <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                           flex items-center justify-center transition-transform 
                           group-hover:scale-105 group-hover:bg-[#4ba5d4]">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            )}
          </button>
        </div>

        {/* Low BMI Warning */}
        {showLowBMIWarning && (
          <div className="text-center space-y-2">
            <p className="text-[#5e8bff] text-sm font-bold">
              Please review the information you entered again
            </p>
            <p className="text-[#263853] text-lg md:text-xl font-medium">
              If this is your correct current weight, we don't recommend you lose any weight given your BMI {'<'} 18.5.
            </p>
            <p className="text-[#263853] text-lg md:text-xl font-medium">
              But our program can still help you alleviate common
            </p>
            <p className="text-[#263853] text-lg md:text-xl font-medium">
              <span className="text-[#5e8bff] font-bold">menopause</span> symptoms if you choose to proceed.
            </p>
          </div>
        )}
      </div>
    );
  };

  // Add new state variables
  const [isTargetStFocused, setIsTargetStFocused] = useState(false);
  const [isTargetLbsFocused, setIsTargetLbsFocused] = useState(false);
  const [isTargetKgFocused, setIsTargetKgFocused] = useState(false);

  // Add validation function
  const validateTargetWeight = () => {
    // First calculate current weight in kg
    const currentWeightKg = unit === 'imperial' 
      ? parseFloat(convertImperialToMetricWeight(weightSt, weightLbs))
      : parseFloat(weightKg);
    
    // Then calculate target weight in kg using a separate variable name
    const calculatedTargetKg = unit === 'imperial'
      ? parseFloat(convertImperialToMetricWeight(targetWeightSt, targetWeightLbs))
      : parseFloat(targetWeightKg);

    if (calculatedTargetKg >= currentWeightKg) {
      return 'too-high';
    }

    const minWeight = currentWeightKg * 0.85; // 15% less than current weight
    if (calculatedTargetKg < minWeight) {
      return 'too-low';
    }

    return 'valid';
  };

  // Add the renderStep26
  const renderStep26 = () => {
    const handleUnitChange = (newUnit: Unit) => {
      if (newUnit === unit) return;

      if (newUnit === 'metric' && targetWeightSt && targetWeightLbs) {
        setTargetWeightKg(convertImperialToMetricWeight(targetWeightSt, targetWeightLbs));
      } else if (newUnit === 'imperial' && targetWeightKg) {
        const { st, lbs } = convertMetricToImperialWeight(targetWeightKg);
        setTargetWeightSt(st);
        setTargetWeightLbs(lbs);
      }

      setUnit(newUnit);
    };

    const isValid = unit === 'imperial' ? (targetWeightSt && targetWeightLbs) : targetWeightKg;
    const weightValidation = isValid ? validateTargetWeight() : 'valid';

    return (
      <div className="space-y-10">
        {/* Question */}
        <div className="text-center">
          <h1 className="text-[#263853] text-[32px] font-medium tracking-[-0.03em]">
            What is your desired weight?
          </h1>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-[#263853] text-sm tracking-[-0.03em] leading-relaxed">
            Our program has helped thousands of women
            <br />
            just like you reach their desired body weight.
          </p>
        </div>

        {/* Unit Toggle */}
        <div className="flex rounded-xl overflow-hidden">
          <button
            onClick={() => handleUnitChange('imperial')}
            className={`flex-1 h-14 font-medium text-lg transition-colors
              ${unit === 'imperial' 
                ? 'bg-[#239b77] text-white shadow-md' 
                : 'bg-[#f5fafc] text-[#445664]'}`}
          >
            Imperial
          </button>
          <button
            onClick={() => handleUnitChange('metric')}
            className={`flex-1 h-12 font-medium transition-colors
              ${unit === 'metric' 
                ? 'bg-[#239b77] text-white' 
                : 'bg-[#f5fafc] text-[#445664]'}`}
          >
            Metric
          </button>
        </div>

        {/* Weight Input */}
        {unit === 'imperial' ? (
          <div className="flex gap-3">
            <div className="flex-1">
              <div className="flex items-center h-16 px-6 rounded-xl border border-[#c0cfd5] bg-white">
                <span className="text-[#c0cfd5] mr-4">Weight</span>
                <input
                  type="number"
                  value={targetWeightSt}
                  onChange={(e) => setTargetWeightSt(e.target.value)}
                  onFocus={() => setIsTargetStFocused(true)}
                  onBlur={() => setIsTargetStFocused(false)}
                  className="flex-1 bg-transparent outline-none text-[#263853] text-lg"
                  placeholder=""
                />
                <span className={`ml-4 ${isTargetStFocused ? 'text-[#565656]' : 'text-[#e8f0f4]'}`}>
                  st
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center h-16 px-6 rounded-xl border border-[#c0cfd5] bg-white">
                <input
                  type="number"
                  value={targetWeightLbs}
                  onChange={(e) => setTargetWeightLbs(e.target.value)}
                  onFocus={() => setIsTargetLbsFocused(true)}
                  onBlur={() => setIsTargetLbsFocused(false)}
                  className="flex-1 bg-transparent outline-none text-[#263853] text-lg"
                  placeholder=""
                />
                <span className={`ml-4 ${isTargetLbsFocused ? 'text-[#565656]' : 'text-[#e8f0f4]'}`}>
                  lbs
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center h-16 px-6 rounded-xl border border-[#c0cfd5] bg-white">
            <span className="text-[#c0cfd5] mr-4">Weight</span>
            <input
              type="number"
              value={targetWeightKg}
              onChange={(e) => setTargetWeightKg(e.target.value)}
              onFocus={() => setIsTargetKgFocused(true)}
              onBlur={() => setIsTargetKgFocused(false)}
              className="flex-1 bg-transparent outline-none text-[#263853] text-lg"
              placeholder=""
            />
            <span className={`ml-4 ${isTargetKgFocused ? 'text-[#565656]' : 'text-[#e8f0f4]'}`}>
              kg
            </span>
          </div>
        )}

        {/* Error Message */}
        {!isValid && (
          <p className="text-[#027bbd] text-sm">
            Please enter your target weight
          </p>
        )}

        {/* Continue Button */}
        <div className="mt-8">
          <button 
            onClick={() => isValid && weightValidation === 'valid' && setCurrentStep(currentStep + 1)}
            className={`w-full h-14 rounded-full relative flex items-center justify-center transition-all duration-300
              ${isValid && weightValidation === 'valid'
                ? 'bg-[#027bbd] hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20' 
                : 'bg-[#027bbd]/50 cursor-not-allowed'}`}
          >
            <span className="text-white text-lg font-medium">Continue</span>
            {isValid && weightValidation === 'valid' && (
              <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                           flex items-center justify-center transition-transform 
                           group-hover:scale-105 group-hover:bg-[#4ba5d4]">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            )}
          </button>
        </div>

        {/* Validation Messages */}
        {weightValidation === 'too-low' && (
          <div className="text-center space-y-2">
            <p className="text-[#263853] text-lg md:text-xl font-medium">
              We're afraid your desired body weight is outside
              <br />
              of our recommended range.
            </p>
            <p className="text-[#5e8bff] text-sm font-bold">
              Please edit your desired weight to continue.
            </p>
          </div>
        )}

        {weightValidation === 'too-high' && (
          <div className="text-center space-y-2">
            <p className="text-[#263853] text-lg md:text-xl font-medium">
              We're sorry, we currently only offer a program
              <br />
              to lose weight, not to gain weight.
            </p>
            <p className="text-[#5e8bff] text-sm font-bold">
              Please edit your desired weight to continue.
            </p>
          </div>
        )}
      </div>
    );
  };

  // Add the renderStep28
  const renderStep28 = () => {
    return (
      <div className="space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[#263853] text-[32px] font-medium tracking-[-0.03em]">
            Body mass index
          </h1>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-[#263853] text-sm tracking-[-0.03em] leading-relaxed">
            Based on quiz answers your BMI shows that your
            <br />
            weight may increase if you don't act now!
          </p>
        </div>

        {/* BMI Image */}
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/P28-E1-body-mass-index.avif"
            alt="Body mass index"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button 
            onClick={() => setCurrentStep(currentStep + 1)}
            className="w-full h-14 rounded-full relative flex items-center justify-center 
                     bg-[#027bbd] transition-all duration-300
                     hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
          >
            <span className="text-white text-lg font-medium">Continue</span>
            <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                         flex items-center justify-center transition-transform 
                         group-hover:scale-105 group-hover:bg-[#4ba5d4]">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </button>
        </div>
      </div>
    );
  };

  // Update the renderStep29
  const renderStep29 = () => {
    // Calculate weights for display
    const currentWeightDisplay = unit === 'imperial'
      ? `${weightSt}st ${weightLbs}lbs`
      : `${weightKg}kg`;

    const targetWeightDisplay = unit === 'imperial'
      ? `${targetWeightSt}st ${targetWeightLbs}lbs`
      : `${targetWeightKg}kg`;

    return (
      <div className="space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            Your potential improvement
            <br />
            in 12 weeks
          </h1>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-[#263853] text-sm tracking-[-0.03em]">
            We estimate that you can potentially reach{' '}
            <span className="text-[#027bbd]">{targetWeightDisplay}</span>
            {' '}weight target.
          </p>
        </div>

        {/* Weight Progress Visualization */}
        <div className="bg-[#fcf9f0] rounded-2xl p-6">
          <p className="text-[#263853] text-sm font-medium text-center mb-8">
            Your achievable weight:
          </p>
          
          <div className="relative h-[200px]">
            {/* Curved Progress Line with Gradient */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 300 200">
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff4d4d" />
                    <stop offset="33%" stopColor="#ffa64d" />
                    <stop offset="66%" stopColor="#ffff4d" />
                    <stop offset="100%" stopColor="#4dff4d" />
                  </linearGradient>
                </defs>
                
                {/* Curved Path */}
                <path
                  d="M 50,50 C 100,50 200,150 250,150"
                  stroke="url(#progressGradient)"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>

            {/* Current Weight Label */}
            <div className="absolute top-[40px] left-[40px]">
              <div className="bg-[#027bbd] text-white px-4 py-2 rounded-lg text-sm">
                {currentWeightDisplay}
              </div>
              <div className="h-20 border-l-2 border-dashed border-[#d3dee2] ml-6 mt-2">
                <span className="text-[#263853] text-xs block mt-2">W1</span>
              </div>
            </div>

            {/* Target Weight Label with Tooltip */}
            <div className="absolute bottom-[40px] right-[40px]">
              <div className="relative">
                <div className="bg-[#027bbd] text-white px-4 py-2 rounded-lg text-sm">
                  {targetWeightDisplay}
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="w-4 h-4 bg-[#027bbd] rounded-full" />
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="bg-[#505050] text-white text-xs px-3 py-1 rounded">
                        Your weight after 12 weeks
                      </div>
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#505050] mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-20 border-l-2 border-dashed border-[#d3dee2] ml-6 mt-2">
                <span className="text-[#263853] text-xs block mt-2">W12</span>
              </div>
            </div>

            {/* "Weight Stays Off" Arrow */}
            <div className="absolute bottom-[100px] right-[20px] transform rotate-[-30deg]">
              <div className="flex items-center">
                <span className="text-[#505050] text-sm mr-2">The weight stays off!</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button 
            onClick={() => setCurrentStep(currentStep + 1)}
            className="w-full h-14 rounded-full relative flex items-center justify-center 
                     bg-[#027bbd] transition-all duration-300
                     hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
          >
            <span className="text-white text-lg font-medium">Continue</span>
            <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                         flex items-center justify-center transition-transform 
                         group-hover:scale-105 group-hover:bg-[#4ba5d4]">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </button>
        </div>
      </div>
    );
  };

  // Add new state variable for loading progress
  const [step30LoadingProgress, setStep30LoadingProgress] = useState(0);

  // Add useEffect for loading animation
  useEffect(() => {
    if (currentStep === 29) {
      const timer = setInterval(() => {
        setStep30LoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 1;
        });
      }, 30);

      return () => clearInterval(timer);
    } else {
      setStep30LoadingProgress(0); // Reset quando sair do step
    }
  }, [currentStep]);

  // Add the renderStep30
  const renderStep30 = () => {
    return (
      <div className="space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[32px] md:text-[38px] font-medium tracking-[-0.03em] leading-tight">
            <span className="text-[#263853]">Maintain your optimal weight and get your </span>
            <span className="text-[#027bbd]">Pilates Body</span>
          </h1>
        </div>

        {/* Loading Image */}
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <Image
            src="/P30-E1-loading-pilates-program.webp"
            alt="Loading Pilates Program"
            fill
            className="object-contain rounded-2xl"
            priority
          />
        </div>

        {/* Loading Progress */}
        <div className="space-y-4">
          <div className="h-2 w-full bg-[#f6f6f6] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#65d26e] transition-all duration-300 ease-linear"
              style={{ width: `${step30LoadingProgress}%` }}
            />
          </div>
          <p className="text-center text-[#263853] text-lg">
            Your plan is ready!
          </p>
        </div>

        {/* Message */}
        <div className="text-[#263853] text-xl md:text-3xl font-medium leading-relaxed text-left">
          If you follow our plan, you significantly increase your chances of maintaining a healthy weight for the rest of your life.
        </div>

        {/* Continue Button */}
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="w-full h-14 rounded-full relative flex items-center justify-center 
                   bg-[#027bbd] transition-all duration-300
                   hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
        >
          <span className="text-white text-lg font-medium">Continue</span>
          <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                       flex items-center justify-center transition-transform 
                       group-hover:scale-105 group-hover:bg-[#4ba5d4]">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
    );
  };

  // Add the renderStep31
  const renderStep31 = () => {
    return (
      <div className="space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            The best women's lifestyle
            <br />
            & fitness app in 2025
          </h1>
        </div>

        {/* App Images */}
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/P31-E1-best-fitness-app.jpg"
              alt="Best fitness app"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/P31-E2-best-fitness-app-women.avif"
              alt="Best fitness app for women"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button 
            onClick={() => setCurrentStep(currentStep + 1)}
            className="w-full h-14 rounded-full relative flex items-center justify-center 
                     bg-[#027bbd] transition-all duration-300
                     hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
          >
            <span className="text-white text-lg font-medium">Continue</span>
            <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                         flex items-center justify-center transition-transform 
                         group-hover:scale-105 group-hover:bg-[#4ba5d4]">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </button>
        </div>
      </div>
    );
  };

  // Add new state variables
  const [email, setEmail] = useState('');
  const [emailConsent, setEmailConsent] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Add the renderStep32
  const renderStep32 = () => {
    const isValid = email && emailConsent && termsAccepted;

    return (
      <div className="space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            Enter your email to receive your{' '}
            <span className="text-[#027bbd]">Wall Pilates</span>
            {' '}plan
          </h1>
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full h-16 px-6 rounded-xl border border-[#d1d1d1] bg-white
                     placeholder-[#b0b0b0] text-[#263853] text-lg outline-none
                     focus:border-[#027bbd] transition-colors"
          />
        </div>

        {/* Stats Card */}
        <div className="bg-[#fcf9f0] rounded-2xl p-6 text-center">
          <h2 className="text-[#027bbd] text-4xl font-bold mb-2">
            500,000+
          </h2>
          <p className="text-[#263853] text-lg">
            women have already joined
          </p>
        </div>

        {/* Email Consent */}
        <div className="flex items-start gap-4">
          <button
            onClick={() => setEmailConsent(!emailConsent)}
            className={`w-6 h-6 rounded border flex-shrink-0 flex items-center justify-center 
              transition-all duration-300 cursor-pointer
              ${emailConsent 
                ? 'bg-[#273854] border-[#273854]' 
                : 'border-[#C5CDE4] bg-white hover:border-[#273854]'}`}
          >
            {emailConsent && (
              <Check className="w-4 h-4 text-white" />
            )}
          </button>
          <p className="text-[#475966] text-xs leading-relaxed">
            I agree to receive future emails from Reverse Health and its affiliates 
            with tips, offers, products and more.
          </p>
        </div>

        {/* Terms Acceptance */}
        <div className="flex items-start gap-4">
          <button
            onClick={() => setTermsAccepted(!termsAccepted)}
            className={`w-6 h-6 rounded border flex-shrink-0 flex items-center justify-center 
              transition-all duration-300 cursor-pointer
              ${termsAccepted 
                ? 'bg-[#273854] border-[#273854]' 
                : 'border-[#C5CDE4] bg-white hover:border-[#273854]'}`}
          >
            {termsAccepted && (
              <Check className="w-4 h-4 text-white" />
            )}
          </button>
          <p className="text-[#475966] text-xs leading-relaxed">
            I acknowledge that I have read, understood, and accepted the{' '}
            <button 
              onClick={() => setShowTerms(true)}
              className="text-[#027bbd] underline hover:text-[#0269a3] transition-colors"
            >
              Terms of Use
            </button>
            {' '}and{' '}
            <button
              onClick={() => setShowTerms(true)}
              className="text-[#027bbd] underline hover:text-[#0269a3] transition-colors"
            >
              Privacy Policy
            </button>
            .
          </p>
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button 
            onClick={() => isValid && setCurrentStep(currentStep + 1)}
            className={`w-full h-14 rounded-full relative flex items-center justify-center 
              transition-all duration-300
              ${isValid 
                ? 'bg-[#027bbd] hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20' 
                : 'bg-[#027bbd]/50 cursor-not-allowed'}`}
          >
            <span className="text-white text-lg font-medium">Continue</span>
            {isValid && (
              <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                           flex items-center justify-center transition-transform 
                           group-hover:scale-105 group-hover:bg-[#4ba5d4]">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            )}
          </button>
        </div>

        {/* Terms Modal */}
        {showTerms && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-[#263853] text-3xl font-medium">
                  Terms & Privacy Policy
                </h2>
                <button 
                  onClick={() => setShowTerms(false)}
                  className="text-[#505050] hover:text-[#263853] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="prose prose-sm max-w-none">
                {/* Add your terms content here */}
                <p>Terms and Privacy Policy content goes here...</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Add the renderStep33
  const renderStep33 = () => {
    // Calculate estimated weight loss (about 1-2% of current weight for first week)
    const calculateEstimatedLoss = () => {
      if (unit === 'imperial') {
        const totalLbs = (parseInt(weightSt) * 14) + parseInt(weightLbs);
        const weeklyLossLbs = Math.round(totalLbs * 0.015); // 1.5% loss
        const weeklyLossSt = Math.floor(weeklyLossLbs / 14);
        const remainingLbs = weeklyLossLbs % 14;
        return `${weeklyLossSt > 0 ? `${weeklyLossSt}st ` : ''}${remainingLbs}lbs`;
      } else {
        const weeklyLossKg = Math.round(parseInt(weightKg) * 0.015 * 10) / 10; // 1.5% loss, rounded to 1 decimal
        return `${weeklyLossKg}kg`;
      }
    };

    return (
      <div className="space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[#263853] text-[32px] font-medium tracking-[-0.03em]">
            Estimated results in first 7 days
          </h1>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-[#263853] text-sm tracking-[-0.03em] leading-relaxed">
            If you are active with our program,
            <br />
            we estimate that you can lose
          </p>
        </div>

        {/* Results Image with Dynamic Text */}
        <div className="relative">
          <Image
            src="/P33-E1-.avif"
            alt="Estimated results"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 text-[#263853] text-4xl font-bold">
            {calculateEstimatedLoss()}
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button 
            onClick={() => setCurrentStep(currentStep + 1)}
            className="w-full h-14 rounded-full relative flex items-center justify-center 
                     bg-[#027bbd] transition-all duration-300
                     hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
          >
            <span className="text-white text-lg font-medium">Continue</span>
            <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                         flex items-center justify-center transition-transform 
                         group-hover:scale-105 group-hover:bg-[#4ba5d4]">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </button>
        </div>
      </div>
    );
  };

  // Add the renderStep34
  const renderStep34 = () => {
    return (
      <div className="space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            Our program and coaches
            <br />
            featured in
          </h1>
        </div>

        {/* Media Logos - First Row */}
        <div className="grid grid-cols-3 gap-6">
          <div className="flex items-center justify-center">
            <Image
              src="/P34-E1-daily_mirror.png"
              alt="Daily Mirror"
              width={160}
              height={40}
              className="h-auto w-full"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/P34-E2-forbeshealth.png"
              alt="Forbes Health"
              width={160}
              height={40}
              className="h-auto w-full"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/P34-E3-yahoofinance.png"
              alt="Yahoo Finance"
              width={160}
              height={40}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Media Logos - Second Row */}
        <div className="grid grid-cols-3 gap-6">
          <div className="flex items-center justify-center">
            <Image
              src="/P34-E4-sky.png"
              alt="Sky"
              width={160}
              height={40}
              className="h-auto w-full"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/P34-E5-theguardian.png"
              alt="The Guardian"
              width={160}
              height={40}
              className="h-auto w-full"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/P34-E6-oregon-1.png"
              alt="Oregon"
              width={160}
              height={40}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Workouts Info Card */}
        <div className="border-2 border-dashed border-[#239b77] bg-[#f4faf8] rounded-xl p-6 text-center">
          <p className="text-sm">
            <span className="text-[#239b77] font-medium">Over 200+</span>
            {' '}
            <span className="text-[#565656]">
              personalized workouts made by globally recognized experts.
            </span>
          </p>
        </div>

        {/* Testimonials Image */}
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/P34-E7-authority-related-testimonials.avif"
            alt="Authority related testimonials"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button 
            onClick={() => setCurrentStep(currentStep + 1)}
            className="w-full h-14 rounded-full relative flex items-center justify-center 
                     bg-[#027bbd] transition-all duration-300
                     hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
          >
            <span className="text-white text-lg font-medium">Continue</span>
            <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                         flex items-center justify-center transition-transform 
                         group-hover:scale-105 group-hover:bg-[#4ba5d4]">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </button>
        </div>
      </div>
    );
  };

  // Add the renderStep35
  const renderStep35 = () => {
    return (
      <div className="space-y-10">
        {/* Status Bar */}
        <div className="h-14 bg-gradient-to-r from-[#f5fafc] to-[#e6f4f9] rounded-full flex items-center justify-center px-6 shadow-sm">
          <span className="text-lg font-medium text-[#263853]">Almost done!</span>
          <span className="ml-2 text-2xl animate-bounce">🎉</span>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-bold tracking-[-0.03em]">
            Are you ready to commit?
          </h1>
        </div>

        {/* Description */}
        <div className="text-center bg-[#f8fcfe] rounded-xl p-4 border border-[#e6f4f9] shadow-sm">
          <p className="text-[#263853] text-lg md:text-xl font-medium tracking-[-0.03em]">
            Our Wall Pilates plan requires only <span className="text-[#027bbd] font-bold">10-15min</span> per day.
          </p>
        </div>

        {/* Commitment Options */}
        <div className="space-y-6">
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="w-full h-20 rounded-xl flex items-center justify-between px-6
                     bg-gradient-to-r from-[#f5fafc] to-[#e6f4f9] hover:from-[#e6f4f9] hover:to-[#d7eef7]
                     border-2 border-[#e6f4f9] hover:border-[#d7eef7] hover:shadow-md
                     transition-all duration-300"
          >
            <span className="text-[#263853] text-xl font-medium">
              Yes, I will do my first Wall Pilates session tomorrow
            </span>
            <span className="text-4xl">💪🏼</span>
          </button>

          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="w-full h-20 rounded-xl flex items-center justify-between px-6
                     bg-gradient-to-r from-[#e6f4f9] to-[#d7eef7] hover:from-[#d7eef7] hover:to-[#c8e8f5]
                     border-2 border-[#d7eef7] hover:border-[#c8e8f5] hover:shadow-md
                     transition-all duration-300"
          >
            <span className="text-[#263853] text-xl font-medium">
              Yes! I will do my first Wall Pilates session today!
            </span>
            <span className="text-4xl">🙌🏼</span>
          </button>

          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="w-full h-20 rounded-xl flex items-center justify-between px-6
                     bg-[#f5fafc] hover:bg-white
                     border-2 border-[#e6f4f9] hover:border-[#d7eef7]
                     transition-all duration-300"
          >
            <span className="text-[#263853] text-xl font-medium">
              I'm not sure if I'm ready yet…
            </span>
            <span className="text-4xl">😅</span>
          </button>
        </div>
      </div>
    );
  };

  // Add new state variables
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [showFaq, setShowFaq] = useState<string | null>(null);
  const [showMoneyBackPolicy, setShowMoneyBackPolicy] = useState(false);

  // Add pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      id: '1-week',
      duration: '1-WEEK PLAN',
      originalPrice: 18.66,
      discountedPrice: 7.28,
      perDay: 2.67,
      discountedPerDay: 1.04
    },
    {
      id: '4-week',
      duration: '4-WEEK PLAN',
      originalPrice: 40.90,
      discountedPrice: 15.95,
      perDay: 1.43,
      discountedPerDay: 0.57,
      isPopular: true
    },
    {
      id: '12-week',
      duration: '12-WEEK PLAN',
      originalPrice: 69.98,
      discountedPrice: 27.29,
      perDay: 0.82,
      discountedPerDay: 0.32,
      hasGift: true
    }
  ];

  // Add FAQ data
  const faqItems = [
    {
      question: "Why do women over 40 need a different approach to reach their fitness goals?",
      answer: "When women are getting older, the female hormone estrogen drops and women lose lean muscle mass and increase body fat. In order to reverse this process, it's time to change up your routine. Follow our custom-made exercise program and diet, including supplements for women over 40."
    },
    // ... other FAQ items
  ];

  // Add countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  // Add the renderStep36
  const renderStep36 = () => {
    return (
      <div className="relative font-satoshi tracking-[-0.03em]">
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 right-0 bg-white z-50 px-4">
          <div className="max-w-xl mx-auto">
            <div className="flex items-center justify-between bg-[#f6fbfd] p-4 rounded-lg">
              {/* Back Button */}
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-[#505050] hover:text-[#404040] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Logo */}
              <div className="mr-4">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={120}
                  height={30}
                  className="h-auto w-auto object-contain brightness-0"
                />
              </div>

              {/* Timer */}
              <div className="flex items-center gap-2">
                <div className="bg-[#f0f7fc] px-3 py-1 rounded-lg">
                  <div className="text-[#027bbc] text-lg font-bold">
                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                  </div>
                </div>

                {/* Get Plan Button */}
                <a href="#select-membership" className="bg-[#027bbc] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0269a3] transition-colors">
                  Get plan
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-24 space-y-8 pb-8">
          {/* Progress Comparison */}
          <div className="bg-[#f6fbfd] p-6 rounded-xl">
            <div className="grid grid-cols-2 gap-8">
              {/* Current State */}
              <div>
                <h3 className="text-[#172554] text-center mb-4">Now</h3>
                <Image
                  src="/P36-E1-flabby.webp"
                  alt="Current body"
                  width={200}
                  height={300}
                  className="mx-auto mb-4"
                />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Body fat</span>
                    <span>30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Healthy weight</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <div 
                          key={i}
                          className={`w-2 h-2 rounded-full ${i <= 3 ? 'bg-[#027bbc]' : 'bg-[#cbd5e1]'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Target State */}
              <div>
                <h3 className="text-[#219a77] text-center mb-4">After the plan</h3>
                <Image
                  src="/P36-E2-fit.webp"
                  alt="Target body"
                  width={200}
                  height={300}
                  className="mx-auto mb-4"
                />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Body fat</span>
                    <span>20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Healthy weight</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <div 
                          key={i}
                          className="w-2 h-2 rounded-full bg-[#027bbc]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-[#172554] text-3xl md:text-4xl font-bold text-center leading-tight">
            Your <span className="text-[#027bbc]">Wall Pilates</span> plan for
            <br />
            women over 40 is ready!
          </h1>

          {/* Goals Card */}
          <div className="bg-[#fefbeb] p-6 rounded-xl grid grid-cols-2 gap-8">
            <div>
              <div className="mb-2">🏔️</div>
              <div className="text-sm">Goal</div>
              <div className="font-bold">Toned Pilates body</div>
            </div>
            <div>
              <div className="mb-2">⚖️</div>
              <div className="text-sm">Target weight</div>
              <div className="font-bold">
                {unit === 'imperial' 
                  ? `${targetWeightSt}st ${targetWeightLbs}lbs`
                  : `${targetWeightKg}kg`}
              </div>
            </div>
          </div>

          {/* Discount Timer */}
          <div className="bg-[#219a77] text-white p-4 text-center rounded-lg mb-6">
            <span className="font-bold">60% discount expires in: </span>
            <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
          </div>

          {/* Pricing Plans */}
          <div id="select-membership" className="space-y-4">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative p-6 rounded-xl cursor-pointer transition-all
                  ${selectedPlan === plan.id 
                    ? 'bg-[#f6fbfd] border-2 border-[#027bbc]' 
                    : 'bg-white border border-[#e5e7eb]'}`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-4 bg-[#219a77] text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium">{plan.duration}</div>
                    <div className="text-lg">
                      <span className="line-through text-gray-400">£{plan.originalPrice}</span>
                      {' '}
                      <span className="font-bold">£{plan.discountedPrice}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="line-through text-gray-400">£{plan.perDay}</div>
                    <div className="font-bold text-lg">£{plan.discountedPerDay}</div>
                    <div className="text-sm">per day</div>
                  </div>
                </div>
                {plan.hasGift && (
                  <div className="mt-2">
                    <span className="bg-[#ecf6f6] text-[#4b5563] px-3 py-1 rounded-full text-sm border border-dashed border-[#21c55d]">
                      +secret gift included🎁
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Money Back Guarantee */}
          <button
            onClick={() => setShowMoneyBackPolicy(true)}
            className="text-center w-full text-lg font-medium underline"
          >
            30-Day Money-Back Guarantee
          </button>

          {/* Select Membership Button - Only show when plan is selected */}
          {selectedPlan && (
            <>
              {/* Countdown Timer - Moved to top */}
              <div className="bg-[#219a77] text-white p-4 text-center rounded-lg mb-6">
                <span className="font-bold">60% discount expires in: </span>
                <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
              </div>

              {/* Email Input */}
              <div className="bg-white rounded-xl p-6 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to continue"
                  className="w-full h-14 px-4 rounded-lg border border-[#d1d5da] 
                           placeholder-[#d1d5da] focus:outline-none focus:border-[#027bbc]"
                />
              </div>

              {/* Confirmation Button */}
              <button
                disabled={!termsAgreed || !email}
                onClick={() => termsAgreed && email && setShowPaymentModal(true)}
                className={`w-full h-14 rounded-full relative flex items-center justify-center
                  text-white text-lg font-medium transition-all duration-300
                  ${termsAgreed && email
                    ? 'bg-gradient-to-r from-[#1a8b69] via-[#219a77] to-[#27ab85] animate-[gentlePulse_3s_ease-in-out_infinite]' 
                    : 'bg-gradient-to-r from-[#1a8b69]/50 via-[#219a77]/50 to-[#27ab85]/50 cursor-not-allowed'}`}
              >
                CONFIRM SUBSCRIPTION
              </button>
            </>
          )}

          {/* Terms Agreement */}
          <div className="flex items-start gap-4">
            <button
              onClick={() => setTermsAgreed(!termsAgreed)}
              className={`w-6 h-6 rounded border flex-shrink-0 flex items-center justify-center 
                transition-all duration-300 cursor-pointer
                ${termsAgreed 
                  ? 'bg-[#273854] border-[#273854]' 
                  : 'border-[#C5CDE4] bg-white hover:border-[#273854]'}`}
            >
              {termsAgreed && (
                <Check className="w-4 h-4 text-white" />
              )}
            </button>
            <p className="text-[#475966] text-xs leading-relaxed">
              By clicking this, you agree to{' '}
              <button className="text-[#027bbd] underline">Terms of Service</button>
              {' '}and{' '}
              <button className="text-[#027bbd] underline">Privacy Policy</button>
              {' '}and to the £15.95 for the 4-week membership to Reverse Health...
            </p>
          </div>

          {/* App Screenshots */}
          <div>
            <h2 className="text-[#172554] text-3xl font-bold text-center mb-8">
              Use our easy-to-use mobile app to reach your goals
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/P36-E3-fitness-screenshot-1.webp"
                alt="App screenshot 1"
                width={160}
                height={320}
                className="w-full h-auto"
              />
              <Image
                src="/P36-E4-fitness-screenshot-2.webp"
                alt="App screenshot 2"
                width={200}
                height={400}
                className="w-full h-auto"
              />
              <Image
                src="/P36-E5-fitness-screenshot-3.webp"
                alt="App screenshot 3"
                width={160}
                height={320}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            {/* Feature items */}
          </div>

          {/* Media Mentions */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">
              Our program and coaches featured in
            </h2>
            <div className="grid grid-cols-3 gap-6 mb-6">
              {/* First row of logos */}
            </div>
            <div className="grid grid-cols-3 gap-6">
              {/* Second row of logos */}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-[#fefbeb] p-6 rounded-xl">
            <h2 className="text-xl font-bold text-center mb-6">
              What our members say about us
            </h2>
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/P36-E12-theresa.webp"
                alt="Theresa"
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="font-bold">Theresa</span>
            </div>
            <div className="text-[#fde047] text-3xl mb-4">❤️❤️❤️❤️❤️</div>
            <p className="text-sm">
              I've been on so many diets, but this plan is truly different...
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">
              What members often ask
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-[#f5fafc] rounded-xl">
                  <button
                    onClick={() => setShowFaq(showFaq === item.question ? null : item.question)}
                    className="w-full p-4 flex justify-between items-center"
                  >
                    <span>{item.question}</span>
                    <span>{showFaq === item.question ? '-' : '+'}</span>
                  </button>
                  {showFaq === item.question && (
                    <div className="p-4 bg-white rounded-b-xl">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Money Back Guarantee Card */}
          <div className="bg-[#f4faf8] border-2 border-dashed border-[#3a7841] rounded-xl p-6">
            <h3 className="text-center font-bold mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-center mb-2">
              Get 100% of your money back if you don't see visible results after following our program!
            </p>
            <button className="text-[#239b77] text-center w-full">
              Money-back policy
            </button>
          </div>

          {/* Email Input - Moved up and styled */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="space-y-4">
              <div className="text-center">
                <h2 className="text-[#263853] text-xl font-medium">
                  Enter your email to complete your order
                </h2>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full h-16 px-6 rounded-xl border border-[#d1d1d1] bg-white
                         placeholder-[#b0b0b0] text-[#263853] text-lg outline-none
                         focus:border-[#027bbd] transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Add new state for payment modal
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Update the payment handler function
  const handlePayment = async (planId: string | null) => {
    if (!planId) return;

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          email,
        }),
      });

      const data = await response.json();

      if (!data.sessionId) {
        throw new Error('No session ID returned');
      }

      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe not initialized');
      }

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) {
        console.error('Payment error:', result.error);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  // Payment Modal
  {showPaymentModal && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-[#263853] text-3xl font-medium">
            Complete Your Purchase
          </h2>
          <button 
            onClick={() => setShowPaymentModal(false)}
            className="text-[#505050] hover:text-[#263853] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Limited Spots Alert */}
          <div className="bg-[#fff8e6] border border-[#ffc107] rounded-lg p-4 text-center">
            <p className="text-[#e67700] font-medium mb-1">Limited Spots Available!</p>
            <p className="text-sm text-[#664d03]">Only 7 spots left for today's enrollment</p>
          </div>
          
          <div className="text-center">
            <p className="text-[#263853] text-lg mb-2">
              Selected Plan: {pricingPlans.find(p => p.id === selectedPlan)?.duration}
            </p>
            <p className="text-[#027bbd] text-3xl font-bold">
              £{pricingPlans.find(p => p.id === selectedPlan)?.discountedPrice}
            </p>
          </div>
          
          <button
            onClick={() => selectedPlan && handlePayment(selectedPlan)}
            className="w-full h-14 bg-gradient-to-r from-[#027bbd] to-[#0269a3] rounded-full text-white font-medium
                     hover:from-[#0269a3] hover:to-[#015a8f] transition-all duration-300 shadow-md
                     animate-[gentlePulse_3s_ease-in-out_infinite]"
          >
            Secure Your Spot Now
          </button>
          
          <p className="text-center text-xs text-[#6b7280]">
            By proceeding, you'll be redirected to our secure payment processor
          </p>
        </div>
      </div>
    </div>
  )}

  // Add the renderStep37
  const renderStep37 = () => {
    return (
      <div className="space-y-10">
        {/* Back Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="flex items-center gap-2 text-[#172554] hover:text-[#0269a3] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to plans</span>
          </button>
        </div>

        {/* Title */}
        <h1 className="text-[#172554] text-[32px] font-medium">
          Checkout
        </h1>

        {/* Payment Card */}
        <div className="bg-white rounded-xl p-6 space-y-6">
          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="font-bold text-[#4b5563]">Total</span>
            <span>
              <span className="text-[#027bbc]">£15.95</span>
              <span className="text-[#4b5563]"> for 4 weeks</span>
            </span>
          </div>

          <div className="border-t border-[#e4e7eb]" />

          {/* Payment Methods */}
          <div className="space-y-4">
            <p className="text-[#4b5563] text-center">
              The safer, easier way to pay
            </p>

            {/* PayPal Button */}
            <button className="w-full h-12 bg-[#ffc33a] rounded-full flex items-center justify-center">
              <Image
                src="/paypal-logo.png"
                alt="PayPal"
                width={80}
                height={20}
                className="h-5 w-auto"
              />
            </button>

            {/* Card Icons */}
            <div className="flex justify-center gap-4">
              <Image src="/amex.png" alt="Amex" width={40} height={25} />
              <Image src="/visa.png" alt="Visa" width={40} height={25} />
              <Image src="/mastercard.png" alt="Mastercard" width={40} height={25} />
              <Image src="/discover.png" alt="Discover" width={40} height={25} />
            </div>

            {/* Card Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full h-12 px-4 rounded-lg border border-[#d1d5da] 
                           placeholder-[#d1d5da] focus:outline-none focus:border-[#027bbc]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full h-12 px-4 rounded-lg border border-[#d1d5da] 
                             placeholder-[#d1d5da] focus:outline-none focus:border-[#027bbc]"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="3 Digits"
                    className="w-full h-12 px-4 rounded-lg border border-[#d1d5da] 
                             placeholder-[#d1d5da] focus:outline-none focus:border-[#027bbc]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full h-12 bg-[#027bbc] rounded-full text-white 
                             flex items-center justify-center gap-2
                             hover:bg-[#0269a3] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M12 15V17M6 9V7C6 4.79086 7.79086 3 10 3H14C16.2091 3 18 4.79086 18 7V9M6 9H18M6 9C4.89543 9 4 9.89543 4 11V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V11C20 9.89543 19.1046 9 18 9" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Secure Payment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Add the renderStep27
  const renderStep27 = () => {
    return (
      <div className="space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            Your fitness level naturally
            <br />
            declines over time…
            <br />
            but it's not too late!
          </h1>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/P27-E1-health-index.avif"
            alt="Health index"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Description */}
        <div className="space-y-6">
          <p className="text-[#263853] text-lg md:text-xl tracking-[-0.03em] leading-relaxed font-medium">
            Don't worry, you're not alone. All our customers
            <br className="hidden md:block" />
            experience the same decline as they get older,
            <br className="hidden md:block" />
            it's a normal part of aging.
          </p>

          <p className="text-[#263853] text-lg md:text-xl tracking-[-0.03em] leading-relaxed font-medium">
            What's more important is what comes next. You
            <br className="hidden md:block" />
            haven't missed the boat, you're still able to
            <br className="hidden md:block" />
            <span className="text-[#027bbd] font-bold">reverse your declining well-being</span> and aging.
          </p>
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button 
            onClick={() => setCurrentStep(currentStep + 1)}
            className="w-full h-14 rounded-full relative flex items-center justify-center 
                     bg-[#027bbd] transition-all duration-300
                     hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
          >
            <span className="text-white text-lg font-medium">Learn more</span>
            <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                         flex items-center justify-center transition-transform 
                         group-hover:scale-105 group-hover:bg-[#4ba5d4]">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </button>
        </div>
      </div>
    );
  };

  // Add renderStep9 function
  const renderStep9 = () => {
    return (
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            What's your current activity level?
          </h1>
        </div>

        <div className="space-y-4">
          {activityLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => {
                const newLevels = activityLevels.map(l => ({
                  ...l,
                  selected: l.id === level.id
                }));
                setActivityLevels(newLevels);
                setTimeout(() => setCurrentStep(currentStep + 1), 500);
              }}
              className={`w-full h-14 rounded-xl flex items-center gap-4 px-5 transition-all duration-300
                ${level.selected 
                  ? 'bg-[#f5fafc] border-2 border-[#027bbd]/20' 
                  : 'bg-[#f5fafc]'}`}
            >
              <span className="text-3xl">{level.emoji}</span>
              <span className="text-[#263853] text-lg">{level.text}</span>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="w-full h-14 rounded-full relative flex items-center justify-center 
                   bg-[#027bbd] transition-all duration-300
                   hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
        >
          <span className="text-white text-lg font-medium">Continue</span>
          <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                       flex items-center justify-center transition-transform 
                       group-hover:scale-105 group-hover:bg-[#4ba5d4]">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
    );
  };

  // Update renderStep10 function - Medical Conditions
  const renderStep10 = () => {
    const hasSelectedConditions = medicalConditions.some(condition => condition.selected);
    const isNoneSelected = medicalConditions.find(c => c.isNone)?.selected;

    return (
      <div className="space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[#263853] text-[28px] md:text-[38px] font-medium tracking-[-0.03em] leading-tight">
            Are you experiencing
          </h1>
          <h1 className="text-[#263853] text-[28px] md:text-[38px] font-medium tracking-[-0.03em] leading-tight">
            any of the following?
          </h1>
        </div>

        {/* Medical Conditions List */}
        <div className="space-y-4">
          {medicalConditions.map((condition) => (
            <button
              key={condition.id}
              onClick={() => {
                const newConditions = medicalConditions.map(c => ({
                  ...c,
                  selected: condition.isNone 
                    ? c.id === condition.id 
                    : c.isNone 
                      ? false 
                      : c.id === condition.id 
                        ? !c.selected 
                        : c.selected
                }));
                setMedicalConditions(newConditions);
              }}
              disabled={isNoneSelected && !condition.isNone}
              className={`w-full h-16 md:h-20 rounded-xl flex items-center justify-between px-5 transition-all duration-300
                ${condition.selected 
                  ? 'bg-white border-2 border-[#f5fafc]' 
                  : 'bg-[#f5fafc]'}`}
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 transition-all
                  ${condition.selected 
                    ? 'border-[#027bbd] bg-[#027bbd]' 
                    : 'border-[#d3dee2] bg-[#f5fafc]'}`}
                >
                  {condition.selected && (
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  )}
                </div>
                <span className="text-[#263853] text-lg md:text-xl">{condition.text}</span>
              </div>
              <div className="w-14 h-14 md:w-20 md:h-20 relative">
                <Image
                  src={condition.image}
                  alt={condition.text}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => hasSelectedConditions && setCurrentStep(currentStep + 1)}
          className={`w-full h-14 md:h-16 rounded-full relative flex items-center justify-center 
            transition-all duration-300
            ${hasSelectedConditions 
              ? 'bg-[#027bbd] hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20' 
              : 'bg-[#027bbd]/50 cursor-not-allowed'}`}
        >
          <span className="text-white text-lg md:text-xl font-medium">Continue</span>
          {hasSelectedConditions && (
            <div className="absolute right-4 w-10 h-10 md:w-12 md:h-12 bg-[#3b99cb] rounded-full 
                         flex items-center justify-center transition-transform 
                         group-hover:scale-105 group-hover:bg-[#4ba5d4]">
              <ArrowRight className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
          )}
        </button>
      </div>
    );
  };

  // Add renderStep11 function
  const renderStep11 = () => {
    return (
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            How many times per week do you want to exercise?
          </h1>
        </div>

        <div className="space-y-4">
          {weeklyFrequencies.map((frequency) => (
            <button
              key={frequency.id}
              onClick={() => {
                const newFrequencies = weeklyFrequencies.map(f => ({
                  ...f,
                  selected: f.id === frequency.id
                }));
                setWeeklyFrequencies(newFrequencies);
                setTimeout(() => setCurrentStep(currentStep + 1), 500);
              }}
              className={`w-full h-16 rounded-xl flex items-center gap-6 px-6 transition-all duration-300 hover:bg-[#f8fcfe]
                ${frequency.selected 
                  ? 'bg-[#f5fafc] border-2 border-[#027bbd] shadow-md' 
                  : 'bg-[#f5fafc]'}`}
            >
              <span className="text-3xl">{frequency.emoji}</span>
              <span className="text-[#263853] text-lg">{frequency.text}</span>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="w-full h-14 rounded-full relative flex items-center justify-center 
                   bg-[#027bbd] transition-all duration-300
                   hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
        >
          <span className="text-white text-lg font-medium">Continue</span>
          <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                       flex items-center justify-center transition-transform 
                       group-hover:scale-105 group-hover:bg-[#4ba5d4]">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
    );
  };

  // Add renderStep12 function
  const renderStep12 = () => {
    return (
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            How long would you like your sessions to be?
          </h1>
        </div>

        <div className="space-y-4">
          {sessionDurations.map((duration) => (
            <button
              key={duration.id}
              onClick={() => {
                const newDurations = sessionDurations.map(d => ({
                  ...d,
                  selected: d.id === duration.id
                }));
                setSessionDurations(newDurations);
                setTimeout(() => setCurrentStep(currentStep + 1), 500);
              }}
              className={`w-full h-14 rounded-xl flex items-center gap-4 px-5 transition-all duration-300
                ${duration.selected 
                  ? 'bg-[#f5fafc] border-2 border-[#027bbd]/20' 
                  : 'bg-[#f5fafc]'}`}
            >
              <span className="text-3xl">{duration.emoji}</span>
              <span className="text-[#263853] text-lg">{duration.text}</span>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="w-full h-14 rounded-full relative flex items-center justify-center 
                 bg-[#027bbd] transition-all duration-300
                 hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
        >
          <span className="text-white text-lg font-medium">Continue</span>
          <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                       flex items-center justify-center transition-transform 
                       group-hover:scale-105 group-hover:bg-[#4ba5d4]">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
    );
  };

  // Add renderStep13 function
  const renderStep13 = () => {
    return (
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            Can you touch your toes with straight knees?
          </h1>
        </div>

        <div className="space-y-4">
          {capabilities.map((capability) => (
            <button
              key={capability.id}
              onClick={() => {
                const newCapabilities = capabilities.map(c => ({
                  ...c,
                  selected: c.id === capability.id
                }));
                setCapabilities(newCapabilities);
                setTimeout(() => setCurrentStep(currentStep + 1), 500);
              }}
              className={`w-full h-14 rounded-xl flex items-center gap-4 px-5 transition-all duration-300
                ${capability.selected 
                  ? 'bg-[#f5fafc] border-2 border-[#027bbd]/20' 
                  : 'bg-[#f5fafc]'}`}
            >
              <span className="text-3xl">{capability.emoji}</span>
              <span className="text-[#263853] text-lg">{capability.text}</span>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="w-full h-14 rounded-full relative flex items-center justify-center 
                 bg-[#027bbd] transition-all duration-300
                 hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
        >
          <span className="text-white text-lg font-medium">Continue</span>
          <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                       flex items-center justify-center transition-transform 
                       group-hover:scale-105 group-hover:bg-[#4ba5d4]">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
    );
  };

  // Add renderStep14 function
  const renderStep14 = () => {
    return (
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            Can you get up from the couch without using your arms?
          </h1>
        </div>

        <div className="space-y-4">
          {couchCapabilities.map((capability) => (
            <button
              key={capability.id}
              onClick={() => {
                const newCapabilities = couchCapabilities.map(c => ({
                  ...c,
                  selected: c.id === capability.id
                }));
                setCouchCapabilities(newCapabilities);
                setTimeout(() => setCurrentStep(currentStep + 1), 500);
              }}
              className={`w-full h-14 rounded-xl flex items-center gap-4 px-5 transition-all duration-300
                ${capability.selected 
                  ? 'bg-[#f5fafc] border-2 border-[#027bbd]/20' 
                  : 'bg-[#f5fafc]'}`}
            >
              <span className="text-3xl">{capability.emoji}</span>
              <span className="text-[#263853] text-lg">{capability.text}</span>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="w-full h-14 rounded-full relative flex items-center justify-center 
                 bg-[#027bbd] transition-all duration-300
                 hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
        >
          <span className="text-white text-lg font-medium">Continue</span>
          <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                       flex items-center justify-center transition-transform 
                       group-hover:scale-105 group-hover:bg-[#4ba5d4]">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
    );
  };

  // Add renderStep15 function - Sleep Duration
  const renderStep15 = () => {
    return (
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            How many hours do you sleep per night?
          </h1>
        </div>

        <div className="space-y-4">
          {sleepDurations.map((duration) => (
            <button
              key={duration.id}
              onClick={() => {
                const newDurations = sleepDurations.map(d => ({
                  ...d,
                  selected: d.id === duration.id
                }));
                setSleepDurations(newDurations);
                setTimeout(() => setCurrentStep(currentStep + 1), 500);
              }}
              className={`w-full h-20 md:h-24 rounded-xl flex items-center gap-6 px-6 transition-all duration-300
                ${duration.selected 
                  ? 'bg-[#f5fafc] border-2 border-[#027bbd]/20' 
                  : 'bg-[#f5fafc]'}`}
            >
              <span className="text-4xl md:text-5xl">{duration.emoji}</span>
              <span className="text-[#263853] text-lg md:text-xl">{duration.text}</span>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="w-full h-14 rounded-full relative flex items-center justify-center 
                 bg-[#027bbd] transition-all duration-300
                 hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
        >
          <span className="text-white text-lg font-medium">Continue</span>
          <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                     flex items-center justify-center transition-transform 
                     group-hover:scale-105 group-hover:bg-[#4ba5d4]">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
    );
  };

  // Add renderStep16 function - Water Intake
  const renderStep16 = () => {
    return (
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            How much water do you drink daily?
          </h1>
        </div>

        <div className="space-y-4">
          {waterIntakes.map((intake) => (
            <button
              key={intake.id}
              onClick={() => {
                const newIntakes = waterIntakes.map(i => ({
                  ...i,
                  selected: i.id === intake.id
                }));
                setWaterIntakes(newIntakes);
                setTimeout(() => setCurrentStep(currentStep + 1), 500);
              }}
              className={`w-full h-14 rounded-xl flex items-center gap-4 px-5 transition-all duration-300
                ${intake.selected 
                  ? 'bg-[#f5fafc] border-2 border-[#027bbd]/20' 
                  : 'bg-[#f5fafc]'}`}
            >
              <span className="text-3xl">{intake.emoji}</span>
              <span className="text-[#263853] text-lg">{intake.text}</span>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="w-full h-14 rounded-full relative flex items-center justify-center 
                 bg-[#027bbd] transition-all duration-300
                 hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
        >
          <span className="text-white text-lg font-medium">Continue</span>
          <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                       flex items-center justify-center transition-transform 
                       group-hover:scale-105 group-hover:bg-[#4ba5d4]">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
    );
  };

  // Add renderStep17 function - Walking Time
  const renderStep17 = () => {
    return (
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            How much do you walk daily?
          </h1>
        </div>

        <div className="space-y-4">
          {walkingTimes.map((time) => (
            <button
              key={time.id}
              onClick={() => {
                const newTimes = walkingTimes.map(t => ({
                  ...t,
                  selected: t.id === time.id
                }));
                setWalkingTimes(newTimes);
                setTimeout(() => setCurrentStep(currentStep + 1), 500);
              }}
              className={`w-full h-14 rounded-xl flex items-center gap-4 px-5 transition-all duration-300
                ${time.selected 
                  ? 'bg-[#f5fafc] border-2 border-[#027bbd]/20' 
                  : 'bg-[#f5fafc]'}`}
            >
              <span className="text-3xl">{time.emoji}</span>
              <span className="text-[#263853] text-lg">{time.text}</span>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="w-full h-14 rounded-full relative flex items-center justify-center 
                 bg-[#027bbd] transition-all duration-300
                 hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
        >
          <span className="text-white text-lg font-medium">Continue</span>
          <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                       flex items-center justify-center transition-transform 
                       group-hover:scale-105 group-hover:bg-[#4ba5d4]">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
    );
  };

  // Add renderStep18 function - Menopause Status
  const renderStep18 = () => {
    return (
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            What's your menopause status?
          </h1>
        </div>

        <div className="space-y-4">
          {menopauseStatuses.map((status) => (
            <button
              key={status.id}
              onClick={() => {
                const newStatuses = menopauseStatuses.map(s => ({
                  ...s,
                  selected: s.id === status.id
                }));
                setMenopauseStatuses(newStatuses);
                setTimeout(() => setCurrentStep(currentStep + 1), 500);
              }}
              className={`w-full h-14 rounded-xl flex items-center gap-4 px-5 transition-all duration-300
                ${status.selected 
                  ? 'bg-[#f5fafc] border-2 border-[#027bbd]/20' 
                  : 'bg-[#f5fafc]'}`}
            >
              <span className="text-3xl">{status.emoji}</span>
              <span className="text-[#263853] text-lg">{status.text}</span>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="w-full h-14 rounded-full relative flex items-center justify-center 
                 bg-[#027bbd] transition-all duration-300
                 hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
        >
          <span className="text-white text-lg font-medium">Continue</span>
          <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                       flex items-center justify-center transition-transform 
                       group-hover:scale-105 group-hover:bg-[#4ba5d4]">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
    );
  };

  // Add renderStep19 function - Diet Type
  const renderStep19 = () => {
    return (
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            What's your diet type?
          </h1>
        </div>

        <div className="space-y-4">
          {dietTypes.map((diet) => (
            <button
              key={diet.id}
              onClick={() => {
                const newDiets = dietTypes.map(d => ({
                  ...d,
                  selected: d.id === diet.id
                }));
                setDietTypes(newDiets);
                setTimeout(() => setCurrentStep(currentStep + 1), 500);
              }}
              className={`w-full h-14 rounded-xl flex items-center gap-4 px-5 transition-all duration-300
                ${diet.selected 
                  ? 'bg-[#f5fafc] border-2 border-[#027bbd]/20' 
                  : 'bg-[#f5fafc]'}`}
            >
              <span className="text-3xl">{diet.emoji}</span>
              <span className="text-[#263853] text-lg">{diet.text}</span>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="w-full h-14 rounded-full relative flex items-center justify-center 
                 bg-[#027bbd] transition-all duration-300
                 hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20"
        >
          <span className="text-white text-lg font-medium">Continue</span>
          <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                       flex items-center justify-center transition-transform 
                       group-hover:scale-105 group-hover:bg-[#4ba5d4]">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
    );
  };

  // Add renderStep20 function - Food Allergies
  const renderStep20 = () => {
    const hasSelectedAllergies = foodAllergies.some(allergy => allergy.selected);
    const isNoneSelected = foodAllergies.find(a => a.isNone)?.selected;

    return (
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-[#263853] text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight">
            Do you have any food allergies?
          </h1>
        </div>

        <div className="space-y-4">
          {foodAllergies.map((allergy) => (
            <button
              key={allergy.id}
              onClick={() => {
                const newAllergies = foodAllergies.map(a => ({
                  ...a,
                  selected: allergy.isNone 
                    ? a.id === allergy.id 
                    : a.isNone 
                      ? false 
                      : a.id === allergy.id 
                        ? !a.selected 
                        : a.selected
                }));
                setFoodAllergies(newAllergies);
              }}
              disabled={isNoneSelected && !allergy.isNone}
              className={`w-full h-14 rounded-xl flex items-center gap-4 px-5 transition-all duration-300
                ${allergy.selected 
                  ? 'bg-[#f5fafc] border-2 border-[#027bbd]/20' 
                  : 'bg-[#f5fafc]'}
                ${isNoneSelected && !allergy.isNone 
                  ? 'opacity-50 cursor-not-allowed' 
                  : ''}`}
            >
              <span className="text-3xl">{allergy.emoji}</span>
              <span className="text-[#263853] text-lg">{allergy.text}</span>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => hasSelectedAllergies && setCurrentStep(currentStep + 1)}
          className={`w-full h-14 rounded-full relative flex items-center justify-center 
            transition-all duration-300
            ${hasSelectedAllergies 
              ? 'bg-[#027bbd] hover:bg-[#0269a3] hover:shadow-md hover:shadow-[#027bbd]/20' 
              : 'bg-[#027bbd]/50 cursor-not-allowed'}`}
        >
          <span className="text-white text-lg font-medium">Continue</span>
          {hasSelectedAllergies && (
            <div className="absolute right-4 w-10 h-10 bg-[#3b99cb] rounded-full 
                         flex items-center justify-center transition-transform 
                         group-hover:scale-105 group-hover:bg-[#4ba5d4]">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          )}
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto pt-8 pb-12">
          {/* Header Section */}
          <div className="relative flex justify-center items-center mb-8">
            {/* Back Arrow */}
            {currentStep > 0 && (
              <button 
                onClick={() => setCurrentStep(currentStep - 1)}
                className="absolute left-0 text-[#505050] hover:text-[#404040] transition-colors
                         p-2 -ml-2 md:ml-0"
              >
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            )}
            
            {/* Logo */}
            <div className="bg-[#027bbd] p-2.5 rounded-lg">
              <Image
                src="/logo.png"
                alt="Logo"
                width={140}
                height={42}
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="h-1.5 w-full bg-[#f6f6f6] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#027bbd] transition-all duration-500 ease-in-out"
                style={{ width: `${((currentStep + 1) / 35) * 100}%` }}
              />
            </div>
          </div>

          {/* Content Section */}
          {currentStep === 0 ? renderStep1() : 
           currentStep === 1 ? renderStep2() : 
           currentStep === 2 ? renderStep3() :
           currentStep === 3 ? renderStep4() :
           currentStep === 4 ? renderStep5() :
           currentStep === 5 ? renderStep6() :
           currentStep === 6 ? renderStep7() :
           currentStep === 7 ? renderStep8() :
           currentStep === 8 ? renderStep9() :
           currentStep === 9 ? renderStep10() :
           currentStep === 10 ? renderStep11() :
           currentStep === 11 ? renderStep12() :
           currentStep === 12 ? renderStep13() :
           currentStep === 13 ? renderStep14() :
           currentStep === 14 ? renderStep15() :
           currentStep === 15 ? renderStep16() :
           currentStep === 16 ? renderStep17() :
           currentStep === 17 ? renderStep18() :
           currentStep === 18 ? renderStep19() :
           currentStep === 19 ? renderStep20() :
           currentStep === 20 ? renderStep21() :
           currentStep === 21 ? renderStep22() :
           currentStep === 22 ? renderStep23() :
           currentStep === 23 ? renderStep24() :
           currentStep === 24 ? renderStep25() :
           currentStep === 25 ? renderStep26() : // Estava faltando o step 25
           currentStep === 26 ? renderStep27() : // Estava faltando o step 27
           currentStep === 27 ? renderStep28() :
           currentStep === 28 ? renderStep29() :
           currentStep === 29 ? renderStep30() :
           currentStep === 30 ? renderStep31() :
           currentStep === 31 ? renderStep32() :
           currentStep === 32 ? renderStep33() :
           currentStep === 33 ? renderStep34() :
           currentStep === 34 ? renderStep35() :
           currentStep === 35 ? renderStep36() :
           renderStep37()}

          {/* Made by KRX */}
          <div className="pt-8 text-center">
            <p className="text-[#505050] text-sm tracking-wide opacity-60 hover:opacity-100 transition-opacity">
              made by{' '}
              <span className="font-medium tracking-[-0.03em]">krx</span>
            </p>
          </div>

          {/* Payment Modal */}
          {showPaymentModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-[#263853] text-3xl font-medium">
                    Complete Your Purchase
                  </h2>
                  <button 
                    onClick={() => setShowPaymentModal(false)}
                    className="text-[#505050] hover:text-[#263853] transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-[#263853] text-lg mb-2">
                      Selected Plan: {pricingPlans.find(p => p.id === selectedPlan)?.duration}
                    </p>
                    <p className="text-[#027bbd] text-3xl font-bold">
                      £{pricingPlans.find(p => p.id === selectedPlan)?.discountedPrice}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => selectedPlan && handlePayment(selectedPlan)}
                    className="w-full h-14 bg-[#027bbd] rounded-full text-white font-medium
                             hover:bg-[#0269a3] transition-all duration-300"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const getZoneClipPath = (zoneId: string) => {
  switch (zoneId) {
    case 'arms':
      return `polygon(
        /* Left Arm */
        20% 20%, 35% 20%, 35% 40%, 20% 40%,
        /* Right Arm */
        65% 20%, 80% 20%, 80% 40%, 65% 40%
      )`;
    case 'stomach':
      return `polygon(
        35% 40%, 65% 40%, 65% 60%, 35% 60%
      )`;
    case 'back':
      return `polygon(
        35% 15%, 65% 15%, 65% 40%, 35% 40%
      )`;
    case 'glutes':
      return `polygon(
        35% 60%, 65% 60%, 65% 70%, 35% 70%
      )`;
    case 'legs':
      return `polygon(
        /* Left Leg */
        35% 70%, 45% 70%, 45% 100%, 35% 100%,
        /* Right Leg */
        55% 70%, 65% 70%, 65% 100%, 55% 100%
      )`;
    case 'hips':
      return `polygon(
        30% 55%, 70% 55%, 70% 65%, 30% 65%
      )`;
    default:
      return '';
  }
};
