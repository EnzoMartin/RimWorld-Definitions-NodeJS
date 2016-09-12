module.exports={"Defs":{"ThingDef":[{"$":{"Abstract":"True","ParentName":"AnimalThingBase","Name":"BaseInsect"},"statBases":{"ToxicSensitivity":0},"race":{"fleshType":"Insectoid","bloodDef":"FilthBloodInsect","meatColor":"(160,150,140)","foodType":"OmnivoreAnimal, AnimalProduct","manhunterOnDamageChance":1,"manhunterOnTameFailChance":0.025}},{"$":{"ParentName":"BaseInsect"},"defName":"Megascarab","label":"megascarab","description":"A large, genetically-engineered beetle. Once the worker caste of an artifical ecosystem of insectoids designed to fight mechanoid invasions, it is now usually seen without its deadlier insectoid cousins. Still, its size and hard shell make it dangerous when it attacks. A eusocial creature, it cannot reproduce individually.","statBases":{"MoveSpeed":3.7,"ArmorRating_Blunt":0.1,"ArmorRating_Sharp":0.4,"ComfyTemperatureMin":0,"MarketValue":100,"LeatherAmount":0},"verbs":{"li":{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":110,"meleeDamageBaseAmount":7,"meleeDamageDef":"Bite","linkedBodyPartsGroup":"Mouth"}},"race":{"body":"BeetleLike","baseBodySize":0.2,"baseHungerRate":0.1,"baseHealthScale":0.4,"useMeatFrom":"Megaspider","wildness":0.95,"lifeExpectancy":10,"lifeStageAges":{"li":[{"def":"EusocialInsectLarva","minAge":0},{"def":"EusocialInsectJuvenile","minAge":0.03},{"def":"EusocialInsectAdult","minAge":0.4,"soundWounded":"Pawn_Megascarab_Wounded","soundDeath":"Pawn_Megascarab_Death","soundCall":"Pawn_Megascarab_Call","soundAngry":"Pawn_Megascarab_Angry"}]},"soundMeleeHitPawn":"Pawn_Melee_SmallScratch_HitPawn","soundMeleeHitBuilding":"Pawn_Melee_SmallScratch_HitBuilding","soundMeleeMiss":"Pawn_Melee_SmallScratch_Miss"},"tradeTags":{"li":"Insectoid"}},{"$":{"ParentName":"BaseInsect"},"defName":"Spelopede","label":"spelopede","description":"A medium-sized bioengineered bug the size of a sheep. The spelopede is the middle caste of a hive, taking care of most work tasks as well as fighting with its claws.","statBases":{"MoveSpeed":2.5,"ComfyTemperatureMin":-25,"MarketValue":450,"LeatherAmount":0,"ArmorRating_Blunt":0.1,"ArmorRating_Sharp":0.1},"verbs":{"li":{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":115,"meleeDamageBaseAmount":9,"meleeDamageDef":"Cut","linkedBodyPartsGroup":"HeadClaw"}},"race":{"body":"BeetleLikeWithClaw","baseHungerRate":0.25,"baseBodySize":0.8,"baseHealthScale":1.7,"gestationPeriodDays":10,"useMeatFrom":"Megaspider","wildness":0.95,"lifeExpectancy":6,"lifeStageAges":{"li":[{"def":"EusocialInsectLarva","minAge":0},{"def":"EusocialInsectJuvenile","minAge":0.03},{"def":"EusocialInsectAdult","minAge":0.2,"soundWounded":"Pawn_Spelopede_Pain","soundDeath":"Pawn_Spelopede_Death","soundCall":"Pawn_Spelopede_Call","soundAngry":"Pawn_Spelopede_Angry"}]},"soundMeleeHitPawn":"Pawn_Melee_SmallScratch_HitPawn","soundMeleeHitBuilding":"Pawn_Melee_SmallScratch_HitBuilding","soundMeleeMiss":"Pawn_Melee_SmallScratch_Miss"},"tradeTags":{"li":"Insectoid"}},{"$":{"ParentName":"BaseInsect"},"defName":"Megaspider","label":"megaspider","description":"Not actually a spider, the megaspider is a genetically-engineered giant insectoid the size of a bear. Designed for heavy work and combat, its thick chitinous armor makes it hard to kill, while its long deadly ripper-blades make it deadly.","statBases":{"MoveSpeed":3.85,"ComfyTemperatureMin":-40,"MarketValue":700,"LeatherAmount":0,"ArmorRating_Blunt":0.1,"ArmorRating_Sharp":0.15},"verbs":{"li":{"verbClass":"Verb_MeleeAttack","defaultCooldownTicks":115,"meleeDamageBaseAmount":13,"meleeDamageDef":"Cut","linkedBodyPartsGroup":"HeadClaw"}},"race":{"body":"BeetleLikeWithClaw","baseHungerRate":0.35,"baseBodySize":1.2,"baseHealthScale":2.5,"gestationPeriodDays":10,"meatLabel":"insect meat","wildness":0.95,"lifeExpectancy":6,"lifeStageAges":{"li":[{"def":"EusocialInsectLarva","minAge":0},{"def":"EusocialInsectJuvenile","minAge":0.03},{"def":"EusocialInsectAdult","minAge":0.2,"soundWounded":"Pawn_BigInsect_Pain","soundDeath":"Pawn_BigInsect_Death","soundCall":"Pawn_BigInsect_Call","soundAngry":"Pawn_BigInsect_Angry"}]},"soundMeleeHitPawn":"Pawn_Melee_BigBash_HitPawn","soundMeleeHitBuilding":"Pawn_Melee_BigBash_HitBuilding","soundMeleeMiss":"Pawn_Melee_BigBash_Miss"},"tradeTags":{"li":"Insectoid"}}],"PawnKindDef":[{"$":{"ParentName":"AnimalKindBase"},"defName":"Megascarab","label":"megascarab","race":"Megascarab","combatPower":30,"wildSpawn_EcoSystemWeight":0.25,"wildSpawn_spawnWild":true,"lifeStages":{"li":[{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Megascarab/Megascarab","drawSize":1,"color":"(114,107,84)"},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedSmall","drawSize":0.8}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Megascarab/Megascarab","drawSize":1.25,"color":"(114,107,84)"},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedSmall","drawSize":0.9}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Megascarab/Megascarab","drawSize":1.5,"color":"(114,107,84)","shadowData":{"volume":"(0.2, 0.3, 0.2)","offset":"(0,0,0)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedSmall","drawSize":1}}]}},{"$":{"ParentName":"AnimalKindBase"},"defName":"Spelopede","label":"spelopede","race":"Spelopede","combatPower":65,"wildSpawn_EcoSystemWeight":0.2,"wildSpawn_spawnWild":true,"lifeStages":{"li":[{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Spelopede/Spelopede","drawSize":1,"color":"(156,148,125)"},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedSmall","drawSize":1}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Spelopede/Spelopede","drawSize":1.25,"color":"(156,148,125)"},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedSmall","drawSize":1.25}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Spelopede/Spelopede","drawSize":1.65,"color":"(156,148,125)","shadowData":{"volume":"(0.4, 0.5, 0.37)","offset":"(0,0,-0.15)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedSmall","drawSize":1.65}}]}},{"$":{"ParentName":"AnimalKindBase"},"defName":"Megaspider","label":"megaspider","race":"Megaspider","combatPower":150,"wildSpawn_EcoSystemWeight":0.2,"wildSpawn_spawnWild":true,"lifeStages":{"li":[{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Megaspider/Megaspider","drawSize":1.2,"color":"(154,125,94)"},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.2}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Megaspider/Megaspider","drawSize":1.6,"color":"(154,125,94)"},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":1.6}},{"bodyGraphicData":{"texPath":"Things/Pawn/Animal/Megaspider/Megaspider","drawSize":2.5,"color":"(154,125,94)","shadowData":{"volume":"(0.5, 0.7, 0.43)","offset":"(0,0,-0.1)"}},"dessicatedBodyGraphicData":{"texPath":"Things/Pawn/Animal/Dessicated/CritterDessicatedMedium","drawSize":2.5}}]}}]}}