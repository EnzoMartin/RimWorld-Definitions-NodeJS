module.exports={"IncidentDefs":{"IncidentDef":[{"defName":"ShipChunkDrop","label":"ship chunk drop","workerClass":"IncidentWorker_ShipChunkDrop","category":"ShipChunkDrop"},{"defName":"OrbitalTraderArrival","label":"orbital trader arrival","workerClass":"IncidentWorker_OrbitalTraderArrival","category":"OrbitalVisitor","baseChance":3},{"defName":"TraderCaravanArrival","label":"trader caravan arrival","workerClass":"IncidentWorker_TraderCaravanArrival","category":"AllyArrival","baseChance":4},{"defName":"VisitorGroup","label":"visitor group","workerClass":"IncidentWorker_VisitorGroup","category":"AllyArrival","baseChance":4,"pointsScaleable":true},{"defName":"TravelerGroup","label":"traveler group","workerClass":"IncidentWorker_TravelerGroup","category":"AllyArrival","baseChance":4,"pointsScaleable":true},{"defName":"ResourcePodCrash","label":"resource pod crash","workerClass":"IncidentWorker_ResourcePodCrash","baseChance":4},{"defName":"RaidFriendly","label":"friendly raid","workerClass":"IncidentWorker_RaidFriendly","baseChance":3,"pointsScaleable":true},{"defName":"WandererJoin","label":"wanderer join","workerClass":"IncidentWorker_WandererJoin","baseChance":0.4,"populationEffect":"Increase"},{"defName":"RefugeePodCrash","label":"refugee pod crash","workerClass":"IncidentWorker_RefugeePodCrash","baseChance":1.5,"populationEffect":"Increase"},{"defName":"PsychicSoothe","label":"psychic soothe","workerClass":"IncidentWorker_PsychicSoothe","baseChance":1,"minRefireDays":15,"durationDays":{"min":0.75,"max":1.75}},{"defName":"SelfTame","label":"self-tame","workerClass":"IncidentWorker_SelfTame","baseChance":0.75},{"defName":"FarmAnimalsWanderIn","label":"farm animals wander in","workerClass":"IncidentWorker_FarmAnimalsWanderIn","baseChance":0.2}]}}