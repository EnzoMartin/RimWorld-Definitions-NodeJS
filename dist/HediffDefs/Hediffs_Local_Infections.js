module.exports={"Defs":{"HediffDef":[{"$":{"Name":"InfectionBase","Abstract":"True"},"hediffClass":"HediffWithComps","defaultLabelColor":"(0.8, 0.8, 0.35)","comps":{"li":{"compClass":"HediffComp_Discoverable","sendLetterWhenDiscovered":true}}},{"$":{"ParentName":"InfectionBase"},"defName":"GutWorms","hediffClass":"HediffWithComps","label":"gut worms","makesSickThought":true,"stages":{"li":{"painOffset":0.2,"hungerRateFactor":2,"vomitMtbDays":1}},"comps":{"li":{"compClass":"HediffComp_Tendable","tendDuration":120000,"disappearsAtTendedCount":5}}},{"$":{"ParentName":"InfectionBase"},"defName":"MuscleParasites","hediffClass":"HediffWithComps","label":"muscle parasites","makesSickThought":true,"stages":{"li":{"painOffset":0.2,"restFallFactor":2,"capMods":{"li":[{"capacity":"Manipulation","offset":-0.3},{"capacity":"Moving","offset":-0.3}]}}},"comps":{"li":{"compClass":"HediffComp_Tendable","tendDuration":120000,"disappearsAtTendedCount":5}}},{"$":{"Abstract":"True","ParentName":"InfectionBase","Name":"MechanitesBase"},"hediffClass":"HediffWithComps","makesSickThought":true,"makesAlert":false,"minSeverity":0.001,"maxSeverity":1,"initialSeverity":0.001,"comps":{"li":[{"compClass":"HediffComp_Disappears","disappearsAfterTicks":{"min":900000,"max":1800000}},{"compClass":"HediffComp_Tendable","tendDuration":120000,"severityPerDayTendedOffset":-1},{"compClass":"HediffComp_Immunizable","severityPerDayNotImmune":0.25}]}},{"$":{"ParentName":"MechanitesBase"},"defName":"FibrousMechanites","label":"fibrous mechanites","stages":{"li":[{"painOffset":0.2,"label":"mild pain","restFallFactor":1.7,"capMods":{"li":[{"capacity":"Manipulation","offset":0.5},{"capacity":"Moving","offset":0.5},{"capacity":"BloodPumping","offset":0.5}]}},{"minSeverity":0.5,"label":"intense pain","painOffset":0.6,"restFallFactor":2,"capMods":{"li":[{"capacity":"Manipulation","offset":0.5},{"capacity":"Moving","offset":0.5},{"capacity":"BloodPumping","offset":0.5}]}}]}},{"$":{"ParentName":"MechanitesBase"},"defName":"SensoryMechanites","label":"sensory mechanites","stages":{"li":[{"painOffset":0.2,"label":"mild pain","restFallFactor":1.7,"capMods":{"li":[{"capacity":"Sight","offset":0.5},{"capacity":"Hearing","offset":0.5},{"capacity":"Talking","offset":0.5},{"capacity":"Manipulation","offset":0.3}]}},{"minSeverity":0.5,"label":"intense pain","painOffset":0.6,"restFallFactor":2,"capMods":{"li":[{"capacity":"Sight","offset":0.5},{"capacity":"Hearing","offset":0.5},{"capacity":"Talking","offset":0.5},{"capacity":"Manipulation","offset":0.3}]}}]}},{"$":{"ParentName":"InfectionBase"},"defName":"WoundInfection","label":"infection","makesSickThought":true,"comps":{"li":[{"compClass":"HediffComp_Tendable","tendDuration":30000,"severityPerDayTendedOffset":-0.16},{"compClass":"HediffComp_Immunizable","immunityPerDayNotSick":-0.4,"immunityPerDaySick":0.62,"severityPerDayNotImmune":0.26,"severityPerDayImmune":-0.2}]},"stages":{"li":[{"label":"minor","painOffset":0.05},{"minSeverity":0.1,"label":"major","painOffset":0.08},{"minSeverity":0.235,"label":"extreme","lifeThreatening":true,"painOffset":0.12,"capMods":{"li":{"capacity":"Consciousness","offset":-0.05}}},{"minSeverity":0.26,"label":"extreme","lifeThreatening":true,"painOffset":0.85,"capMods":{"li":[{"capacity":"Consciousness","setMax":0.1},{"capacity":"Breathing","offset":-0.05}]}},{"minSeverity":0.3,"label":"extreme","capMods":{"li":{"capacity":"Consciousness","setMax":0}}}]}},{"$":{"ParentName":"InfectionBase"},"defName":"Flu","label":"flu","makesSickThought":true,"comps":{"li":[{"compClass":"HediffComp_Tendable","tendDuration":30000,"severityPerDayTendedOffset":-0.054},{"compClass":"HediffComp_Immunizable","immunityPerDayNotSick":-0.06,"immunityPerDaySick":0.173,"severityPerDayNotImmune":0.1,"severityPerDayImmune":-0.2}]},"stages":{"li":[{"label":"minor-hidden","everVisible":false},{"minSeverity":0.2,"label":"minor","capMods":{"li":[{"capacity":"Consciousness","offset":-0.05},{"capacity":"Manipulation","offset":-0.05},{"capacity":"Breathing","offset":-0.1}]}},{"minSeverity":0.4,"label":"major","vomitMtbDays":1.5,"capMods":{"li":[{"capacity":"Consciousness","offset":-0.1},{"capacity":"Manipulation","offset":-0.1},{"capacity":"Breathing","offset":-0.15}]}},{"minSeverity":0.5,"label":"extreme","lifeThreatening":true,"vomitMtbDays":0.75,"painOffset":0.05,"capMods":{"li":[{"capacity":"Consciousness","offset":-0.15},{"capacity":"Manipulation","offset":-0.2},{"capacity":"Breathing","offset":-0.2}]}},{"minSeverity":0.6,"label":"extreme","capMods":{"li":{"capacity":"Consciousness","setMax":0}}}]}},{"$":{"ParentName":"InfectionBase"},"defName":"Plague","label":"plague","makesSickThought":true,"comps":{"li":[{"compClass":"HediffComp_Tendable","tendDuration":30000,"severityPerDayTendedOffset":-0.15},{"compClass":"HediffComp_Immunizable","immunityPerDayNotSick":-0.02,"immunityPerDaySick":0.3,"severityPerDayNotImmune":0.2,"severityPerDayImmune":-0.1}]},"stages":{"li":[{"label":"minor","everVisible":false},{"minSeverity":0.2,"label":"minor","painOffset":0.2,"capMods":{"li":[{"capacity":"Consciousness","offset":-0.05},{"capacity":"Manipulation","offset":-0.05}]}},{"minSeverity":0.3,"label":"major","painOffset":0.35,"capMods":{"li":[{"capacity":"Consciousness","offset":-0.2},{"capacity":"Manipulation","offset":-0.2}]}},{"minSeverity":0.4,"label":"extreme","painOffset":0.6,"capMods":{"li":[{"capacity":"Consciousness","offset":-0.3},{"capacity":"Manipulation","offset":-0.3}]}},{"minSeverity":0.45,"label":"extreme","lifeThreatening":true,"painOffset":0.85,"capMods":{"li":[{"capacity":"Consciousness","offset":-0.3},{"capacity":"Manipulation","offset":-0.3},{"capacity":"Breathing","offset":-0.15}]}},{"minSeverity":0.5,"label":"extreme","capMods":{"li":{"capacity":"Consciousness","setMax":0}}}]}},{"$":{"ParentName":"InfectionBase"},"defName":"Malaria","label":"malaria","makesSickThought":true,"scenarioCanAdd":true,"comps":{"li":[{"compClass":"HediffComp_Tendable","tendDuration":30000,"severityPerDayTendedOffset":-0.126},{"compClass":"HediffComp_Immunizable","immunityPerDayNotSick":-0.03,"immunityPerDaySick":0.12,"severityPerDayNotImmune":0.15,"severityPerDayImmune":-0.3}]},"stages":{"li":[{"label":"minor","everVisible":false},{"minSeverity":0.7,"label":"minor","capMods":{"li":[{"capacity":"BloodFiltration","offset":-0.1},{"capacity":"Consciousness","offset":-0.05}]}},{"minSeverity":0.85,"label":"major","vomitMtbDays":1.5,"painOffset":0.3,"capMods":{"li":[{"capacity":"BloodFiltration","offset":-0.2},{"capacity":"Consciousness","offset":-0.12},{"capacity":"Manipulation","offset":-0.08}]}},{"minSeverity":1,"label":"extreme","lifeThreatening":true,"vomitMtbDays":0.75,"painOffset":0.3,"capMods":{"li":[{"capacity":"BloodFiltration","offset":-0.22},{"capacity":"Consciousness","setMax":0.1},{"capacity":"Manipulation","offset":-0.1}]}},{"minSeverity":1.1,"label":"extreme","capMods":{"li":{"capacity":"Consciousness","setMax":0}}}]}},{"$":{"ParentName":"InfectionBase"},"defName":"SleepingSickness","label":"sleeping sickness","makesSickThought":true,"comps":{"li":[{"compClass":"HediffComp_Tendable","tendDuration":80000,"severityPerDayTendedOffset":-0.012},{"compClass":"HediffComp_Immunizable","immunityPerDayNotSick":-0.02,"immunityPerDaySick":0.036,"severityPerDayNotImmune":0.02,"severityPerDayImmune":-0.06}]},"stages":{"li":[{"label":"minor-hidden","everVisible":false},{"minSeverity":0.14,"label":"minor","painOffset":0.02,"capMods":{"li":[{"capacity":"Consciousness","offset":-0.02},{"capacity":"Manipulation","offset":-0.02}]}},{"minSeverity":0.21,"label":"minor","painOffset":0.03,"capMods":{"li":[{"capacity":"Consciousness","offset":-0.04},{"capacity":"Manipulation","offset":-0.04}]}},{"minSeverity":0.3,"label":"major","vomitMtbDays":3.5,"painOffset":0.05,"capMods":{"li":[{"capacity":"Consciousness","offset":-0.15},{"capacity":"Manipulation","offset":-0.06}]}},{"minSeverity":0.42,"label":"extreme","lifeThreatening":true,"vomitMtbDays":1.75,"painOffset":0.1,"capMods":{"li":[{"capacity":"Consciousness","offset":-0.2},{"capacity":"Manipulation","offset":-0.2}]}},{"minSeverity":0.45,"label":"extreme","lifeThreatening":true,"vomitMtbDays":1,"painOffset":0.15,"capMods":{"li":[{"capacity":"Consciousness","setMax":0.1},{"capacity":"Manipulation","offset":-0.2}]}},{"minSeverity":0.48,"label":"extreme","capMods":{"li":{"capacity":"Consciousness","setMax":0}}}]}}]}}