module.exports={"Defs":{"BiomeDef":[{"defName":"BorealForest","label":"boreal forest","description":"Northern forests of coniferous trees. Despite the harsh winters, boreal forests sustain a diverse population of small and large animals.","workerClass":"BiomeWorker_BorealForest","implemented":true,"animalDensity":3,"plantDensity":0.5,"baseColor":"(0.30, 0.60, 0.55)","soundsAmbient":{"li":"AmbientNightInsects_Standard"},"diseaseMtbDays":50,"diseases":{"li":[{"diseaseInc":"Disease_Flu","commonality":100},{"diseaseInc":"Disease_Plague","commonality":100},{"diseaseInc":"Disease_FibrousMechanites","commonality":30},{"diseaseInc":"Disease_SensoryMechanites","commonality":30},{"diseaseInc":"Disease_GutWorms","commonality":50},{"diseaseInc":"Disease_MuscleParasites","commonality":50}]},"terrainsByFertility":{"li":[{"terrain":"Soil","min":-999,"max":0.87},{"terrain":"SoilRich","min":0.87,"max":999}]},"terrainPatchMakers":{"li":{"perlinFrequency":0.015,"thresholds":{"li":[{"terrain":"MossyTerrain","min":0,"max":0.32},{"terrain":"Marsh","min":0.32,"max":0.76},{"terrain":"WaterShallow","min":0.76,"max":0.98},{"terrain":"WaterDeep","min":0.98,"max":999}]}}},"baseWeatherCommonalities":{"Clear":18,"Fog":1,"Rain":2,"DryThunderstorm":1,"RainyThunderstorm":1,"FoggyRain":1,"SnowGentle":4,"SnowHard":4},"wildPlants":{"PlantRaspberry":2.2,"PlantBush":3,"PlantGrass":8,"PlantMoss":4,"PlantTreePoplar":1.2,"PlantTreePine":5,"PlantTreeBirch":1.5},"wildAnimals":{"Elk":0.5,"Ibex":0.4,"Caribou":0.5,"Muffalo":0.5,"Squirrel":1,"WildBoar":0.5,"Hare":1,"Husky":0.01,"Turkey":0.2,"Deer":0.03,"Rat":0.8,"Megatherium":0.03,"Raccoon":0.4,"Warg":0.02,"GrizzlyBear":0.03,"Cougar":0.02,"Lynx":0.02,"WolfTimber":0.14,"WolfArctic":0.03,"FoxArctic":0.04,"FoxRed":0.04},"allowedPackAnimals":{"li":"Muffalo"}},{"defName":"Tundra","label":"tundra","description":"These mostly-frozen plains bear almost no trees and little vegetation. There are a few small animals interspesed with large herds of migratory grazers and their predators.","workerClass":"BiomeWorker_Tundra","implemented":true,"animalDensity":1,"plantDensity":0.25,"baseColor":"(0.36, 0.73, 0.67)","soundsAmbient":{"li":"AmbientNightInsects_Standard"},"diseaseMtbDays":80,"diseases":{"li":[{"diseaseInc":"Disease_Flu","commonality":100},{"diseaseInc":"Disease_Plague","commonality":80},{"diseaseInc":"Disease_FibrousMechanites","commonality":40},{"diseaseInc":"Disease_SensoryMechanites","commonality":40},{"diseaseInc":"Disease_GutWorms","commonality":30},{"diseaseInc":"Disease_MuscleParasites","commonality":30}]},"terrainsByFertility":{"li":[{"terrain":"Soil","min":-999,"max":0.87},{"terrain":"SoilRich","min":0.87,"max":999}]},"terrainPatchMakers":{"li":{"perlinFrequency":0.015,"thresholds":{"li":[{"terrain":"MossyTerrain","min":0.64,"max":0.83},{"terrain":"Marsh","min":0.83,"max":999}]}}},"baseWeatherCommonalities":{"Clear":18,"Fog":1,"Rain":2,"DryThunderstorm":1,"RainyThunderstorm":1,"FoggyRain":1,"SnowGentle":4,"SnowHard":4},"wildPlants":{"PlantRaspberry":0.01,"PlantBush":0.03,"PlantAstragalus":0.01,"PlantDandelion":0.01,"PlantGrass":0.3,"PlantMoss":0.05,"PlantTreePine":0.01,"PlantTreeBirch":0.01},"wildAnimals":{"Elk":0.25,"Ibex":0.1,"Caribou":0.75,"Muffalo":0.5,"Squirrel":1,"Hare":1,"Snowhare":1,"Husky":0.01,"Rat":0.4,"Megatherium":0.02,"Warg":0.03,"PolarBear":0.01,"GrizzlyBear":0.02,"Cougar":0.01,"Lynx":0.02,"WolfTimber":0.04,"WolfArctic":0.12,"FoxArctic":0.04,"FoxRed":0.01},"allowedPackAnimals":{"li":"Muffalo"}},{"defName":"IceSheet","label":"ice sheet","description":"The surface is covered with sheets of ice which can be kilometers thick. There is no access to soil, so there are no plants. The only animals seen here are migrating to somewhere else - or badly lost.","workerClass":"BiomeWorker_IceSheet","animalDensity":0.4,"plantDensity":0,"baseColor":"(0.48, 0.765, 0.882)","soundsAmbient":{"li":"AmbientWind_Desolate"},"diseaseMtbDays":90,"diseases":{"li":[{"diseaseInc":"Disease_Flu","commonality":100},{"diseaseInc":"Disease_Plague","commonality":80},{"diseaseInc":"Disease_FibrousMechanites","commonality":30},{"diseaseInc":"Disease_SensoryMechanites","commonality":30}]},"terrainsByFertility":{"li":{"terrain":"Ice","min":-999,"max":999}},"baseWeatherCommonalities":{"Clear":12,"Fog":10,"Rain":0,"DryThunderstorm":2,"RainyThunderstorm":0,"FoggyRain":4,"SnowGentle":20,"SnowHard":40},"wildPlants":{"PlantGrass":6.9},"wildAnimals":{"Snowhare":1,"Muffalo":0.08,"Megatherium":0.003,"PolarBear":0.08,"Lynx":0.01,"WolfArctic":0.02,"FoxArctic":0.02},"allowedPackAnimals":{"li":"Muffalo"}}]}}