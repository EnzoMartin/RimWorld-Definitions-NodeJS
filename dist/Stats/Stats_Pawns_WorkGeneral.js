module.exports={"Defs":{"StatDef":[{"defName":"WorkSpeedGlobal","label":"global work speed","description":"A multiplier on someone's speed at doing any work.","category":"PawnWork","displayPriorityInCategory":100,"defaultBaseValue":1,"toStringStyle":"PercentZero","parts":{"li":{"$":{"Class":"StatPart_Mood"},"curve":{"points":{"li":["(0.60,1.00)","(1.00,1.20)"]}}}}},{"defName":"MiningSpeed","label":"mining speed","description":"A multiplier on the speed at which this person mines rock.","category":"PawnWork","defaultBaseValue":1,"toStringStyle":"PercentZero","statFactors":{"li":"WorkSpeedGlobal"},"skillNeedFactors":{"li":{"$":{"Class":"SkillNeed_BaseBonus"},"skill":"Mining","baseFactor":0.5,"bonusFactor":0.1}},"capacityFactors":{"li":[{"capacity":"Consciousness","weight":1},{"capacity":"Manipulation","weight":0.9},{"capacity":"Sight","weight":0.5}]}},{"defName":"SmoothingSpeed","label":"smoothing speed","description":"A multiplier on the speed at which this person smooths floors.","category":"PawnWork","defaultBaseValue":1,"toStringStyle":"PercentZero","statFactors":{"li":"WorkSpeedGlobal"},"skillNeedFactors":{"li":{"$":{"Class":"SkillNeed_BaseBonus"},"skill":"Construction","baseFactor":0.5,"bonusFactor":0.15}},"capacityFactors":{"li":[{"capacity":"Consciousness","weight":1},{"capacity":"Manipulation","weight":0.9},{"capacity":"Sight","weight":0.3}]}},{"defName":"ResearchSpeed","label":"research speed","description":"This person does research at this speed.","category":"PawnWork","defaultBaseValue":1,"toStringStyle":"PercentZero","statFactors":{"li":"WorkSpeedGlobal"},"skillNeedFactors":{"li":{"$":{"Class":"SkillNeed_BaseBonus"},"skill":"Research","baseFactor":0.1,"bonusFactor":0.15}},"capacityFactors":{"li":[{"capacity":"Consciousness","weight":1},{"capacity":"Manipulation","weight":0.9},{"capacity":"Sight","weight":0.5}]}},{"defName":"ConstructionSpeed","label":"construction speed","description":"Speed at which this person constructs and repairs buildings.","category":"PawnWork","defaultBaseValue":1,"toStringStyle":"PercentZero","statFactors":{"li":"WorkSpeedGlobal"},"skillNeedFactors":{"li":{"$":{"Class":"SkillNeed_BaseBonus"},"skill":"Construction","baseFactor":0.5,"bonusFactor":0.15}},"capacityFactors":{"li":[{"capacity":"Consciousness","weight":1},{"capacity":"Manipulation","weight":0.9},{"capacity":"Sight","weight":0.5}]}},{"defName":"PlantWorkSpeed","label":"plant work speed","description":"Speed at which this person sows and harvests plants.","category":"PawnWork","defaultBaseValue":1,"toStringStyle":"PercentZero","statFactors":{"li":"WorkSpeedGlobal"},"skillNeedFactors":{"li":{"$":{"Class":"SkillNeed_BaseBonus"},"skill":"Growing","baseFactor":0.2,"bonusFactor":0.12}},"capacityFactors":{"li":[{"capacity":"Consciousness","weight":1},{"capacity":"Manipulation","weight":0.9},{"capacity":"Sight","weight":0.5}]}},{"defName":"HarvestFailChance","label":"harvest fail chance","description":"The chance that this person will accidentally destroy the harvest instead of collecting it.","category":"PawnWork","defaultBaseValue":1,"toStringStyle":"PercentZero","skillNeedFactors":{"li":{"$":{"Class":"SkillNeed_Direct"},"skill":"Growing","factorsPerLevel":{"li":[0.5,0.4,0.3,0.25,0.2,0.15,0.125,0.1,0.075,0.05,0.04,0.03,0.02,0.01,0.01,0.01,0,0,0,0,0]}}},"capacityFactors":{"li":[{"capacity":"Consciousness","weight":0.35,"useReciprocal":true},{"capacity":"Manipulation","weight":0.35,"useReciprocal":true},{"capacity":"Sight","weight":0.1,"useReciprocal":true}]}},{"defName":"ConstructFailChance","label":"construct fail chance","description":"The chance that this person will fail in constructing something, wasting time and resources.","category":"PawnWork","defaultBaseValue":1,"toStringStyle":"PercentZero","skillNeedFactors":{"li":{"$":{"Class":"SkillNeed_Direct"},"skill":"Construction","factorsPerLevel":{"li":[0.25,0.2,0.15,0.12,0.1,0.07,0.05,0.04,0.03,0.025,0.02,0.015,0.01,0.01,0.01,0.01,0,0,0,0,0]}}},"capacityFactors":{"li":[{"capacity":"Consciousness","weight":0.35,"useReciprocal":true},{"capacity":"Manipulation","weight":0.35,"useReciprocal":true},{"capacity":"Sight","weight":0.2,"useReciprocal":true}]}},{"defName":"FixBrokenDownBuildingFailChance","label":"repair fail chance","description":"The chance that this person will fail to repair a broken down building.","category":"PawnWork","defaultBaseValue":1,"toStringStyle":"PercentZero","skillNeedFactors":{"li":{"$":{"Class":"SkillNeed_Direct"},"skill":"Construction","factorsPerLevel":{"li":[0.25,0.2,0.15,0.12,0.1,0.07,0.05,0.04,0.03,0.025,0.02,0.015,0.01,0.01,0.01,0.01,0,0,0,0,0]}}},"capacityFactors":{"li":[{"capacity":"Consciousness","weight":0.35,"useReciprocal":true},{"capacity":"Manipulation","weight":0.35,"useReciprocal":true},{"capacity":"Sight","weight":0.2,"useReciprocal":true}]}}]}}