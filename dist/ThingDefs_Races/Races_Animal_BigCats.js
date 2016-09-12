module.exports={"Defs":{"ThingDef":[{"$":{"ParentName":"AnimalThingBase","Name":"BigCatThingBase","Abstract":"True"},"statBases":{"MoveSpeed":6.5,"ComfyTemperatureMin":-8,"MarketValue":650},"verbs":{"li":[{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":90,"meleeDamageBaseAmount":11,"meleeDamageDef":"Scratch","linkedBodyPartsGroup":"FrontLeftPaw","surpriseAttack":{"extraMeleeDamages":{"li":{"def":"Stun","amount":20}}}},{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":90,"meleeDamageBaseAmount":11,"meleeDamageDef":"Scratch","linkedBodyPartsGroup":"FrontRightPaw","surpriseAttack":{"extraMeleeDamages":{"li":{"def":"Stun","amount":20}}}},{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":110,"meleeDamageBaseAmount":15,"meleeDamageDef":"Bite","linkedBodyPartsGroup":"Teeth","surpriseAttack":{"extraMeleeDamages":{"li":{"def":"Stun","amount":20}}}}]},"race":{"body":"QuadrupedAnimalWithPawsAndTail","herdAnimal":false,"predator":true,"baseBodySize":1.4,"baseHungerRate":0.3,"baseHealthScale":1.8,"foodType":"CarnivoreAnimal, OvivoreAnimal","leatherInsulation":0.9,"wildness":0.8,"manhunterOnTameFailChance":0.025,"manhunterOnDamageChance":1,"gestationPeriodDays":22.5,"lifeExpectancy":13,"lifeStageAges":{"li":[{"def":"AnimalBaby","minAge":0},{"def":"AnimalJuvenile","minAge":0.3},{"def":"AnimalAdult","minAge":0.85,"soundWounded":"Pawn_Cougar_Injured","soundDeath":"Pawn_Cougar_Death","soundAngry":"Pawn_Cougar_Angry"}]},"soundMeleeHitPawn":"Pawn_Melee_BigBash_HitPawn","soundMeleeHitBuilding":"Pawn_Melee_BigBash_HitBuilding","soundMeleeMiss":"Pawn_Melee_BigBash_Miss"},"tradeTags":{"li":["StandardAnimal","BadassAnimal"]}},{"$":{"ParentName":"BigCatThingBase"},"defName":"Cougar","label":"cougar","description":"One of the most dangerous big cats, cougars are solitary hunters with long, sharp teeth and claws. They stalk prey from hidden positions before pouncing.\\n\\nWhile humans are not their normal diet, they won't turn down a meal of vulnerable human meat.","race":{"leatherLabel":"cougarskin","leatherColor":"(177,136,112)"}},{"$":{"ParentName":"BigCatThingBase"},"defName":"Panther","label":"panther","description":"An agile and powerful big cat native to the jungles of old Earth. As solitary ambush predators, panthers are masters of taking down both large and small prey. Onlookers tend to focus on their graceful movements, while those in closer contact usually notice their skull-crushing strength.","race":{"leatherLabel":"pantherskin","leatherColor":"(60,60,60)"}},{"$":{"ParentName":"AnimalThingBase"},"defName":"Lynx","label":"lynx","description":"A wildcat larger than a housecat, but smaller than a cougar. Lynxes survive on a diet of small birds and animals. Their very warm fur keeps them safe from the brutally cold temperatures of their northern territories.","statBases":{"MoveSpeed":6.5,"ComfyTemperatureMin":-45,"MarketValue":320},"verbs":{"li":[{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":90,"meleeDamageBaseAmount":9,"meleeDamageDef":"Scratch","linkedBodyPartsGroup":"FrontLeftPaw","surpriseAttack":{"extraMeleeDamages":{"li":{"def":"Stun","amount":20}}}},{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":90,"meleeDamageBaseAmount":9,"meleeDamageDef":"Scratch","linkedBodyPartsGroup":"FrontRightPaw","surpriseAttack":{"extraMeleeDamages":{"li":{"def":"Stun","amount":20}}}},{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":110,"meleeDamageBaseAmount":11,"meleeDamageDef":"Bite","linkedBodyPartsGroup":"Teeth","surpriseAttack":{"extraMeleeDamages":{"li":{"def":"Stun","amount":20}}}}]},"race":{"body":"QuadrupedAnimalWithPawsAndTail","herdAnimal":false,"predator":true,"baseBodySize":0.8,"baseHungerRate":0.19,"baseHealthScale":0.8,"foodType":"CarnivoreAnimal, OvivoreAnimal","leatherColor":"(173,155,138)","leatherInsulation":1.15,"leatherLabel":"lynxskin","wildness":0.8,"manhunterOnTameFailChance":0.025,"manhunterOnDamageChance":1,"gestationPeriodDays":22.5,"lifeExpectancy":9,"lifeStageAges":{"li":[{"def":"AnimalBaby","minAge":0},{"def":"AnimalJuvenile","minAge":0.25},{"def":"AnimalAdult","minAge":0.7,"soundWounded":"Pawn_Cougar_Injured","soundDeath":"Pawn_Cougar_Death","soundAngry":"Pawn_Cougar_Angry"}]},"soundMeleeHitPawn":"Pawn_Melee_BigBash_HitPawn","soundMeleeHitBuilding":"Pawn_Melee_BigBash_HitBuilding","soundMeleeMiss":"Pawn_Melee_BigBash_Miss"},"tradeTags":{"li":["StandardAnimal","BadassAnimal"]}}],"PawnKindDef":[{"$":{"ParentName":"AnimalKindBase","Name":"BigCatKindBase","Abstract":"True"},"combatPower":155,"wildSpawn_spawnWild":true,"wildSpawn_EcoSystemWeight":0.42},{"$":{"ParentName":"BigCatKindBase"},"defName":"Cougar","label":"cougar","race":"Cougar","lifeStages":{"li":[{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Cougar/Cougar","drawSize":1.1,"color":"(177,136,112)"},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.1}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Cougar/Cougar","drawSize":1.4,"color":"(177,136,112)","shadowData":{"volume":"(0.3, 0.3, 0.3)","offset":"(0,0,-0.3)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.4}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Cougar/Cougar","drawSize":2.18,"color":"(177,136,112)","shadowData":{"volume":"(0.4, 0.4, 0.4)","offset":"(0,0,-0.1)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":2.18}}]}},{"$":{"ParentName":"BigCatKindBase"},"defName":"Panther","label":"panther","race":"Panther","lifeStages":{"li":[{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Cougar/Cougar","drawSize":1.05,"color":"(60,60,60)"},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.05}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Cougar/Cougar","drawSize":1.35,"color":"(60,60,60)","shadowData":{"volume":"(0.3, 0.3, 0.3)","offset":"(0,0,-0.3)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.35}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Cougar/Cougar","drawSize":2.12,"color":"(60,60,60)","shadowData":{"volume":"(0.4, 0.4, 0.4)","offset":"(0,0,-0.1)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":2.12}}]}},{"$":{"ParentName":"AnimalKindBase"},"defName":"Lynx","label":"lynx","race":"Lynx","combatPower":80,"wildSpawn_spawnWild":true,"wildSpawn_EcoSystemWeight":0.22,"lifeStages":{"li":[{"label":"lynx kitten","bodyGraphicData":{"texPath":"Things/Pawn/Animal/Lynx/Lynx","drawSize":1.1,"color":"(173,155,138)","shaderType":"CutoutComplex"},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.1}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Lynx/Lynx","drawSize":1.4,"color":"(173,155,138)","shaderType":"CutoutComplex","shadowData":{"volume":"(0.3, 0.3, 0.3)","offset":"(0,0,-0.3)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.4}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Lynx/Lynx","drawSize":1.6,"color":"(173,155,138)","shaderType":"CutoutComplex","shadowData":{"volume":"(0.3, 0.3, 0.3)","offset":"(0,0,-0.1)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.6}}]}}]}}