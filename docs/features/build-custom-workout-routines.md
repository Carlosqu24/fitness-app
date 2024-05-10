# Build custom workout routines

## Implementation

### UI
Based on Figma mockups, a stepperForm will be made (form with steps)
- Main information (name and description)
- Exercise selection
- Sets Assignment (approximate)
- Frequency days selection
- Validate information ** NOT CONFIRMED YET

MAIN_INFORMATION = 0,
EXERCISES_SELECTION = 1,
SET_ASSIGNMENT = 2,
DAYS_FREQUENCY_SELECTION = 3,

### Data
I am going to obtain the exercises from a Supabase table in which I am going to group them by main muscle worked

### Functionality
I will look for custom hooks of stepperForm, if not I will develop the logic

Before go next to the other step, the system will validate if:
- At least one exercise was been selected by the user
- At least one day was been selected by the user