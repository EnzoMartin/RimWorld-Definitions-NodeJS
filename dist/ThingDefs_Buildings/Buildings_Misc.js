module.exports={"Buildings":{"ThingDef":[{"$":{"ParentName":"BuildingBase"},"defName":"OrbitalTradeBeacon","label":"orbital trade beacon","thingClass":"Building_OrbitalTradeBeacon","graphicData":{"texPath":"Things/Building/Misc/DropBeacon","graphicClass":"Graphic_Single","shadowData":{"volume":"(0.3, 0.4, 0.3)","offset":"(0,0,-0.1)"},"damageData":{"rect":"(0.2,0.2,0.6,0.6)"}},"altitudeLayer":"Building","statBases":{"MaxHitPoints":75,"WorkToMake":1300,"Flammability":1},"description":"Required for orbital trading. You can only sell goods that are near an orbital trade beacon. Can be placed indoors.","drawerType":"MapMeshAndRealTime","drawPlaceWorkersWhileSelected":true,"fillPercent":0.15,"costList":{"Steel":50,"Component":1},"comps":{"li":[{"$":{"Class":"CompProperties_Power"},"compClass":"CompPowerTrader","basePowerConsumption":40,"shortCircuitInRain":false},{"$":{"Class":"CompProperties_Flickable"}},{"$":{"Class":"CompProperties_Breakdownable"}}]},"leaveResourcesWhenKilled":false,"pathCost":8,"designationCategory":"Misc","rotatable":false,"placeWorkers":{"li":"PlaceWorker_ShowTradeBeaconRadius"},"designationHotKey":"Misc2","researchPrerequisites":{"li":"MicroelectronicsBasics"}},{"$":{"ParentName":"BuildingBase"},"defName":"CommsConsole","label":"comms console","thingClass":"Building_CommsConsole","graphicData":{"texPath":"Things/Building/Misc/CommsConsole","graphicClass":"Graphic_Single","drawSize":"(5,4)","damageData":{"rect":"(0,0,3,1.8)","cornerBL":"Damage/Corner","cornerBR":"Damage/Corner"}},"altitudeLayer":"Building","passability":"Impassable","blockWind":true,"castEdgeShadows":true,"fillPercent":1,"statBases":{"MaxHitPoints":250,"WorkToMake":2200,"Flammability":1},"description":"Allows radio contact with remote traders as well as other factions for trade and diplomacy.","size":"(3,2)","costList":{"Steel":120,"Component":4},"interactionCellOffset":"(0,0,2)","hasInteractionCell":true,"terrainAffordanceNeeded":"Heavy","designationCategory":"Misc","comps":{"li":[{"$":{"Class":"CompProperties_Power"},"compClass":"CompPowerTrader","startElectricalFires":true,"basePowerConsumption":200},{"$":{"Class":"CompProperties_Flickable"}},{"$":{"Class":"CompProperties_Breakdownable"}}]},"staticSunShadowHeight":0.5,"designationHotkey":"Misc3","researchPrerequisites":{"li":"MicroelectronicsBasics"}},{"$":{"ParentName":"BuildingBase"},"defName":"FirefoamPopper","label":"firefoam popper","description":"When touched by fire or triggered by hand, this pops and sprays a fire-extinguishing foam in a circular field around itself.","graphicData":{"texPath":"Things/Building/Misc/FirefoamPopper","graphicClass":"Graphic_Single","shadowData":{"volume":"(0.25, 0.5, 0.25)","offset":"(0,0,-0.1)"},"damageData":{"rect":"(0.2,0.2,0.6,0.6)"}},"comps":{"li":[{"$":{"Class":"CompProperties_Explosive"},"explosiveRadius":9.9,"explosiveDamageType":"Extinguish","startWickHitPointsPercent":-1,"startWickOnDamageTaken":"Flame","postExplosionSpawnThingDef":"FilthFireFoam","postExplosionSpawnChance":1,"postExplosionSpawnThingCount":3,"applyDamageToExplosionCellsNeighbors":true,"explosionEffect":"ExtinguisherExplosion"},{"$":{"Class":"CompProperties_Usable"},"useJob":"TriggerFirefoamPopper","useLabel":"Trigger firefoam popper"},{"$":{"Class":"CompProperties_UseEffect"},"compClass":"CompUseEffect_StartWick"}]},"tickerType":"Normal","altitudeLayer":"Building","minifiedDef":"MinifiedFurniture","statBases":{"MaxHitPoints":50,"WorkToMake":1500,"Flammability":1,"Beauty":-8},"fillPercent":0.15,"costList":{"Steel":75,"Component":1},"specialDisplayRadius":9.9,"leaveResourcesWhenKilled":false,"pathCost":25,"designationCategory":"Misc","rotatable":false,"designationHotKey":"Misc7","researchPrerequisites":{"li":"Firefoam"}},{"$":{"ParentName":"BuildingBase"},"defName":"MoisturePump","label":"moisture pump","description":"Very slowly removes moisture from nearby terrain, converting marshes or shallow water into dry ground. Does not affect deep water.","graphicData":{"texPath":"Things/Building/Misc/MoisturePump","graphicClass":"Graphic_Single","shadowData":{"volume":"(0.25, 0.5, 0.25)","offset":"(0,0,-0.1)"},"damageData":{"rect":"(0.2,0.2,0.6,0.6)"}},"comps":{"li":[{"$":{"Class":"CompProperties_Power"},"compClass":"CompPowerTrader","startElectricalFires":true,"basePowerConsumption":150,"shortCircuitInRain":false},{"$":{"Class":"CompProperties_TerrainPumpDry"},"radius":6.9,"daysToRadius":60}]},"tickerType":"Rare","altitudeLayer":"Building","statBases":{"MaxHitPoints":50,"WorkToMake":1500,"Flammability":1,"Beauty":-8},"fillPercent":0.15,"costList":{"Steel":75,"Component":5},"specialDisplayRadius":6.9,"leaveResourcesWhenKilled":false,"pathCost":25,"designationCategory":"Misc","rotatable":false,"researchPrerequisites":{"li":"MoisturePump"}},{"$":{"ParentName":"BuildingBase"},"defName":"GroundPenetratingScanner","label":"ground-penetrating scanner","description":"A downward-facing penetrating radar, combined with sonar and magnetic imagers, allows you to detect (but not identify) minerals buried deep under the surface. Requires a huge amount of electricity.","graphicData":{"texPath":"Things/Building/Misc/GroundPenetratingScanner","graphicClass":"Graphic_Single","drawSize":"(2,2)","shadowData":{"volume":"(1.4, 0.5, 1.4)","offset":"(0,0,-0.1)"}},"costList":{"Steel":400,"Component":12},"comps":{"li":[{"$":{"Class":"CompProperties_Power"},"compClass":"CompPowerTrader","startElectricalFires":true,"basePowerConsumption":1500,"shortCircuitInRain":false},{"$":{"Class":"CompProperties_Breakdownable"}},{"$":{"Class":"CompProperties_Flickable"}},{"compClass":"CompDeepScanner"}]},"altitudeLayer":"Building","statBases":{"MaxHitPoints":50,"WorkToMake":1500,"Flammability":1,"Beauty":-8},"fillPercent":0.25,"leaveResourcesWhenKilled":false,"pathCost":25,"designationCategory":"Misc","rotatable":false,"size":"(2,2)","researchPrerequisites":{"li":"GroundPenetratingScanner"}},{"$":{"ParentName":"BuildingBase"},"defName":"MultiAnalyzer","label":"multi-analyzer","description":"Increases research speed. Needs to be placed near hi-tech research bench. One research bench can be linked to only one multi-analyzer.","graphicData":{"texPath":"Things/Building/Misc/MultiAnalyzer","graphicClass":"Graphic_Single","drawSize":"(2,2)","damageData":{"rect":"(0.15,0.15,1.7,1.7)"}},"researchPrerequisites":{"li":"MultiAnalyzer"},"size":"(2,2)","rotatable":false,"altitudeLayer":"Building","passability":"PassThroughOnly","castEdgeShadows":true,"fillPercent":0.5,"designationHotkey":"Misc4","designationCategory":"Misc","minifiedDef":"MinifiedFurniture","statBases":{"MaxHitPoints":200,"WorkToMake":5000,"Flammability":1},"costList":{"Steel":100,"Plasteel":50,"Gold":20},"comps":{"li":[{"$":{"Class":"CompProperties_Power"},"compClass":"CompPowerTrader","startElectricalFires":true,"basePowerConsumption":200},{"$":{"Class":"CompProperties_Flickable"}},{"$":{"Class":"CompProperties_Facility"},"statOffsets":{"ResearchSpeedFactor":0.1},"maxSimultaneous":1}]},"placeWorkers":{"li":"PlaceWorker_ShowFacilitiesConnections"}},{"$":{"ParentName":"BuildingBase"},"defName":"VitalsMonitor","label":"vitals monitor","graphicData":{"texPath":"Things/Building/Misc/VitalsMonitor","graphicClass":"Graphic_Multi","shadowData":{"offset":"(0,0,-0.3)","volume":"(0.3, 0.3, 0.4)"},"damageData":{"rectN":"(0.078125,0.46875,0.859375,0.53125)","rectS":"(0.078125,0.46875,0.859375,0.53125)","rectE":"(0.125,0.46875,0.625,0.296875)","rectW":"(0.25,0.46875,0.625,0.296875)","cornerTR":"Damage/Corner"}},"defaultPlacingRot":"South","researchPrerequisites":{"li":"VitalsMonitor"},"altitudeLayer":"Building","passability":"PassThroughOnly","fillPercent":0.2,"statBases":{"MaxHitPoints":100,"WorkToMake":4000,"Flammability":1},"description":"Increases patients treatment quality. Needs to be placed adjacent to a medical bed. One medical bed can be linked to only one vitals monitor.","size":"(1,1)","costList":{"Steel":180},"designationCategory":"Misc","minifiedDef":"MinifiedFurniture","comps":{"li":[{"$":{"Class":"CompProperties_Power"},"compClass":"CompPowerTrader","startElectricalFires":true,"basePowerConsumption":150},{"$":{"Class":"CompProperties_Flickable"}},{"$":{"Class":"CompProperties_Facility"},"statOffsets":{"MedicalTreatmentQualityFactor":0.04,"ImmunityGainSpeedFactor":0.02},"maxSimultaneous":1,"mustBePlacedAdjacent":true,"canLinkToMedBedsOnly":true}]},"designationHotkey":"Misc5","placeWorkers":{"li":"PlaceWorker_ShowFacilitiesConnections"}},{"$":{"ParentName":"BuildingBase"},"defName":"ToolCabinet","label":"tool cabinet","graphicData":{"texPath":"Things/Building/Misc/ToolCabinet","graphicClass":"Graphic_Multi","drawSize":"(2,1)","color":"(96,114,95)","damageData":{"cornerTL":"Damage/Corner","cornerTR":"Damage/Corner","cornerBL":"Damage/Corner","cornerBR":"Damage/Corner"}},"altitudeLayer":"Building","passability":"PassThroughOnly","castEdgeShadows":true,"staticSunShadowHeight":0.35,"fillPercent":0.5,"statBases":{"MaxHitPoints":100,"WorkToMake":1800,"Flammability":1},"description":"Increases work speed. Needs to be placed near workbench. One workbench can be simultaneously linked to only two tools cabinets.","size":"(2,1)","costList":{"Steel":200},"designationCategory":"Misc","minifiedDef":"MinifiedFurniture","comps":{"li":{"$":{"Class":"CompProperties_Facility"},"statOffsets":{"WorkTableWorkSpeedFactor":0.06},"maxSimultaneous":2}},"designationHotkey":"Misc6","placeWorkers":{"li":"PlaceWorker_ShowFacilitiesConnections"}},{"$":{"ParentName":"BuildingBase"},"defName":"Grave","label":"grave","thingClass":"Building_Grave","graphicData":{"texPath":"Things/Building/Misc/GraveEmpty","graphicClass":"Graphic_Multi","drawSize":"(3,4)"},"constructEffect":"ConstructDirt","altitudeLayer":"FloorEmplacement","useHitPoints":false,"description":"Place the dead in graves to give them a decent final resting place. Colonists will visit full graves to gain meditative joy.","size":"(1,2)","tickerType":"Rare","statBases":{"WorkToMake":650},"passability":"PassThroughOnly","building":{"isInert":true,"preventDeterioration":true,"fullGraveGraphicData":{"texPath":"Things/Building/Misc/GraveFull","graphicClass":"Graphic_Multi","drawSize":"(3,4)"},"fixedStorageSettings":{"filter":{"categories":{"li":"Corpses"}}},"defaultStorageSettings":{"filter":{"categories":{"li":"CorpsesHumanlike"}}}},"inspectorTabs":{"li":"ITab_Storage"},"comps":{"li":{"compClass":"CompQuality"}},"terrainAffordanceNeeded":"Diggable","designationCategory":"Misc","designationHotkey":"Misc8"},{"$":{"ParentName":"BuildingBase"},"defName":"Sarcophagus","label":"sarcophagus","thingClass":"Building_Sarcophagus","graphicData":{"texPath":"Things/Building/Misc/Sarcophagus","graphicClass":"Graphic_Multi","drawSize":"(3,4)","damageData":{"cornerTL":"Damage/Corner","cornerTR":"Damage/Corner","cornerBL":"Damage/Corner","cornerBR":"Damage/Corner"}},"description":"An ornamented burial receptacle for the honored dead.","size":"(1,2)","pathCost":70,"castEdgeShadows":true,"fillPercent":0.5,"tickerType":"Rare","building":{"preventDeterioration":true,"fullGraveGraphicData":{"texPath":"Things/Building/Misc/SarcophagusFull","graphicClass":"Graphic_Multi","drawSize":"(3,4)"},"fixedStorageSettings":{"filter":{"categories":{"li":"Corpses"}}},"defaultStorageSettings":{"filter":{"categories":{"li":"CorpsesHumanlike"},"specialFiltersToDisallow":{"li":"AllowCorpsesStranger"}}}},"statBases":{"WorkToMake":2500,"MaxHitPoints":250,"Flammability":1,"Beauty":10},"stuffCategories":{"li":["Woody","Metallic","Stony"]},"inspectorTabs":{"li":["ITab_Storage","ITab_Art"]},"comps":{"li":[{"compClass":"CompQuality"},{"$":{"Class":"CompProperties_Art"},"nameMaker":"ArtName_SarcophagusPlate","descriptionMaker":"ArtDescription_SarcophagusPlate","mustBeFullGrave":true,"canBeEnjoyedAsArt":false}]},"costStuffCount":60,"altitudeLayer":"Building","passability":"PassThroughOnly","blockWind":true,"terrainAffordanceNeeded":"Heavy","staticSunShadowHeight":0.3,"designationCategory":"Misc","designationHotkey":"Misc9"},{"$":{"ParentName":"BuildingBase"},"defName":"CryptosleepCasket","label":"cryptosleep casket","thingClass":"Building_CryptosleepCasket","graphicData":{"texPath":"Things/Building/Ship/ShipCryptosleepCasket","graphicClass":"Graphic_Multi","drawSize":"(2, 3)"},"researchPrerequisites":{"li":"Cryptosleep"},"altitudeLayer":"Building","passability":"PassThroughOnly","pathCost":70,"blockWind":true,"castEdgeShadows":true,"fillPercent":0.5,"statBases":{"WorkToMake":3200,"MaxHitPoints":250,"Flammability":1},"tickerType":"Normal","description":"A self-powered sarcophagus designed to keep a person in a state of suspended animation for many years.","size":"(1,2)","designationCategory":"Misc","hasInteractionCell":true,"interactionCellOffset":"(1,0,0)","costList":{"Steel":180,"Uranium":5,"Component":4},"comps":{"li":[{"$":{"Class":"CompProperties_Explosive"},"explosiveRadius":2.66,"explosiveDamageType":"Flame"},{"$":{"Class":"CompProperties_Breakdownable"}}]},"terrainAffordanceNeeded":"Heavy","staticSunShadowHeight":0.4},{"$":{"ParentName":"BuildingBase"},"defName":"AncientCryptosleepCasket","label":"ancient cryptosleep casket","thingClass":"Building_AncientCryptosleepCasket","graphicData":{"texPath":"Things/Building/Ship/ShipCryptosleepCasket","graphicClass":"Graphic_Multi","drawSize":"(2,3)"},"altitudeLayer":"Building","passability":"PassThroughOnly","pathCost":70,"blockWind":true,"castEdgeShadows":true,"fillPercent":0.5,"statBases":{"MaxHitPoints":250,"Flammability":1},"tickerType":"Normal","description":"This cryptosleep casket looks like it has been here for a very long time. Who knows what it might contain?","size":"(1,2)","hasInteractionCell":true,"interactionCellOffset":"(1,0,0)","costList":{"Steel":180,"Uranium":5},"killedLeavings":{"ChunkSlagSteel":1,"Steel":25,"Uranium":3},"comps":{"li":{"$":{"Class":"CompProperties_Explosive"},"explosiveRadius":2.66,"explosiveDamageType":"Flame"}},"leaveResourcesWhenKilled":false,"terrainAffordanceNeeded":"Heavy","staticSunShadowHeight":0.4},{"$":{"ParentName":"BuildingBase"},"defName":"MarriageSpot","label":"marriage spot","Description":"Designates a spot where marriage ceremonies will take place. Spectators can watch from either side.","thingClass":"Building_MarriageSpot","graphicData":{"texPath":"Things/Building/Misc/MarriageSpot","graphicClass":"Graphic_Single","drawSize":"(2,1)"},"AltitudeLayer":"FloorEmplacement","statBases":{"WorkToMake":0},"useHitPoints":false,"Size":"(2,1)","DesignationCategory":"Misc","Passability":"Standable","building":{"sowTag":"SupportPlantsOnly","canPlaceOverImpassablePlant":false},"designationHotkey":"Misc10"},{"$":{"ParentName":"BuildingBase"},"defName":"PartySpot","label":"party spot","Description":"Designates a spot where parties will be centered. Parties use an area around the spot.","graphicData":{"texPath":"Things/Building/Misc/PartySpot","graphicClass":"Graphic_Single"},"AltitudeLayer":"FloorEmplacement","statBases":{"WorkToMake":0},"useHitPoints":false,"DesignationCategory":"Misc","Passability":"Standable","building":{"sowTag":"SupportPlantsOnly","canPlaceOverImpassablePlant":false},"designationHotkey":"Misc11"}]}}