module.exports={"Defs":{"FactionDef":[{"defName":"Spacer","label":"spacer","description":"People from the distant reaches of space.","pawnsPlural":"spacers","requiredCountAtGameStart":1,"fixedName":"Spacer","techLevel":"Spacer","backstoryCategory":"Civil","hidden":true,"hairTags":{"li":"Urban"},"apparelStuffFilter":{"thingDefs":{"li":["Synthread","Hyperweave"]}}},{"defName":"SpacerHostile","label":"spacer","description":"People from the distant reaches of space.","pawnsPlural":"spacers","requiredCountAtGameStart":1,"fixedName":"Spacer","techLevel":"Spacer","backstoryCategory":"Civil","hidden":true,"hairTags":{"li":"Urban"},"apparelStuffFilter":{"thingDefs":{"li":["Synthread","Hyperweave"]}},"startingGoodwill":{"min":-100,"max":-100},"naturalColonyGoodwill":{"min":-100,"max":-100}},{"defName":"Mechanoid","label":"mechanoid hive","description":"A hive of ancient self-replicating machines.","pawnsPlural":"mechanoids","requiredCountAtGameStart":1,"fixedName":"a mechanoid hive","raidCommonality":37,"humanlikeFaction":false,"hidden":true,"canFlee":false,"canUseAvoidGrid":false,"techLevel":"Ultra","earliestRaidDays":45,"startingGoodwill":{"min":-100,"max":-100},"mustStartOneEnemy":true,"naturalColonyGoodwill":{"min":-100,"max":-100},"pawnGroupMakers":{"li":{"$":{"Class":"PawnGroupMaker_Normal"},"options":{"Centipede":100,"Scyther":100}}},"homeIconPath":"World/FactionHomes/DefaultHome","homeIconColor":"(150,150,150)","allowedArrivalTemperatureRange":{"min":-100,"max":200}},{"defName":"Insect","label":"insects","description":"Usually aggressive and intrusive insects.","pawnsPlural":"insects","requiredCountAtGameStart":1,"fixedName":"insects","raidCommonality":0,"humanlikeFaction":false,"hidden":true,"canFlee":false,"canUseAvoidGrid":false,"techLevel":"Animal","startingGoodwill":{"min":-100,"max":-100},"mustStartOneEnemy":true,"naturalColonyGoodwill":{"min":-100,"max":-100},"homeIconPath":"World/FactionHomes/DefaultHome","homeIconColor":"(138,108,76)","allowedArrivalTemperatureRange":{"min":0,"max":45}}]}}