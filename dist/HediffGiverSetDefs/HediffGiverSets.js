module.exports={"Defs":{"HediffGiverSetDef":{"defName":"OrganicStandard","hediffGivers":{"li":[{"$":{"Class":"HediffGiver_Bleeding"},"hediff":"BloodLoss"},{"$":{"Class":"HediffGiver_Hypothermia"},"hediff":"Hypothermia"},{"$":{"Class":"HediffGiver_Heatstroke"},"hediff":"Heatstroke"},{"$":{"Class":"HediffGiver_RandomAgeCurved"},"hediff":"HeartAttack","partsToAffect":{"li":"Heart"},"ageFractionMtbDaysCurve":{"points":{"li":["(0, 99999999)","(0.5, 99999999)","(0.6, 2500)","(1, 300)"]}}},{"$":{"Class":"HediffGiver_BrainInjury"},"hediff":"TraumaSavant","partsToAffect":{"li":"Brain"},"chancePerDamagePct":0.12,"letterLabel":"Trauma savant","letter":"NAME's brain injury has caused HIM to develop strange savant-like abilities."},{"$":{"Class":"HediffGiver_Birthday"},"hediff":"Carcinoma","canAffectAnyLivePart":true,"ageFractionChanceCurve":{"points":{"li":["(0.28, 0)","(1, 0.0011)","(1.5, 0.0015)"]}},"averageSeverityPerDayBeforeGeneration":0.0005},{"$":{"Class":"HediffGiver_Birthday"},"hediff":"BadBack","partsToAffect":{"li":"Torso"},"ageFractionChanceCurve":{"points":{"li":["(0.5, 0)","(0.625, 0.0093)","(0.75, 0.01395)","(0.875, 0.01395)","(1, 0.0186)"]}}},{"$":{"Class":"HediffGiver_Birthday"},"hediff":"Frail","partsToAffect":{"li":"Torso"},"ageFractionChanceCurve":{"points":{"li":["(0.625, 0)","(0.75, 0.01395)","(0.875, 0.02604)"]}}},{"$":{"Class":"HediffGiver_Birthday"},"hediff":"Cataract","partsToAffect":{"li":["LeftEye","RightEye"]},"countToAffect":2,"ageFractionChanceCurve":{"points":{"li":["(0.6, 0)","(0.75, 0.0053)","(0.875, 0.011045)"]}}},{"$":{"Class":"HediffGiver_Birthday"},"hediff":"HearingLoss","partsToAffect":{"li":["LeftEar","RightEar"]},"countToAffect":2,"ageFractionChanceCurve":{"points":{"li":["(0.6, 0)","(0.75, 0.0053)","(0.875, 0.011045)"]}}},{"$":{"Class":"HediffGiver_Birthday"},"hediff":"Dementia","partsToAffect":{"li":"Brain"},"ageFractionChanceCurve":{"points":{"li":["(0.85, 0)","(0.95, 0.0093)","(1.15, 0.093)"]}}},{"$":{"Class":"HediffGiver_Birthday"},"hediff":"Alzheimers","partsToAffect":{"li":"Brain"},"ageFractionChanceCurve":{"points":{"li":["(0.42, 0)","(0.7, 0.00061)","(0.9, 0.0012)","(1, 0.002)","(1.5, 0.003)"]}},"averageSeverityPerDayBeforeGeneration":0.001},{"$":{"Class":"HediffGiver_Birthday"},"hediff":"Asthma","partsToAffect":{"li":["LeftLung","RightLung"]},"countToAffect":2,"ageFractionChanceCurve":{"points":{"li":["(0, 0)","(0.2, 0.00048)","(0.3, 0.00096)","(0.5, 0.001344)"]}}},{"$":{"Class":"HediffGiver_Birthday"},"hediff":"HeartArteryBlockage","partsToAffect":{"li":"Heart"},"ageFractionChanceCurve":{"points":{"li":["(0.25, 0)","(0.3, 0.001)","(0.5, 0.00145)","(1, 0.0016)","(1.5, 0.0017)"]}},"averageSeverityPerDayBeforeGeneration":0.00025}]}}}}