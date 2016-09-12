module.exports={"Defs":{"BiomeDef":[{"defName":"Ocean","label":"ocean","description":"Open ocean. Great for fish - not so great for you.","workerClass":"BiomeWorker_Ocean","canBuildBase":false,"hideTerrain":true,"baseColor":"(0.125, 0.369, 0.560)"},{"defName":"TemperateForest","label":"temperate forest","description":"A friendly biome dominated by forests of deciduous trees interspersed with fertile clearings. Many species of animals move around in the trees and on the plains.","workerClass":"BiomeWorker_TemperateForest","animalDensity":5.5,"plantDensity":0.83,"baseColor":"(0.341, 0.525, 0.180)","soundsAmbient":{"li":"AmbientNightInsects_Standard"},"diseaseMtbDays":45,"diseases":{"li":[{"diseaseInc":"Disease_Flu","commonality":100},{"diseaseInc":"Disease_Plague","commonality":100},{"diseaseInc":"Disease_Malaria","commonality":100},{"diseaseInc":"Disease_FibrousMechanites","commonality":30},{"diseaseInc":"Disease_SensoryMechanites","commonality":30},{"diseaseInc":"Disease_GutWorms","commonality":50},{"diseaseInc":"Disease_MuscleParasites","commonality":50}]},"terrainsByFertility":{"li":[{"terrain":"Soil","min":-999,"max":0.87},{"terrain":"SoilRich","min":0.87,"max":999}]},"terrainPatchMakers":{"li":{"perlinFrequency":0.015,"thresholds":{"li":[{"terrain":"SoilRich","min":0.73,"max":0.8},{"terrain":"Mud","min":0.8,"max":0.93},{"terrain":"WaterShallow","min":0.93,"max":1.06},{"terrain":"WaterDeep","min":1.06,"max":999}]}}},"baseWeatherCommonalities":{"Clear":18,"Fog":1,"Rain":2,"DryThunderstorm":1,"RainyThunderstorm":1,"FoggyRain":1,"SnowGentle":4,"SnowHard":4},"wildPlants":{"PlantRaspberry":0.1,"PlantBush":0.7,"PlantGrass":6.9,"PlantDandelion":0.8,"PlantTreeOak":0.5,"PlantTreePoplar":0.5},"wildAnimals":{"Gazelle":0.05,"Ibex":0.3,"Deer":0.5,"Muffalo":0.2,"Alpaca":0.1,"Squirrel":1,"WildBoar":0.5,"Boomrat":0.25,"Tortoise":0.4,"Hare":1,"Boomalope":0.2,"Emu":0.1,"Turkey":0.5,"Ostrich":0.1,"Rat":0.8,"Raccoon":0.4,"Megatherium":0.04,"Warg":0.03,"GrizzlyBear":0.06,"Cougar":0.02,"Lynx":0.01,"WolfTimber":0.09,"FoxRed":0.06},"allowedPackAnimals":{"li":"Muffalo"}},{"defName":"TropicalRainforest","label":"tropical rainforest","description":"A thick, moist jungle. Dense overgrowth and aggressive wildlife make construction and survival difficult.","workerClass":"BiomeWorker_TropicalRainforest","animalDensity":7.2,"plantDensity":1,"baseColor":"(0, 0.372, 0.035)","soundsAmbient":{"li":["AmbientNightInsects_Jungle","AmbientDayInsects_Jungle"]},"diseaseMtbDays":30,"diseases":{"li":[{"diseaseInc":"Disease_Flu","commonality":100},{"diseaseInc":"Disease_Plague","commonality":100},{"diseaseInc":"Disease_Malaria","commonality":160},{"diseaseInc":"Disease_SleepingSickness","commonality":140},{"diseaseInc":"Disease_FibrousMechanites","commonality":30},{"diseaseInc":"Disease_SensoryMechanites","commonality":30},{"diseaseInc":"Disease_GutWorms","commonality":80},{"diseaseInc":"Disease_MuscleParasites","commonality":80}]},"terrainsByFertility":{"li":[{"terrain":"Soil","min":-999,"max":0.87},{"terrain":"SoilRich","min":0.87,"max":999}]},"terrainPatchMakers":{"li":[{"perlinFrequency":0.04,"thresholds":{"li":{"terrain":"MarshyTerrain","min":0.7,"max":999}}},{"perlinFrequency":0.035,"thresholds":{"li":[{"terrain":"MarshyTerrain","min":0.64,"max":0.87},{"terrain":"Marsh","min":0.87,"max":999}]}}]},"baseWeatherCommonalities":{"Clear":18,"Fog":1,"Rain":2,"DryThunderstorm":0.3,"RainyThunderstorm":1.7,"FoggyRain":1,"SnowGentle":4,"SnowHard":4},"wildPlants":{"PlantRaspberry":0.1,"PlantBush":0.7,"PlantTallGrass":6.9,"PlantDandelion":0.8,"PlantTreeTeak":0.3,"PlantTreeCecropia":0.6},"wildAnimals":{"Elephant":0.05,"Monkey":0.5,"WildBoar":0.5,"Tortoise":0.3,"Chinchilla":0.3,"Boomalope":0.35,"Capybara":0.35,"Alpaca":0.25,"Cassowary":0.35,"Turkey":0.1,"Emu":0.1,"Rat":0.5,"Cobra":0.12,"Panther":0.085},"allowedPackAnimals":{"li":"Muffalo"}}]}}