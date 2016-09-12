module.exports={"GoJuice":{"ThingDef":{"$":{"ParentName":"MakeableDrugBase"},"defName":"GoJuice","label":"go-juice","description":"A synthetic combat drug developed for space marines during the early days of interplanetary warfare. Go-juice blocks pain and increases the user's melee and shooting abilities. It also enhances movement speed.\\n\\nMilitary chemists who created it were never able to remove its addictiveness. Some saw this as a downside; others saw it as a benefit.","graphicData":{"texPath":"Things/Item/Drug/GoJuice","graphicClass":"Graphic_StackCount"},"rotatable":false,"statBases":{"WorkToMake":600,"MarketValue":90},"techLevel":"Industrial","ingestible":{"joy":0.4,"drugCategory":"Hard","foodType":"Processed, Fluid","baseIngestTicks":90,"ingestSound":"Ingest_Inject","ingestHoldOffsetStanding":"(0.18,0,0)","ingestCommandString":"Inject {0}","ingestReportString":"Injecting {0}.","chairSearchRadius":0,"outcomeDoers":{"li":[{"$":{"Class":"IngestionOutcomeDoer_GiveHediff"},"hediffDef":"GoJuiceHigh","severity":0.75,"toleranceChemical":"GoJuice"},{"$":{"Class":"IngestionOutcomeDoer_OffsetNeed"},"need":"Rest","offset":0.4,"toleranceChemical":"GoJuice"},{"$":{"Class":"IngestionOutcomeDoer_GiveHediff"},"hediffDef":"GoJuiceTolerance","severity":0.044}]}},"recipeMaker":{"researchPrerequisite":"GoJuiceProduction","recipeUsers":{"li":"DrugLab"}},"costList":{"Neutroamine":5,"Yayo":1},"comps":{"li":{"$":{"Class":"CompProperties_Drug"},"chemical":"GoJuice","addictiveness":0.065,"minToleranceToAddict":0.05,"existingAddictionSeverityOffset":0.2,"needLevelOffset":1,"isCombatEnhancingDrug":true,"listOrder":200,"overdoseSeverityOffset":{"min":0.18,"max":0.35}}}},"HediffDef":[{"defName":"GoJuiceHigh","hediffClass":"HediffWithComps","label":"high on go-juice","defaultLabelColor":"(1,0,0.5)","scenarioCanAdd":true,"maxSeverity":1,"comps":{"li":{"compClass":"HediffComp_SeverityPerDay","severityPerDay":-0.4}},"stages":{"li":{"painFactor":0.1,"capMods":{"li":[{"capacity":"Consciousness","offset":0.35},{"capacity":"Moving","offset":0.3}]}}}},{"$":{"ParentName":"DrugToleranceBase"},"defName":"GoJuiceTolerance","label":"go-juice tolerance","comps":{"li":[{"compClass":"HediffComp_SeverityPerDay","severityPerDay":-0.015},{"compClass":"HediffComp_DrugEffectFactor","chemical":"GoJuice"}]}},{"$":{"ParentName":"AddictionBase"},"defName":"GoJuiceAddiction","hediffClass":"Hediff_Addiction","label":"go-juice addiction","causesNeed":"Chemical_GoJuice","comps":{"li":{"compClass":"HediffComp_SeverityPerDay","severityPerDay":-0.04}},"stages":{"li":["\n      ",{"label":"withdrawal","painFactor":3,"restFallFactor":1.3,"hungerRateFactor":1.5,"capMods":{"li":[{"capacity":"Consciousness","offset":-0.15},{"capacity":"Moving","offset":-0.4},{"capacity":"Sight","offset":-0.2},{"capacity":"BloodPumping","offset":-0.2},{"capacity":"Manipulation","offset":-0.1}]},"mentalStateGivers":{"li":{"mentalState":"WanderPsychotic","mtbDays":7}}}]}}],"ThoughtDef":[{"defName":"GoJuiceHigh","workerClass":"ThoughtWorker_Hediff","hediff":"GoJuiceHigh","stages":{"li":{"label":"high on go-juice","description":"Feeling pumped but calm. I am the sniper bullet in flight, ready to cut through you.","baseMoodEffect":5}}},{"defName":"GoJuiceWithdrawal","workerClass":"ThoughtWorker_Hediff","hediff":"GoJuiceAddiction","stages":{"li":[{"visible":false},{"label":"go-juice withdrawal","description":"I'm all fuzzy and can't think straight. My limbs feel heavy, I'm tired and hungry, everything hurts. And why won't my eyes focus properly?","baseMoodEffect":-20}]}}],"ChemicalDef":{"defName":"GoJuice","label":"go-juice","addictionHediff":"GoJuiceAddiction","toleranceHediff":"GoJuiceTolerance"},"NeedDef":{"$":{"ParentName":"DrugAddictionNeedBase"},"defName":"Chemical_GoJuice","needClass":"Need_Chemical","label":"go-juice","description":"Because of a go-juice addiction, this person needs to regularly consume the drug to avoid withdrawal symptoms.","listPriority":45}}}