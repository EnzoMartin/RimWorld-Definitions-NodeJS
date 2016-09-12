module.exports={"ThingDefs":{"ThingDef":{"$":{"ParentName":"BasePawn"},"defName":"Human","label":"human","description":"A baseline human, mostly unmodified by gene engineering and mostly unchanged by evolutionary pressures on non-Earth planets.","uiIconPath":"Things/Pawn/Humanlike/UI/IconHuman","statBases":{"MarketValue":1750,"MoveSpeed":4.61,"Flammability":1,"ComfyTemperatureMin":12,"ComfyTemperatureMax":32,"LeatherAmount":20},"verbs":{"li":[{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":110,"meleeDamageBaseAmount":6,"meleeDamageDef":"Blunt","linkedBodyPartsGroup":"LeftHand"},{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":110,"meleeDamageBaseAmount":6,"meleeDamageDef":"Blunt","linkedBodyPartsGroup":"RightHand"}]},"race":{"thinkTreeMain":"Humanlike","thinkTreeConstant":"HumanlikeConstant","intelligence":"Humanlike","makesFootprints":true,"lifeExpectancy":80,"leatherColor":"(211,194,143)","leatherCommonalityFactor":0.01,"leatherInsulation":0.7,"leatherMarketValueFactor":3,"nameCategory":"HumanStandard","body":"Human","baseBodySize":1,"baseHealthScale":1,"foodType":"OmnivoreHuman","gestationPeriodDays":45,"litterSizeCurve":{"points":{"li":["(0.5, 0)","(1, 1)","(1.01, 0.02)","(3.5, 0)"]}},"lifeStageAges":{"li":[{"def":"HumanlikeBaby","minAge":0},{"def":"HumanlikeToddler","minAge":1.2},{"def":"HumanlikeChild","minAge":4},{"def":"HumanlikeTeenager","minAge":13},{"def":"HumanlikeAdult","minAge":18}]},"soundMeleeHitPawn":"Pawn_Melee_Punch_HitPawn","soundMeleeHitBuilding":"Pawn_Melee_Punch_HitBuilding","soundMeleeMiss":"Pawn_Melee_Punch_Miss","specialshadowData":{"volume":"(0.3, 0.8, 0.4)","offset":"(0,0,-0.3)"},"ageGenerationCurve":{"points":{"li":["(14,0)","(16,100)","(50,100)","(60,30)","(70,18)","(80,10)","(90,3)","(100,0)"]}},"hediffGiverSets":{"li":"OrganicStandard"}},"recipes":{"li":["InstallPowerClaw","InstallScytherBlade","InstallBionicEye","InstallBionicArm","InstallBionicLeg","InstallSimpleProstheticArm","InstallSimpleProstheticLeg","InstallPegLeg","InstallDenture","InstallJoywire","InstallPainstopper","InstallNaturalHeart","InstallNaturalLung","InstallNaturalKidney","InstallNaturalLiver","ExciseCarcinoma","RemoveBodyPart","Euthanize"]}}}}