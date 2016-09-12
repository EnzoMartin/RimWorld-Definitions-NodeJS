module.exports={"Plants":{"ThingDef":[{"$":{"ParentName":"PlantBase"},"defName":"PlantPotato","label":"potato plant","description":"A simple, highly nutritious tuber. Grows well even in somewhat poor soil. Harvests quickly. A strong, versatile crop.","statBases":{"MaxHitPoints":85,"Beauty":1},"graphicData":{"texPath":"Things/Plant/PotatoPlant","graphicClass":"Graphic_Random"},"selectable":true,"pathCost":10,"ingestible":{"nutrition":0.2},"plant":{"dieIfLeafless":true,"shootsSeeds":false,"harvestTag":"Standard","harvestedThingDef":"RawPotatoes","harvestDestroys":true,"harvestYield":8,"sowTags":{"li":["Ground","Hydroponic"]},"topWindExposure":0.1,"growDays":3.094,"fertilityFactorGrowthRate":0.4,"visualSizeRange":{"min":0.3,"max":1.05}}},{"$":{"ParentName":"PlantBase"},"defName":"PlantCorn","label":"corn plant","description":"A large grain plant which produces ears of delicious yellow seeds. Takes a relatively long time to grow, but yields lots of food, and takes a long time to spoil. Needs fertile soil to grow well.","statBases":{"MaxHitPoints":150,"Beauty":1},"graphicData":{"texPath":"Things/Plant/CornPlant","graphicClass":"Graphic_Random"},"selectable":true,"pathCost":12,"ingestible":{"nutrition":0.3},"plant":{"dieIfLeafless":true,"shootsSeeds":false,"harvestTag":"Standard","harvestedThingDef":"RawCorn","harvestDestroys":true,"harvestYield":19,"sowTags":{"li":"Ground"},"topWindExposure":0.35,"growDays":6.84,"fertilityFactorGrowthRate":1,"visualSizeRange":{"min":0.3,"max":1.4}}},{"$":{"ParentName":"PlantBase"},"defName":"PlantRice","label":"rice plant","description":"A low grain plant that thrives in rich soil and yields food fast, but is not nice to eat uncooked.","statBases":{"MaxHitPoints":85,"Beauty":1},"graphicData":{"texPath":"Things/Plant/RicePlant","graphicClass":"Graphic_Random"},"selectable":true,"pathCost":10,"ingestible":{"nutrition":0.18},"plant":{"dieIfLeafless":true,"shootsSeeds":false,"maxMeshCount":4,"harvestTag":"Standard","harvestedThingDef":"RawRice","harvestDestroys":true,"harvestYield":6,"sowTags":{"li":["Ground","Hydroponic"]},"topWindExposure":0.1,"growDays":2.445,"fertilityFactorGrowthRate":1,"visualSizeRange":{"min":0.3,"max":0.8}}},{"$":{"ParentName":"PlantBase"},"defName":"PlantStrawberry","label":"strawberry plant","description":"A fragile but tasty fruit. Delicious even when raw.","statBases":{"MaxHitPoints":85,"Beauty":1},"graphicData":{"texPath":"Things/Plant/StrawberryPlant","graphicClass":"Graphic_Random"},"selectable":true,"pathCost":10,"ingestible":{"nutrition":0.2},"plant":{"dieIfLeafless":true,"shootsSeeds":false,"harvestTag":"Standard","harvestedThingDef":"RawBerries","harvestDestroys":true,"harvestYield":6,"sowMinSkill":5,"sowTags":{"li":["Ground","Hydroponic"]},"topWindExposure":0.1,"growDays":2.65,"fertilityFactorGrowthRate":0.6,"visualSizeRange":{"min":0.3,"max":1.05}}},{"$":{"ParentName":"PlantBase"},"defName":"PlantHaygrass","label":"haygrass","description":"A mixture of nutrient-rich grasses which yield large amounts of hay. Hay is edible for animals, but not humans.","statBases":{"MaxHitPoints":85,"Beauty":1},"graphicData":{"texPath":"Things/Plant/Haygrass","graphicClass":"Graphic_Random"},"selectable":true,"pathCost":5,"ingestible":{"nutrition":0.2},"plant":{"dieIfLeafless":true,"shootsSeeds":false,"maxMeshCount":4,"harvestTag":"Standard","harvestedThingDef":"Hay","harvestDestroys":true,"harvestYield":18,"sowTags":{"li":"Ground"},"topWindExposure":0.1,"growDays":5,"fertilityFactorGrowthRate":1,"visualSizeRange":{"min":0.3,"max":0.8}}},{"$":{"ParentName":"PlantBase"},"defName":"PlantCotton","label":"cotton plant","description":"Yields cotton, a fine plant fiber used to make cloth.","statBases":{"MaxHitPoints":85,"Beauty":1},"graphicData":{"texPath":"Things/Plant/CottonPlant","graphicClass":"Graphic_Random"},"selectable":true,"pathCost":10,"ingestible":{"nutrition":0.2},"plant":{"dieIfLeafless":true,"shootsSeeds":false,"harvestTag":"Standard","harvestedThingDef":"Cloth","harvestDestroys":true,"harvestYield":5,"sowTags":{"li":["Ground","Hydroponic"]},"topWindExposure":0.1,"growDays":2.705,"fertilityFactorGrowthRate":0.4,"visualSizeRange":{"min":0.3,"max":1.05}}},{"$":{"ParentName":"PlantBase"},"defName":"PlantDevilstrand","label":"devilstrand","description":"This fragile mushroom was genetically engineered to produce a silk net of the highest grade. Long rumored to have mystical properties, it owes its name to the greed it inspires in people.","statBases":{"MaxHitPoints":85,"Beauty":-1},"graphicData":{"texPath":"Things/Plant/Devilstrand","graphicClass":"Graphic_Random"},"selectable":true,"pathCost":10,"ingestible":{"nutrition":0.05},"plant":{"dieIfLeafless":true,"shootsSeeds":false,"harvestTag":"Standard","harvestedThingDef":"DevilstrandCloth","harvestDestroys":true,"harvestYield":3,"sowTags":{"li":"Ground"},"sowMinSkill":10,"sowResearchPrerequisites":{"li":"Devilstrand"},"topWindExposure":0.1,"growDays":22.5,"fertilityFactorGrowthRate":0.4,"visualSizeRange":{"min":0.3,"max":1}}},{"$":{"ParentName":"PlantBase"},"defName":"PlantHealroot","label":"healroot","description":"A slow-growing plant which yields herbal medicine when harvested.\\n\\nHealroot was selectively bred for centuries by settlers. It is sometimes also called \"healer's hand\" by tribespeople - a nickname it owes to its five major medicinal virtues.","statBases":{"MaxHitPoints":85,"Beauty":1},"graphicData":{"texPath":"Things/Plant/Healroot","graphicClass":"Graphic_Random"},"selectable":true,"pathCost":10,"ingestible":{"nutrition":0.05},"plant":{"dieIfLeafless":true,"shootsSeeds":false,"harvestTag":"Standard","harvestedThingDef":"HerbalMedicine","harvestDestroys":true,"harvestYield":1,"sowMinSkill":8,"sowTags":{"li":["Ground","Hydroponic"]},"topWindExposure":0.1,"growDays":6.5,"fertilityFactorGrowthRate":0.4,"visualSizeRange":{"min":0.3,"max":1}}},{"$":{"ParentName":"PlantBase"},"defName":"PlantHops","label":"hop plant","description":"A flowering plant that yields hops, an essential ingredient in beer.","statBases":{"MaxHitPoints":85,"Beauty":1},"graphicData":{"texPath":"Things/Plant/HopsPlant","graphicClass":"Graphic_Random"},"selectable":true,"pathCost":10,"ingestible":{"nutrition":0.2},"plant":{"dieIfLeafless":true,"shootsSeeds":false,"harvestTag":"Standard","harvestedThingDef":"RawHops","harvestDestroys":true,"harvestYield":8,"sowMinSkill":7,"sowTags":{"li":["Ground","Hydroponic"]},"topWindExposure":0.1,"growDays":2.705,"fertilityFactorGrowthRate":0.4,"visualSizeRange":{"min":0.3,"max":1.05}}},{"$":{"ParentName":"PlantBase"},"defName":"PlantPsychoid","label":"psychoid plant","description":"A leafy plant. Its leaves can be refined into various forms of the psychoid drug.","statBases":{"MaxHitPoints":85,"Beauty":1},"graphicData":{"texPath":"Things/Plant/PsychoidPlant","graphicClass":"Graphic_Random"},"selectable":true,"pathCost":10,"ingestible":{"nutrition":0.1},"plant":{"dieIfLeafless":true,"shootsSeeds":false,"harvestTag":"Standard","harvestedThingDef":"PsychoidLeaves","harvestDestroys":true,"harvestYield":10,"sowMinSkill":6,"sowTags":{"li":["Ground","Hydroponic"]},"topWindExposure":0.1,"growDays":6.84,"fertilityFactorGrowthRate":1,"visualSizeRange":{"min":0.3,"max":1}}},{"$":{"ParentName":"PlantBase"},"defName":"PlantSmokeleaf","label":"smokeleaf plant","description":"A leafy plant cultivated for its psychological effects. Smokeleaf leaves can be prepared into joints at the crafting spot.","statBases":{"MaxHitPoints":85,"Beauty":1},"graphicData":{"texPath":"Things/Plant/SmokeleafPlant","graphicClass":"Graphic_Random"},"selectable":true,"pathCost":10,"ingestible":{"nutrition":0.1},"plant":{"dieIfLeafless":true,"shootsSeeds":false,"harvestTag":"Standard","harvestedThingDef":"SmokeleafLeaves","harvestDestroys":true,"harvestYield":11,"sowMinSkill":4,"sowTags":{"li":["Ground","Hydroponic"]},"topWindExposure":0.1,"growDays":6.84,"fertilityFactorGrowthRate":1,"visualSizeRange":{"min":0.3,"max":1}}}]}}