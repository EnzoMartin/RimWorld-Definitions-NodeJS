module.exports={"DefPackage-TraderKindDef":{"TraderKindDef":[{"defName":"Caravan_Outlander_BulkGoods","label":"bulk goods trader","stockGenerators":{"li":[{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Silver","countRange":{"min":1200,"max":2000}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Component","countRange":{"min":3,"max":15}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Steel","price":"Cheap","countRange":{"min":100,"max":350}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"WoodLog","price":"Cheap","countRange":{"min":100,"max":350}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Plasteel","price":"Cheap","countRange":{"min":50,"max":160}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Cloth","price":"Normal","countRange":{"min":-70,"max":120}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Gold","price":"Normal","countRange":{"min":-40,"max":120}},{"$":{"Class":"StockGenerator_Category"},"categoryDef":"Textiles","thingDefCountRange":{"min":1,"max":2},"price":"Cheap","totalPriceRange":{"min":400,"max":800}},{"$":{"Class":"StockGenerator_Category"},"categoryDef":"ResourcesRaw","thingDefCountRange":{"min":2,"max":4},"price":"Cheap","totalPriceRange":{"min":150,"max":320}},{"$":{"Class":"StockGenerator_Category"},"categoryDef":"FoodRaw","thingDefCountRange":{"min":2,"max":4},"price":"Cheap","totalPriceRange":{"min":150,"max":600}},{"$":{"Class":"StockGenerator_Category"},"categoryDef":"FoodMeals","thingDefCountRange":{"min":1,"max":2},"price":"Cheap","totalPriceRange":{"min":200,"max":1000}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Neutroamine","price":"Cheap","countRange":{"min":30,"max":150}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Chocolate","totalPriceRange":{"min":-150,"max":200}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Beer","totalPriceRange":{"min":-150,"max":200}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Medicine","price":"Expensive","countRange":{"min":3,"max":8}},{"$":{"Class":"StockGenerator_Tag"},"tradeTag":"Furniture","thingDefCountRange":{"min":0,"max":2},"countRange":{"min":-1,"max":2}},{"$":{"Class":"StockGenerator_Animals"},"checkTemperature":true,"maxWildness":0.7,"tradeTags":{"li":"StandardAnimal"},"kindCountRange":{"min":2,"max":4},"countRange":{"min":4,"max":12}},{"$":{"Class":"StockGenerator_Clothes"},"countRange":{"min":4,"max":10}},{"$":{"Class":"StockGenerator_Category"},"categoryDef":"Drugs","thingDefCountRange":{"min":2,"max":3},"totalPriceRange":{"min":1500,"max":2500}},{"$":{"Class":"StockGenerator_BuyWeirdOrganic"}},{"$":{"Class":"StockGenerator_MultiDef"},"thingDefs":{"li":["Chocolate","Kibble","Pemmican"]}}]}},{"defName":"Caravan_Outlander_CombatSupplier","label":"combat supplier","stockGenerators":{"li":[{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Silver","countRange":{"min":1200,"max":2000}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Component","countRange":{"min":-2,"max":7}},{"$":{"Class":"StockGenerator_WeaponsRanged"},"countRange":{"min":2,"max":4}},{"$":{"Class":"StockGenerator_Category"},"categoryDef":"WeaponsMelee","thingDefCountRange":{"min":2,"max":4},"totalPriceRange":{"min":300,"max":900}},{"$":{"Class":"StockGenerator_Armor"},"countRange":{"min":1,"max":2}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Medicine","countRange":{"min":4,"max":8}},{"$":{"Class":"StockGenerator_Tag"},"tradeTag":"BodyPartOrImplant","thingDefCountRange":{"min":-3,"max":3},"countRange":{"min":1,"max":2}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"ArtilleryShell","price":"Cheap","countRange":{"min":4,"max":10}},{"$":{"Class":"StockGenerator_Clothes"},"countRange":{"min":1,"max":4}},{"$":{"Class":"StockGenerator_BuyWeirdOrganic"}}]}},{"defName":"Caravan_Outlander_Exotic","label":"exotic goods trader","stockGenerators":{"li":[{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Silver","countRange":{"min":1500,"max":3500}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Component","countRange":{"min":6,"max":20}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Plasteel","price":"Normal","countRange":{"min":50,"max":150}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Gold","countRange":{"min":100,"max":200}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Neutroamine","countRange":{"min":25,"max":100}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"GlitterworldMedicine","countRange":{"min":-5,"max":4}},{"$":{"Class":"StockGenerator_Tag"},"tradeTag":"Exotic","thingDefCountRange":{"min":2,"max":4},"countRange":{"min":1,"max":2}},{"$":{"Class":"StockGenerator_Tag"},"tradeTag":"BodyPartOrImplant","thingDefCountRange":{"min":2,"max":4},"countRange":{"min":1,"max":2}},{"$":{"Class":"StockGenerator_Category"},"categoryDef":"Drugs","thingDefCountRange":{"min":2,"max":4},"totalPriceRange":{"min":400,"max":1200}},{"$":{"Class":"StockGenerator_Tag"},"tradeTag":"Artifact","thingDefCountRange":{"min":1,"max":2},"countRange":{"min":1,"max":1}},{"$":{"Class":"StockGenerator_Category"},"categoryDef":"Apparel","thingDefCountRange":{"min":1,"max":2},"totalPriceRange":{"min":400,"max":1500},"countRange":{"min":1,"max":2}},{"$":{"Class":"StockGenerator_Art"},"countRange":{"min":1,"max":2}},{"$":{"Class":"StockGenerator_Tag"},"tradeTag":"Television","thingDefCountRange":{"min":1,"max":2},"countRange":{"min":-2,"max":2}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Telescope","countRange":{"min":-2,"max":2}},{"$":{"Class":"StockGenerator_Tag"},"tradeTag":"Furniture","thingDefCountRange":{"min":0,"max":3},"countRange":{"min":-1,"max":2}},{"$":{"Class":"StockGenerator_Animals"},"checkTemperature":true,"tradeTags":{"li":"StandardAnimal"},"minWildness":0.6,"kindCountRange":{"min":1,"max":3},"countRange":{"min":2,"max":6}},{"$":{"Class":"StockGenerator_BuyWeirdOrganic"}},{"$":{"Class":"StockGenerator_BuyExpensiveSimple"}}]}},{"defName":"Caravan_Outlander_PirateMerchant","label":"pirate merchant","stockGenerators":{"li":[{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Silver","countRange":{"min":1000,"max":1800}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Component","countRange":{"min":-2,"max":4}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Gold","price":"Normal","countRange":{"min":-40,"max":120}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Neutroamine","price":"Expensive","countRange":{"min":-50,"max":50}},{"$":{"Class":"StockGenerator_Category"},"categoryDef":"Drugs","price":"Expensive","thingDefCountRange":{"min":2,"max":4},"totalPriceRange":{"min":1500,"max":3000}},{"$":{"Class":"StockGenerator_Slaves"},"countRange":{"min":2,"max":3}},{"$":{"Class":"StockGenerator_WeaponsRanged"},"countRange":{"min":-1,"max":1}},{"$":{"Class":"StockGenerator_Armor"},"countRange":{"min":-2,"max":1}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Beer","totalPriceRange":{"min":-100,"max":100}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"Medicine","price":"Expensive","countRange":{"min":2,"max":5}},{"$":{"Class":"StockGenerator_Tag"},"tradeTag":"BodyPartOrImplant","thingDefCountRange":{"min":-3,"max":3},"countRange":{"min":1,"max":2}},{"$":{"Class":"StockGenerator_Tag"},"tradeTag":"Artifact","thingDefCountRange":{"min":-4,"max":1},"countRange":{"min":1,"max":1}},{"$":{"Class":"StockGenerator_SingleDef"},"thingDef":"ArtilleryShell","countRange":{"min":-4,"max":7}},{"$":{"Class":"StockGenerator_Animals"},"checkTemperature":true,"tradeTags":{"li":"BadassAnimal"},"kindCountRange":{"min":1,"max":2},"countRange":{"min":2,"max":6}},{"$":{"Class":"StockGenerator_Clothes"},"countRange":{"min":1,"max":5}},{"$":{"Class":"StockGenerator_BuyWeirdOrganic"}}]}}]}}