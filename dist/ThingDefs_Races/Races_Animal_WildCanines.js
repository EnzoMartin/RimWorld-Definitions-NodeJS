module.exports={"Defs":{"ThingDef":[{"$":{"ParentName":"AnimalThingBase"},"defName":"Warg","label":"warg","description":"Heavily-muscled wolf-like creatures. Scientists say wargs are the descendants of weaponized military animals created for population suppression. The superstitious see them as the tools of an angry god. They will only eat meat or corpses.","statBases":{"MoveSpeed":5,"ComfyTemperatureMin":-65,"MarketValue":450},"verbs":{"li":[{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":90,"meleeDamageBaseAmount":10,"meleeDamageDef":"Scratch","linkedBodyPartsGroup":"FrontLeftPaw","surpriseAttack":{"extraMeleeDamages":{"li":{"def":"Stun","amount":20}}}},{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":90,"meleeDamageBaseAmount":10,"meleeDamageDef":"Scratch","linkedBodyPartsGroup":"FrontRightPaw","surpriseAttack":{"extraMeleeDamages":{"li":{"def":"Stun","amount":20}}}},{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":120,"meleeDamageBaseAmount":12,"meleeDamageDef":"Bite","linkedBodyPartsGroup":"Teeth","surpriseAttack":{"extraMeleeDamages":{"li":{"def":"Stun","amount":20}}}}]},"race":{"body":"QuadrupedAnimalWithPawsAndTail","predator":true,"petness":0.5,"baseBodySize":1,"baseHungerRate":0.25,"baseHealthScale":1.15,"foodType":"CarnivoreAnimalStrict","leatherColor":"(123,104,89)","leatherLabel":"warg fur","leatherInsulation":1.1,"gestationPeriodDays":22.5,"nameOnTameChance":1,"trainableIntelligence":"Advanced","wildness":0.8,"manhunterOnDamageChance":1,"manhunterOnTameFailChance":0.025,"nuzzleMtbHours":120,"litterSizeCurve":{"points":{"li":["(0.5, 0)","(1, 1)","(2, 1.7)","(3, 0.7)","(3.5, 0)"]}},"lifeExpectancy":15,"lifeStageAges":{"li":[{"def":"AnimalBaby","minAge":0},{"def":"AnimalJuvenile","minAge":0.25},{"def":"AnimalAdult","minAge":0.8,"soundWounded":"Pawn_Warg_Wounded","soundDeath":"Pawn_Warg_Death","soundCall":"Pawn_Warg_Call","soundAngry":"Pawn_Warg_Angry"}]},"soundMeleeHitPawn":"Pawn_Melee_SmallScratch_HitPawn","soundMeleeHitBuilding":"Pawn_Melee_SmallScratch_HitBuilding","soundMeleeMiss":"Pawn_Melee_SmallScratch_Miss"},"tradeTags":{"li":["StandardAnimal","BadassAnimal"]}},{"$":{"Name":"ThingBaseWolf","ParentName":"AnimalThingBase","Abstract":"True"},"statBases":{"MoveSpeed":5.25,"ComfyTemperatureMin":-50,"MarketValue":370},"verbs":{"li":[{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":100,"meleeDamageBaseAmount":9,"meleeDamageDef":"Scratch","linkedBodyPartsGroup":"FrontLeftPaw","surpriseAttack":{"extraMeleeDamages":{"li":{"def":"Stun","amount":20}}}},{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":100,"meleeDamageBaseAmount":9,"meleeDamageDef":"Scratch","linkedBodyPartsGroup":"FrontRightPaw","surpriseAttack":{"extraMeleeDamages":{"li":{"def":"Stun","amount":20}}}},{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":130,"meleeDamageBaseAmount":11,"meleeDamageDef":"Bite","linkedBodyPartsGroup":"Teeth","surpriseAttack":{"extraMeleeDamages":{"li":{"def":"Stun","amount":20}}}}]},"race":{"body":"QuadrupedAnimalWithPawsAndTail","predator":true,"petness":0.1,"baseBodySize":0.85,"baseHungerRate":0.18,"baseHealthScale":0.99,"foodType":"CarnivoreAnimal","leatherInsulation":1,"gestationPeriodDays":22.5,"nameOnTameChance":1,"trainableIntelligence":"Advanced","wildness":0.75,"nuzzleMtbHours":120,"manhunterOnDamageChance":1,"manhunterOnTameFailChance":0.025,"litterSizeCurve":{"points":{"li":["(0.5, 0)","(1, 1)","(2, 1.7)","(3, 0.7)","(3.5, 0)"]}},"lifeExpectancy":12,"lifeStageAges":{"li":[{"def":"AnimalBaby","minAge":0},{"def":"AnimalJuvenile","minAge":0.25},{"def":"AnimalAdult","minAge":0.8,"soundWounded":"Pawn_Dog_Injured","soundDeath":"Pawn_Dog_Death","soundCall":"Pawn_Dog_Call","soundAngry":"Pawn_Dog_Angry"}]},"soundMeleeHitPawn":"Pawn_Melee_SmallScratch_HitPawn","soundMeleeHitBuilding":"Pawn_Melee_SmallScratch_HitBuilding","soundMeleeMiss":"Pawn_Melee_SmallScratch_Miss"},"tradeTags":{"li":["StandardAnimal","BadassAnimal"]}},{"$":{"ParentName":"ThingBaseWolf"},"defName":"WolfTimber","label":"timber wolf","description":"A rugged predator long feared by many ancient Earth cultures. As pack hunters, wolves have a complex social life and are fiercely intelligent.","race":{"leatherColor":"(115,110,100)","meatLabel":"wolfmeat","leatherLabel":"timber wolfskin","leatherInsulation":1}},{"$":{"ParentName":"ThingBaseWolf"},"defName":"WolfArctic","label":"arctic wolf","description":"An arctic variant of the old Earth wolf. As pack hunters, wolves have a complex social life and are fiercely intelligent.","race":{"leatherColor":"(200,200,200)","leatherLabel":"arctic wolfskin","leatherInsulation":1.25,"useMeatFrom":"WolfTimber"}},{"$":{"Name":"ThingBaseFox","ParentName":"AnimalThingBase","Abstract":"True"},"statBases":{"MoveSpeed":5,"ComfyTemperatureMin":-50,"MarketValue":210},"verbs":{"li":[{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":100,"meleeDamageBaseAmount":7,"meleeDamageDef":"Scratch","linkedBodyPartsGroup":"FrontLeftPaw","surpriseAttack":{"extraMeleeDamages":{"li":{"def":"Stun","amount":20}}}},{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":100,"meleeDamageBaseAmount":7,"meleeDamageDef":"Scratch","linkedBodyPartsGroup":"FrontRightPaw","surpriseAttack":{"extraMeleeDamages":{"li":{"def":"Stun","amount":20}}}},{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":130,"meleeDamageBaseAmount":8,"meleeDamageDef":"Bite","linkedBodyPartsGroup":"Teeth","surpriseAttack":{"extraMeleeDamages":{"li":{"def":"Stun","amount":20}}}}]},"race":{"body":"QuadrupedAnimalWithPawsAndTail","predator":true,"petness":0.1,"baseBodySize":0.55,"baseHungerRate":0.12,"baseHealthScale":0.7,"foodType":"CarnivoreAnimal","leatherInsulation":1,"gestationPeriodDays":18,"nameOnTameChance":1,"trainableIntelligence":"Advanced","wildness":0.75,"nuzzleMtbHours":120,"manhunterOnDamageChance":0.2,"manhunterOnTameFailChance":0.025,"litterSizeCurve":{"points":{"li":["(0.5, 0)","(1, 1)","(2, 1.7)","(3, 0.7)","(3.5, 0)"]}},"lifeExpectancy":9,"lifeStageAges":{"li":[{"def":"AnimalBaby","minAge":0},{"def":"AnimalJuvenile","minAge":0.25},{"def":"AnimalAdult","minAge":0.5}]},"soundMeleeHitPawn":"Pawn_Melee_SmallScratch_HitPawn","soundMeleeHitBuilding":"Pawn_Melee_SmallScratch_HitBuilding","soundMeleeMiss":"Pawn_Melee_SmallScratch_Miss"},"tradeTags":{"li":["StandardAnimal","BadassAnimal"]}},{"$":{"ParentName":"ThingBaseFox"},"defName":"FoxFennec","label":"fennec fox","description":"A small fox originally from the northern part of Earth's Africa continent. It hunts small creatures and has very large ears.","race":{"leatherColor":"(197,161,103)","leatherLabel":"fennec foxskin","meatLabel":"foxmeat"}},{"$":{"ParentName":"ThingBaseFox"},"defName":"FoxRed","label":"red Fox","description":"A small solitary canine evolved for hunting small prey in temperate climates.","race":{"leatherColor":"(178,100,34)","leatherLabel":"red foxskin","useMeatFrom":"FoxFennec"}},{"$":{"ParentName":"ThingBaseFox"},"defName":"FoxArctic","label":"arctic fox","description":"A small predator adapted for the far north. It usually hunts small game like mice and voles, sometimes burrowing through a meter of snow to reach its prey.","race":{"leatherColor":"(200,200,200)","leatherLabel":"arctic foxskin","useMeatFrom":"FoxFennec"}}],"PawnKindDef":[{"$":{"ParentName":"AnimalKindBase"},"defName":"Warg","label":"warg","race":"Warg","combatPower":75,"lifeStages":{"li":[{"label":"warg puppy","bodyGraphicData":{"texPath":"Things/Pawn/Animal/Warg/Warg","drawSize":1.05,"color":"(123,104,89)"},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Warg/Warg","drawSize":1.7,"color":"(123,104,89)","shadowData":{"volume":"(0.25, 0.3, 0.25)","offset":"(0,0,-0.15)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.4}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Warg/Warg","drawSize":2.05,"color":"(123,104,89)","shadowData":{"volume":"(0.3, 0.4, 0.3)","offset":"(0,0,-0.15)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.7}}]},"wildSpawn_spawnWild":true,"wildSpawn_EcoSystemWeight":0.9,"wildSpawn_GroupSizeRange":{"min":2,"max":5}},{"$":{"ParentName":"AnimalKindBase","Name":"AnimalKindBaseWolf","Abstract":"True"},"combatPower":75,"wildSpawn_spawnWild":true,"wildSpawn_EcoSystemWeight":0.9},{"$":{"ParentName":"AnimalKindBaseWolf"},"defName":"WolfTimber","label":"timber wolf","race":"WolfTimber","lifeStages":{"li":[{"label":"timber wolf puppy","bodyGraphicData":{"texPath":"Things/Pawn/Animal/WolfTimber/WolfTimber","drawSize":1.05},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/WolfTimber/WolfTimber","drawSize":1.5,"shadowData":{"volume":"(0.25, 0.3, 0.25)","offset":"(0,0,-0.15)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.5}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/WolfTimber/WolfTimber","drawSize":1.95,"shadowData":{"volume":"(0.3, 0.4, 0.3)","offset":"(0,0,-0.15)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.95}}]}},{"$":{"ParentName":"AnimalKindBaseWolf"},"defName":"WolfArctic","label":"arctic wolf","race":"WolfArctic","lifeStages":{"li":[{"label":"timber wolf puppy","bodyGraphicData":{"texPath":"Things/Pawn/Animal/WolfArctic/WolfArctic","drawSize":1.05},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.05}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/WolfArctic/WolfArctic","drawSize":1.5,"shadowData":{"volume":"(0.25, 0.3, 0.25)","offset":"(0,0,-0.15)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.5}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/WolfArctic/WolfArctic","drawSize":1.95,"shadowData":{"volume":"(0.3, 0.4, 0.3)","offset":"(0,0,-0.15)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.95}}]}},{"$":{"ParentName":"AnimalKindBase","Name":"AnimalKindBaseFox","Abstract":"True"},"combatPower":45,"wildSpawn_spawnWild":true,"wildSpawn_EcoSystemWeight":0.5},{"$":{"ParentName":"AnimalKindBaseFox"},"defName":"FoxFennec","label":"fennec fox","race":"FoxFennec","lifeStages":{"li":[{"label":"fennec fox puppy","bodyGraphicData":{"texPath":"Things/Pawn/Animal/FoxFennec/FoxFennec","drawSize":0.9},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/FoxFennec/FoxFennec","drawSize":1.2,"shadowData":{"volume":"(0.25, 0.3, 0.25)","offset":"(0,0,-0.15)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.2}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/FoxFennec/FoxFennec","drawSize":1.45},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.75}}]}},{"$":{"ParentName":"AnimalKindBaseFox"},"defName":"FoxRed","label":"red fox","race":"FoxRed","lifeStages":{"li":[{"label":"red fox puppy","bodyGraphicData":{"texPath":"Things/Pawn/Animal/FoxRed/FoxRed","drawSize":1},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/FoxRed/FoxRed","drawSize":1.2,"shadowData":{"volume":"(0.25, 0.3, 0.25)","offset":"(0,0,-0.15)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.2}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/FoxRed/FoxRed","drawSize":1.68},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.68}}]}},{"$":{"ParentName":"AnimalKindBaseFox"},"defName":"FoxArctic","label":"arctic fox","race":"FoxArctic","lifeStages":{"li":[{"label":"Arctic fox puppy","bodyGraphicData":{"texPath":"Things/Pawn/Animal/FoxArctic/FoxArctic","drawSize":1},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/FoxArctic/FoxArctic","drawSize":1.2,"shadowData":{"volume":"(0.25, 0.3, 0.25)","offset":"(0,0,-0.15)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.2}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/FoxArctic/FoxArctic","drawSize":1.75},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.75}}]}}]}}