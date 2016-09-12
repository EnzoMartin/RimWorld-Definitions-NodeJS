module.exports={"Defs":{"ThingDef":[{"$":{"ParentName":"BuildingBase"},"defName":"Campfire","label":"campfire","thingClass":"Building_WorkTable","description":"Cooks meals and produces heat. Burns out after a few days. As with all heat sources, it must be placed indoors so it has a closed space to heat. Refuelable.","category":"Building","graphicData":{"texPath":"Things/Building/Misc/Campfire","graphicClass":"Graphic_Single","drawRotated":false,"allowFlip":false,"damageData":{"rect":"(0.2,0,0.6,0.1)"}},"altitudeLayer":"Building","passability":"PassThroughOnly","pathCost":50,"constructEffect":"ConstructDirt","tickerType":"Normal","drawerType":"RealtimeOnly","fillPercent":0.25,"statBases":{"MaxHitPoints":80,"WorkToMake":200,"Flammability":0},"selectable":true,"costList":{"WoodLog":20},"soundImpactDefault":"BulletImpactGround","leaveResourcesWhenKilled":false,"resourcesFractionWhenDeconstructed":0,"placeWorkers":{"li":"PlaceWorker_Heater"},"drawPlaceWorkersWhileSelected":true,"comps":{"li":[{"$":{"Class":"CompProperties_Refuelable"},"fuelConsumptionRate":10,"fuelCapacity":20,"fuelConsumptionPerTickInRain":0.0006,"fuelFilter":{"thingDefs":{"li":"WoodLog"}},"destroyOnNoFuel":true},{"$":{"Class":"CompProperties_Glower"},"glowRadius":10,"glowColor":"(252,187,113,0)"},{"$":{"Class":"CompProperties_HeatPusher"},"heatPerSecond":21,"heatPushMaxTemperature":28},{"$":{"Class":"CompProperties_FireOverlay"},"fireSize":1},{"compClass":"CompGatherSpot"}]},"designationCategory":"Temperature","designationHotKey":"Misc1","hasInteractionCell":true,"interactionCellOffset":"(0,0,-1)","recipes":{"li":["CookMealSimpleCampfire","MakePemmicanCampfire","BurnApparelCampfire","BurnDrugs"]},"inspectorTabs":{"li":"ITab_Bills"},"building":{"isMealSource":true,"spawnedConceptLearnOpportunity":"BillsTab"}},{"$":{"ParentName":"BuildingBase"},"defName":"PassiveCooler","label":"passive cooler","description":"A traditional unpowered cooler that works by water evaporation. Will run out and self-destruct after several days.","category":"Building","graphicData":{"texPath":"Things/Building/Misc/PassiveCooler","graphicClass":"Graphic_Single","drawRotated":false,"allowFlip":false,"damageData":{"rect":"(0.2,0,0.6,0.1)"}},"altitudeLayer":"Building","passability":"PassThroughOnly","pathCost":50,"constructEffect":"ConstructDirt","tickerType":"Normal","drawerType":"RealtimeOnly","fillPercent":0.4,"statBases":{"MaxHitPoints":80,"WorkToMake":200,"Flammability":0},"selectable":true,"costList":{"WoodLog":50},"soundImpactDefault":"BulletImpactGround","leaveResourcesWhenKilled":false,"resourcesFractionWhenDeconstructed":0,"placeWorkers":{"li":"PlaceWorker_CoolerSimple"},"drawPlaceWorkersWhileSelected":true,"comps":{"li":[{"$":{"Class":"CompProperties_HeatPusher"},"heatPerSecond":-11,"heatPushMinTemperature":15},{"$":{"Class":"CompProperties_Lifespan"},"lifeSpanTicks":300000}]},"designationCategory":"Temperature","designationHotKey":"Misc2","researchPrerequisites":{"li":"PassiveCooler"}},{"$":{"ParentName":"BuildingBase"},"defName":"Heater","label":"heater","thingClass":"Building_Heater","graphicData":{"texPath":"Things/Building/Misc/TempControl/Heater","graphicClass":"Graphic_Single","shadowData":{"volume":"(0.25,0.4,0.7)","offset":"(0,0,-0.1)"},"damageData":{"rect":"(0.234375,0,0.515625,0.984375)","cornerTL":"Damage/Corner","cornerTR":"Damage/Corner","cornerBL":"Damage/Corner","cornerBR":"Damage/Corner"}},"minifiedDef":"MinifiedFurniture","altitudeLayer":"Building","passability":"PassThroughOnly","pathCost":40,"blockWind":true,"rotatable":false,"fillPercent":0.4,"statBases":{"WorkToMake":1000,"MaxHitPoints":100,"Flammability":1},"tickerType":"Rare","description":"An electrical device that converts electricity into heat. It can automatically turn itself on or off to reach a specific target temperature.","costList":{"Steel":65,"Component":1},"terrainAffordanceNeeded":"Heavy","placeWorkers":{"li":"PlaceWorker_Heater"},"drawPlaceWorkersWhileSelected":true,"comps":{"li":[{"$":{"Class":"CompProperties_Power"},"compClass":"CompPowerTrader","startElectricalFires":true,"basePowerConsumption":175},{"$":{"Class":"CompProperties_Flickable"}},{"$":{"Class":"CompProperties_TempControl"},"energyPerSecond":21},{"$":{"Class":"CompProperties_Glower"},"glowRadius":3,"glowColor":"(255,150,100,0)"},{"$":{"Class":"CompProperties_Breakdownable"}}]},"designationCategory":"Temperature","designationHotKey":"Misc3","researchPrerequisites":{"li":"Electricity"}},{"$":{"ParentName":"BuildingBase"},"defName":"Cooler","label":"cooler","thingClass":"Building_Cooler","graphicData":{"texPath":"Things/Building/Misc/TempControl/Cooler","graphicClass":"Graphic_Multi","damageData":{"cornerTL":"Damage/Corner","cornerTR":"Damage/Corner","cornerBL":"Damage/Corner","cornerBR":"Damage/Corner"}},"altitudeLayer":"Building","passability":"Impassable","blockWind":true,"fillPercent":1,"coversFloor":true,"blockLight":true,"castEdgeShadows":true,"staticSunShadowHeight":1,"statBases":{"WorkToMake":1600,"MaxHitPoints":100,"Flammability":1},"tickerType":"Rare","description":"An electrical device that fits into a wall and pushes cold air into a room. Its exhaust port generates a lot of heat. Can be used to cool down rooms during the summer months, or to create a walk-in freezer. ","costList":{"Steel":90,"Component":3},"terrainAffordanceNeeded":"Heavy","placeWorkers":{"li":"PlaceWorker_Cooler"},"drawPlaceWorkersWhileSelected":true,"building":{"canPlaceOverWall":true},"comps":{"li":[{"$":{"Class":"CompProperties_Power"},"compClass":"CompPowerTrader","basePowerConsumption":200},{"$":{"Class":"CompProperties_Flickable"}},{"$":{"Class":"CompProperties_TempControl"},"energyPerSecond":-21},{"$":{"Class":"CompProperties_Breakdownable"}}]},"designationCategory":"Temperature","designationHotKey":"Misc4","researchPrerequisites":{"li":"AirConditioning"}},{"$":{"ParentName":"BuildingBase"},"defName":"Vent","label":"vent","thingClass":"Building_Vent","graphicData":{"texPath":"Things/Building/Misc/TempControl/Vent","graphicClass":"Graphic_Multi","damageData":{"cornerTL":"Damage/Corner","cornerTR":"Damage/Corner","cornerBL":"Damage/Corner","cornerBR":"Damage/Corner"}},"altitudeLayer":"Building","passability":"Impassable","blockWind":true,"fillPercent":1,"coversFloor":true,"blockLight":true,"castEdgeShadows":true,"staticSunShadowHeight":1,"statBases":{"WorkToMake":400,"MaxHitPoints":100,"Flammability":1},"tickerType":"Rare","description":"A simple vent for equalizing the temperature between two rooms without allowing people to walk between them.","costList":{"Steel":30},"terrainAffordanceNeeded":"Heavy","placeWorkers":{"li":"PlaceWorker_Vent"},"drawPlaceWorkersWhileSelected":true,"building":{"canPlaceOverWall":true},"designationCategory":"Temperature","designationHotKey":"Misc5"}]}}