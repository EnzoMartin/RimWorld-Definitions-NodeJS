module.exports={"Defs":{"ScenarioDef":{"defName":"Crashlanded","label":"Crashlanded","description":"The three of you awake in your cryptosleep sarcophagi to the sound of sirens and ripping metal. You barely get to the escape pods before the ship is torn apart. Some time later, you land on this unknown rimworld.","scenario":{"summary":"Three crashlanded survivors - the classic RimWorld experience.","playerFaction":{"def":"PlayerFaction","factionDef":"PlayerColony"},"parts":{"li":[{"$":{"Class":"ScenPart_ConfigPage_ConfigureStartingPawns"},"def":"ConfigPage_ConfigureStartingPawns","pawnCount":3},{"$":{"Class":"ScenPart_PlayerPawnsArriveMethod"},"def":"PlayerPawnsArriveMethod","method":"DropPods","visible":false},{"$":{"Class":"ScenPart_ForcedHediff"},"def":"ForcedHediff","visible":false,"context":"PlayerStarter","chance":0.5,"hediff":"CryptosleepSickness","hideOffMap":true,"severityRange":{"min":1,"max":1}},{"$":{"Class":"ScenPart_StartingThing_Defined"},"def":"StartingThing_Defined","thingDef":"Silver","count":800},{"$":{"Class":"ScenPart_StartingThing_Defined"},"def":"StartingThing_Defined","thingDef":"MealSurvivalPack","count":30},{"$":{"Class":"ScenPart_StartingThing_Defined"},"def":"StartingThing_Defined","thingDef":"Medicine","count":24},{"$":{"Class":"ScenPart_StartingThing_Defined"},"def":"StartingThing_Defined","thingDef":"Component","count":30},{"$":{"Class":"ScenPart_StartingThing_Defined"},"def":"StartingThing_Defined","thingDef":"Gun_SurvivalRifle"},{"$":{"Class":"ScenPart_StartingThing_Defined"},"def":"StartingThing_Defined","thingDef":"Gun_Pistol"},{"$":{"Class":"ScenPart_StartingThing_Defined"},"def":"StartingThing_Defined","thingDef":"MeleeWeapon_Knife","stuff":"Plasteel"},{"$":{"Class":"ScenPart_StartingAnimal"},"def":"StartingAnimal","count":1,"bondToRandomPlayerPawnChance":1},{"$":{"Class":"ScenPart_ScatterThingsNearPlayerStart"},"def":"ScatterThingsNearPlayerStart","thingDef":"Steel","count":450},{"$":{"Class":"ScenPart_ScatterThingsNearPlayerStart"},"def":"ScatterThingsNearPlayerStart","thingDef":"WoodLog","count":300},{"$":{"Class":"ScenPart_ScatterThingsAnywhere"},"def":"ScatterThingsAnywhere","thingDef":"ShipChunk","count":3},{"$":{"Class":"ScenPart_ScatterThingsAnywhere"},"def":"ScatterThingsAnywhere","thingDef":"Steel","count":720},{"$":{"Class":"ScenPart_ScatterThingsAnywhere"},"def":"ScatterThingsAnywhere","thingDef":"MealSurvivalPack","count":7},{"$":{"Class":"ScenPart_GameStartDialog"},"def":"GameStartDialog","textKey":"GameStartDialog","closeSound":"GameStartSting"}]}}}}}