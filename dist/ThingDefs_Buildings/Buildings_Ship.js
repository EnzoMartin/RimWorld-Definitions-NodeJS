module.exports={"GameData":{"ThingDef":[{"$":{"ParentName":"BuildingBase"},"defName":"Ship_Beam","label":"ship structural beam","thingClass":"Building","graphicData":{"texPath":"Things/Building/Ship/ShipBeam","graphicClass":"Graphic_Multi","drawSize":"(3,7)","damageData":{"cornerTL":"Damage/Corner","cornerTR":"Damage/Corner","cornerBL":"Damage/Corner","cornerBR":"Damage/Corner"}},"altitudeLayer":"Building","passability":"Impassable","blockWind":true,"castEdgeShadows":true,"fillPercent":1,"blockLight":true,"statBases":{"WorkToMake":8000,"MaxHitPoints":400,"Flammability":1},"tickerType":"Normal","description":"A structural beam around which a ship can be constructed.","size":"(1,5)","designationCategory":"Ship","comps":{"li":[{"$":{"Class":"CompProperties_Power"},"compClass":"CompPowerTransmitter","transmitsPower":true},{"$":{"Class":"CompProperties_ShipPart"}}]},"placeWorkers":{"li":"PlaceWorker_NotUnderRoof"},"building":{"shipPart":true,"ignoreNeedsPower":true},"costList":{"Steel":200,"Plasteel":150,"Component":2},"terrainAffordanceNeeded":"Heavy","staticSunShadowHeight":1,"researchPrerequisites":{"li":"ShipBasics"},"designationHotkey":"Misc1"},{"$":{"ParentName":"BuildingBase"},"defName":"Ship_CryptosleepCasket","label":"ship cryptosleep casket","thingClass":"Building_CryptosleepCasket","graphicData":{"texPath":"Things/Building/Ship/ShipCryptosleepCasket","graphicClass":"Graphic_Multi","drawSize":"(2,3)"},"researchPrerequisites":{"li":"ShipCryptosleep"},"altitudeLayer":"Building","passability":"PassThroughOnly","pathCost":70,"blockWind":true,"castEdgeShadows":true,"fillPercent":0.5,"statBases":{"WorkToMake":8000,"MaxHitPoints":200,"Flammability":1},"tickerType":"Normal","description":"A cryptosleep casket hardened against the dangers of space. Capable of maintaining a person in cryptosleep for centuries in a space environment and surviving atmospheric re-entry.","size":"(1,2)","designationCategory":"Ship","hasInteractionCell":true,"interactionCellOffset":"(1,0,0)","comps":{"li":[{"$":{"Class":"CompProperties_Power"},"compClass":"CompPowerTransmitter","transmitsPower":true},{"$":{"Class":"CompProperties_ShipPart"}},{"$":{"Class":"CompProperties_Explosive"},"explosiveRadius":2.66,"explosiveDamageType":"Flame"}]},"placeWorkers":{"li":["PlaceWorker_HeadOnShipBeam","PlaceWorker_NotUnderRoof"]},"building":{"shipPart":true,"ignoreNeedsPower":true,"isPlayerEjectable":true},"costList":{"Steel":500,"Component":4},"terrainAffordanceNeeded":"Heavy","staticSunShadowHeight":1,"designationHotkey":"Misc2"},{"$":{"ParentName":"BuildingBase"},"defName":"Ship_ComputerCore","label":"ship computer core","thingClass":"Building_ShipComputerCore","graphicData":{"texPath":"Things/Building/Ship/ShipComputerCore","graphicClass":"Graphic_Multi","drawSize":"(3,3)"},"researchPrerequisites":{"li":"ShipComputerCore"},"altitudeLayer":"Building","passability":"Impassable","blockWind":true,"castEdgeShadows":true,"fillPercent":1,"blockLight":true,"statBases":{"WorkToMake":16000,"MaxHitPoints":150,"Flammability":1},"tickerType":"Normal","description":"A computer core capable of housing a superhumanlike AI who can guide a ship through any challenge.","size":"(1,1)","designationCategory":"Ship","comps":{"li":[{"$":{"Class":"CompProperties_ShipPart"}},{"$":{"Class":"CompProperties_Power"},"compClass":"CompPowerTransmitter","transmitsPower":true}]},"placeWorkers":{"li":"PlaceWorker_NotUnderRoof"},"building":{"shipPart":true,"ignoreNeedsPower":true},"costList":{"Steel":800,"Component":5,"AIPersonaCore":1},"terrainAffordanceNeeded":"Heavy","staticSunShadowHeight":1,"designationHotkey":"Misc3"},{"$":{"ParentName":"BuildingBase"},"defName":"Ship_Reactor","label":"ship reactor","thingClass":"Building","graphicData":{"texPath":"Things/Building/Ship/ShipReactor","graphicClass":"Graphic_Multi","drawSize":"(7,7)","damageData":{"cornerTL":"Damage/Corner","cornerTR":"Damage/Corner","cornerBL":"Damage/Corner","cornerBR":"Damage/Corner"}},"researchPrerequisites":{"li":"ShipReactor"},"altitudeLayer":"Building","passability":"Impassable","blockWind":true,"castEdgeShadows":true,"fillPercent":1,"blockLight":true,"statBases":{"WorkToMake":50000,"MaxHitPoints":500,"Flammability":1},"tickerType":"Normal","description":"Powers a ship on its journey through space.","size":"(5,5)","designationCategory":"Ship","building":{"shipPart":true,"ignoreNeedsPower":true},"costList":{"Steel":500,"Plasteel":500,"Component":10},"comps":{"li":[{"$":{"Class":"CompProperties_Power"},"compClass":"CompPowerPlant","basePowerConsumption":-1000,"transmitsPower":true},{"$":{"Class":"CompProperties_ShipPart"}}]},"placeWorkers":{"li":"PlaceWorker_NotUnderRoof"},"terrainAffordanceNeeded":"Heavy","staticSunShadowHeight":1,"designationHotkey":"Misc4"},{"$":{"ParentName":"BuildingBase"},"defName":"Ship_Engine","label":"ship engine","thingClass":"Building","graphicData":{"texPath":"Things/Building/Ship/ShipEngine","graphicClass":"Graphic_Multi","drawSize":"(4,5)"},"researchPrerequisites":{"li":"ShipEngine"},"altitudeLayer":"Building","passability":"Impassable","blockWind":true,"castEdgeShadows":true,"fillPercent":1,"blockLight":true,"statBases":{"WorkToMake":40000,"MaxHitPoints":400,"Flammability":1},"tickerType":"Normal","description":"An antimatter-powered engine capable of launching a ship into orbit and on interstellar trajectories.","size":"(2,3)","designationCategory":"Ship","comps":{"li":[{"$":{"Class":"CompProperties_Power"},"compClass":"CompPowerTransmitter","transmitsPower":true},{"$":{"Class":"CompProperties_ShipPart"}}]},"placeWorkers":{"li":"PlaceWorker_NotUnderRoof"},"building":{"shipPart":true,"ignoreNeedsPower":true},"costList":{"Steel":400,"Plasteel":200,"Component":6},"terrainAffordanceNeeded":"Heavy","staticSunShadowHeight":1,"designationHotkey":"Misc5"}]}}