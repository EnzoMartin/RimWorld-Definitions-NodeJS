module.exports={"Defs":{"ThingDef":[{"$":{"Abstract":"True","Name":"OrganicProductBase","ParentName":"ResourceBase"},"graphicData":{"graphicClass":"Graphic_Single"},"socialPropernessMatters":true,"statBases":{"MaxHitPoints":100,"Flammability":1,"DeteriorationRate":10},"tickerType":"Rare"},{"$":{"Abstract":"True","Name":"PlantFoodRawBase","ParentName":"OrganicProductBase"},"ingestible":{"preferability":"RawBad","tastesRaw":true,"nutrition":0.05,"ingestEffect":"EatVegetarian","ingestSound":"RawVegetable_Eat"},"thingCategories":{"li":"PlantFoodRaw"},"comps":{"li":{"$":{"Class":"CompProperties_FoodPoisoningChance"}}}},{"$":{"ParentName":"PlantFoodRawBase"},"defName":"RawPotatoes","label":"potatoes","description":"Raw potatoes.","graphicData":{"texPath":"Things/Item/Resource/PlantFoodRaw/Potatoes"},"statBases":{"MarketValue":1.9},"ingestible":{"foodType":"VegetableOrFruit"},"comps":{"li":{"$":{"Class":"CompProperties_Rottable"},"daysToRotStart":30}}},{"$":{"ParentName":"PlantFoodRawBase"},"defName":"RawRice","label":"rice","description":"Raw rice.","soundInteract":"Grain_Drop","soundDrop":"Grain_Drop","graphicData":{"texPath":"Things/Item/Resource/PlantFoodRaw/Rice"},"statBases":{"MarketValue":1.9},"ingestible":{"foodType":"Seeds"},"comps":{"li":{"$":{"Class":"CompProperties_Rottable"},"daysToRotStart":40}}},{"$":{"ParentName":"PlantFoodRawBase"},"defName":"RawAgave","label":"agave fruit","description":"Raw agave fruit.","graphicData":{"texPath":"Things/Item/Resource/PlantFoodRaw/AgaveFruit"},"statBases":{"MarketValue":2.1},"ingestible":{"foodType":"VegetableOrFruit"},"comps":{"li":{"$":{"Class":"CompProperties_Rottable"},"daysToRotStart":25}}},{"$":{"ParentName":"PlantFoodRawBase"},"defName":"RawCorn","label":"corn","description":"Raw corn.","soundInteract":"Grain_Drop","soundDrop":"Grain_Drop","graphicData":{"texPath":"Things/Item/Resource/PlantFoodRaw/Corn"},"statBases":{"MarketValue":2.1},"ingestible":{"foodType":"VegetableOrFruit"},"comps":{"li":{"$":{"Class":"CompProperties_Rottable"},"daysToRotStart":60}}},{"$":{"ParentName":"PlantFoodRawBase"},"defName":"RawBerries","label":"berries","description":"Assorted berries. Nice to eat, even when raw.","graphicData":{"texPath":"Things/Item/Resource/PlantFoodRaw/Berries"},"statBases":{"MarketValue":2.1},"comps":{"li":{"$":{"Class":"CompProperties_Rottable"},"daysToRotStart":14}},"ingestible":{"preferability":"RawTasty","tastesRaw":false,"foodType":"VegetableOrFruit"}},{"$":{"ParentName":"OrganicProductBase","Name":"RoughPlantBase","Abstract":"True"},"ingestible":{"foodType":"Plant","preferability":"RawBad","nutrition":0.05}},{"$":{"ParentName":"RoughPlantBase"},"defName":"Hay","label":"hay","description":"Nutrient-rich grasses and shoots, harvested and compacted for storage. Hay is good animal feed, but inedible for humans.","stackLimit":200,"graphicData":{"texPath":"Things/Item/Resource/PlantFoodRaw/Hay","graphicClass":"Graphic_StackCount"},"statBases":{"MarketValue":0.6},"comps":{"li":{"$":{"Class":"CompProperties_Rottable"},"daysToRotStart":60}},"thingCategories":{"li":"Foods"}},{"$":{"ParentName":"RoughPlantBase"},"defName":"RawHops","label":"hops","description":"Raw hops. A flavoring and preserving agent that is necessary for making beer.","graphicData":{"texPath":"Things/Item/Resource/PlantFoodRaw/Hops"},"statBases":{"MarketValue":2},"comps":{"li":{"$":{"Class":"CompProperties_Rottable"},"daysToRotStart":30,"rotDestroys":true}},"thingCategories":{"li":"PlantMatter"}},{"$":{"ParentName":"RoughPlantBase"},"defName":"PsychoidLeaves","label":"psychoid leaves","description":"Raw cut leaves of a psychoid plant.","graphicData":{"texPath":"Things/Item/Resource/PlantFoodRaw/PsychoidLeaves"},"statBases":{"MarketValue":1},"comps":{"li":{"$":{"Class":"CompProperties_Rottable"},"daysToRotStart":30,"rotDestroys":true}},"thingCategories":{"li":"PlantMatter"}},{"$":{"ParentName":"RoughPlantBase"},"defName":"SmokeleafLeaves","label":"smokeleaf leaves","description":"Raw cut leaves of a smokeleaf plant. Can be rolled into smokeable joint at a crafting spot.","graphicData":{"texPath":"Things/Item/Resource/PlantFoodRaw/SmokeleafLeaves"},"statBases":{"MarketValue":1},"comps":{"li":{"$":{"Class":"CompProperties_Rottable"},"daysToRotStart":30,"rotDestroys":true}},"thingCategories":{"li":"PlantMatter"}}]}}