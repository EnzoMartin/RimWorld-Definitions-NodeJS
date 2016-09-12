module.exports={"Defs":{"RaidStrategyDef":[{"defName":"ImmediateAttack","workerClass":"RaidStrategyWorker_ImmediateAttack","letterLabelEnemy":"Raid","arrivalTextEnemy":"They are attacking immediately.","letterLabelFriendly":"Friendlies","arrivalTextFriendly":"They are moving in to help you immediately.","pointsFactor":0.9,"selectionChance":0.75,"pawnsCanBringFood":false,"arriveModes":{"li":["EdgeDrop","EdgeWalkIn","CenterDrop"]}},{"defName":"ImmediateAttackSmart","workerClass":"RaidStrategyWorker_ImmediateAttackSmart","letterLabelEnemy":"Raid","arrivalTextEnemy":"They are attacking immediately.\\n\\nWatch out - they appear to be unusually clever with their tactics.","letterLabelFriendly":"Friendlies","arrivalTextFriendly":"They are moving in to help you immediately.","pointsFactor":0.85,"selectionChance":0.25,"pawnsCanBringFood":false,"arriveModes":{"li":["EdgeDrop","EdgeWalkIn","CenterDrop"]}},{"defName":"StageThenAttack","workerClass":"RaidStrategyWorker_StageThenAttack","letterLabelEnemy":"Raid","arrivalTextEnemy":"They will prepare for a while, then attack.\\n\\nPrepare a defense or attack them pre-emptively.","letterLabelFriendly":"Friendlies","arrivalTextFriendly":"They will prepare for a while before moving in to help you.","pointsFactor":1,"selectionChance":1,"pawnsCanBringFood":false,"arriveModes":{"li":["EdgeDrop","EdgeWalkIn"]}},{"defName":"ImmediateAttackSappers","workerClass":"RaidStrategyWorker_ImmediateAttackSappers","letterLabelEnemy":"Raid","arrivalTextEnemy":"It looks like they want to use sappers to tunnel around your defenses.","pointsFactor":0.8,"selectionChance":2,"minPawns":2,"minDaysPassed":30,"pawnsCanBringFood":false,"arriveModes":{"li":["EdgeDrop","EdgeWalkIn"]}},{"defName":"Siege","workerClass":"RaidStrategyWorker_Siege","letterLabelEnemy":"Siege","arrivalTextEnemy":"It looks like they want to besiege the colony and pound you with artillery from a distance. You can try to wait them out - or go get them.","letterLabelFriendly":"Friendlies","arrivalTextFriendly":"It looks like they want to use siege tactics to help you.","pointsFactor":0.6,"selectionChance":1.1,"minPawns":4,"minDaysPassed":15,"arriveModes":{"li":["EdgeDrop","EdgeWalkIn"]}}]}}