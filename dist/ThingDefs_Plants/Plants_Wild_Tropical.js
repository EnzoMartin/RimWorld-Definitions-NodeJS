module.exports={"Defs":{"ThingDef":[{"$":{"ParentName":"PlantBase"},"defName":"PlantTallGrass","label":"tall grass","description":"Wild tall grass. Significantly slows down anyone moving over it.","statBases":{"MaxHitPoints":90,"Beauty":0},"pathCost":18,"graphicData":{"texPath":"Things/Plant/Grass","graphicClass":"Graphic_Random"},"hideAtSnowDepth":0.5,"ingestible":{"nutrition":0.18},"plant":{"harvestWork":60,"fertilityMin":0.05,"maxMeshCount":9,"visualSizeRange":{"min":0.7,"max":0.85},"growDays":3,"topWindExposure":0.4,"seedEmitMTBDays":3.5,"fertilityFactorGrowthRate":0.9,"fertilityFactorPlantChance":0.9}},{"$":{"ParentName":"TreeBase"},"defName":"PlantTreeTeak","label":"teak tree","description":"A very strong hardwood tree, used in ancient times to build sailing ships.","graphicData":{"texPath":"Things/Plant/TreeTeak","graphicClass":"Graphic_Random"},"statBases":{"Beauty":5},"plant":{"leaflessGraphicPath":"Things/Plant/TreeOak_Leafless","growDays":32.5,"harvestWork":1200,"harvestYield":60,"visualSizeRange":{"min":1.3,"max":2.4}}},{"$":{"ParentName":"TreeBase"},"defName":"PlantTreeCecropia","label":"cecropia tree","description":"One of the most common rainforest trees. Grows very fast, but yields little usable wood.","graphicData":{"texPath":"Things/Plant/TreeCecropia","graphicClass":"Graphic_Random"},"statBases":{"Beauty":2},"plant":{"growDays":14,"harvestWork":550,"harvestYield":20},"ingestible":{"nutrition":1.2}}]}}