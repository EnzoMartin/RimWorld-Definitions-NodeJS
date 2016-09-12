module.exports={"BodyPartDefs":{"BodyPartDef":[{"defName":"Head","label":"head","hitPoints":30,"oldInjuryBaseChance":0.08,"skinCovered":true,"dontSuggestAmputation":true},{"defName":"Skull","label":"skull","hitPoints":30,"oldInjuryBaseChance":0,"skinCovered":false,"isSolid":true,"dontSuggestAmputation":true},{"defName":"Brain","label":"brain","hitPoints":10,"oldInjuryBaseChance":1,"skinCovered":false,"activities":{"li":["Consciousness_brain","Sight_brain","Hearing_brain","Moving_brain","Manipulation_brain","Talking_brain"]},"dontSuggestAmputation":true},{"defName":"LeftEye","label":"left eye","hitPoints":10,"oldInjuryBaseChance":1,"skinCovered":false,"useDestroyedOutLabel":true,"beautyRelated":true,"activities":{"li":"Sight_source"},"hitChanceFactors":{"li":{"key":"Blunt","value":0}}},{"defName":"RightEye","label":"right eye","hitPoints":10,"oldInjuryBaseChance":1,"skinCovered":false,"useDestroyedOutLabel":true,"beautyRelated":true,"activities":{"li":"Sight_source"},"hitChanceFactors":{"li":{"key":"Blunt","value":0}}},{"defName":"LeftEar","label":"left ear","hitPoints":10,"frostbiteVulnerability":5,"oldInjuryBaseChance":0.08,"skinCovered":true,"beautyRelated":true,"activities":{"li":"Hearing_source"}},{"defName":"RightEar","label":"right ear","hitPoints":10,"frostbiteVulnerability":5,"oldInjuryBaseChance":0.08,"skinCovered":true,"beautyRelated":true,"activities":{"li":"Hearing_source"}},{"defName":"Nose","label":"nose","hitPoints":10,"frostbiteVulnerability":5,"oldInjuryBaseChance":0.08,"skinCovered":true,"beautyRelated":true},{"defName":"Jaw","label":"jaw","hitPoints":20,"frostbiteVulnerability":2,"oldInjuryBaseChance":0,"skinCovered":false,"isSolid":true,"beautyRelated":true,"activities":{"li":["Eating_source","Talking_source"]}},{"defName":"Neck","label":"neck","hitPoints":30,"oldInjuryBaseChance":0.08,"bleedingRateMultiplier":1.3,"skinCovered":true,"activities":{"li":["Breathing_way","Eating_way","Talking_way"]},"dontSuggestAmputation":true},{"defName":"Rib","label":"rib","hitPoints":8,"oldInjuryBaseChance":0,"skinCovered":false,"isSolid":true},{"defName":"Spine","label":"spine","hitPoints":20,"oldInjuryBaseChance":0,"skinCovered":false,"isSolid":true,"activities":{"li":["Moving_spine","Manipulation_spine"]}},{"defName":"LeftLeg","label":"left leg","hitPoints":30,"oldInjuryBaseChance":0.08,"skinCovered":true,"activities":{"li":"Moving_leftWay1"}},{"defName":"LeftFoot","label":"left foot","hitPoints":20,"frostbiteVulnerability":0.5,"oldInjuryBaseChance":0.08,"skinCovered":true,"activities":{"li":"Moving_way2"}},{"defName":"RightLeg","label":"right leg","hitPoints":30,"oldInjuryBaseChance":0.08,"skinCovered":true,"activities":{"li":"Moving_rightWay1"}},{"defName":"RightFoot","label":"right foot","hitPoints":20,"frostbiteVulnerability":0.5,"oldInjuryBaseChance":0.08,"skinCovered":true,"activities":{"li":"Moving_way2"}}]}}