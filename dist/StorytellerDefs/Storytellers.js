module.exports={"StorytellerDefs":{"StorytellerDef":[{"defName":"Cassandra","label":"Cassandra Classic","description":"Cassandra creates story events on a steadily-increasing curve of challenge and tension.","portraitLarge":"UI/HeroArt/Storytellers/CassandraClassic","portraitTiny":"UI/HeroArt/Storytellers/CassandraClassicTiny","listOrder":20,"desiredPopulationMin":4,"desiredPopulationMax":13,"desiredPopulationCritical":18,"comps":{"li":[{"$":{"Class":"StorytellerCompProperties_ClassicIntro"}},{"$":{"Class":"StorytellerCompProperties_ThreatCycle"},"minDaysPassed":5,"mtbDaysThreatSmall":3.75,"mtbDaysThreatBig":1.25,"threatCycleLength":9.2,"minDaysBetweenThreatBigs":2.1},{"$":{"Class":"StorytellerCompProperties_CategoryMTB"},"minDaysPassed":5,"category":"Misc","mtbDays":1.6},{"$":{"Class":"StorytellerCompProperties_AllyInteraction"},"minDaysPassed":5,"baseMtb":6},{"$":{"Class":"StorytellerCompProperties_SingleMTB"},"incident":"OrbitalTraderArrival","mtbDays":13},{"$":{"Class":"StorytellerCompProperties_ShipChunkDrop"}},{"$":{"Class":"StorytellerCompProperties_Disease"},"minDaysPassed":5}]}},{"defName":"Phoebe","label":"Phoebe Chillax","description":"Phoebe gives lots of time between disasters to relax and build your colony. But beware - at high difficulties, she'll hit as hard as anyone.","portraitLarge":"UI/HeroArt/Storytellers/PhoebeFriendly","portraitTiny":"UI/HeroArt/Storytellers/PhoebeFriendlyTiny","listOrder":30,"desiredPopulationMin":4,"desiredPopulationMax":13,"desiredPopulationCritical":18,"comps":{"li":[{"$":{"Class":"StorytellerCompProperties_ClassicIntro"}},{"$":{"Class":"StorytellerCompProperties_ThreatCycle"},"minDaysPassed":5,"mtbDaysThreatSmall":8,"mtbDaysThreatBig":1.25,"threatCycleLength":17,"minDaysBetweenThreatBigs":12.5},{"$":{"Class":"StorytellerCompProperties_CategoryMTB"},"minDaysPassed":5,"category":"Misc","mtbDays":2.5},{"$":{"Class":"StorytellerCompProperties_AllyInteraction"},"minDaysPassed":5,"baseMtb":6},{"$":{"Class":"StorytellerCompProperties_SingleMTB"},"incident":"OrbitalTraderArrival","mtbDays":13},{"$":{"Class":"StorytellerCompProperties_ShipChunkDrop"}},{"$":{"Class":"StorytellerCompProperties_Disease"},"minDaysPassed":5}]}},{"defName":"Randy","label":"Randy Random","description":"Randy doesn't follow rules. He'll generate random events, and he doesn't care if they make a story of triumph or utter hopelessness. It's all drama to him.","portraitLarge":"UI/HeroArt/Storytellers/RandyRandom","portraitTiny":"UI/HeroArt/Storytellers/RandyRandomTiny","listOrder":40,"desiredPopulationMin":4,"desiredPopulationMax":13,"desiredPopulationCritical":50,"comps":{"li":[{"$":{"Class":"StorytellerCompProperties_RandomMain"},"minDaysPassed":1,"incidentMtb":0.87,"maxThreatBigIntervalDays":13,"categoryWeights":{"Misc":5.5,"OrbitalVisitor":1,"AllyArrival":1,"ShipChunkDrop":0.5,"ThreatSmall":1,"ThreatBig":1}},{"$":{"Class":"StorytellerCompProperties_Disease"},"minDaysPassed":0}]}},{"defName":"Tutor","label":"Tutor Hidden","desiredPopulationMin":4,"desiredPopulationMax":13,"desiredPopulationCritical":50,"listVisible":false,"listOrder":1000,"tutorialMode":true,"disableAdaptiveTraining":true,"disableAlerts":true,"disablePermadeath":true,"forcedDifficulty":"VeryEasy","comps":"\r\n    "}]}}