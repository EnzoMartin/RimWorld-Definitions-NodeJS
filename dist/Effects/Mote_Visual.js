module.exports={"Defs":{"ThingDef":[{"$":{"Name":"MoteBase","Abstract":"True"},"thingClass":"MoteThrown","label":"Mote","category":"Mote","graphicData":{"graphicClass":"Graphic_Mote","shaderType":"Mote"},"altitudeLayer":"MoteLow","tickerType":"Normal","useHitPoints":false,"isSaveable":false,"rotatable":false},{"$":{"ParentName":"MoteBase"},"defName":"Mote_ShotFlash","altitudeLayer":"MoteOverhead","mote":{"solidTime":0.05,"fadeOutTime":0.05},"graphicData":{"texPath":"Things/Mote/ShotFlash","shaderType":"MoteGlow"}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_SparkFlash","altitudeLayer":"MoteOverhead","mote":{"solidTime":0.05,"fadeOutTime":0.1},"graphicData":{"texPath":"Things/Mote/SparkFlash","shaderType":"MoteGlow"}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_ExplosionFlash","altitudeLayer":"MoteOverhead","mote":{"solidTime":0.05,"fadeOutTime":0.1},"graphicData":{"texPath":"Things/Mote/ExplosionFlash","shaderType":"MoteGlow"}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_ShotHit_Spark","graphicData":{"texPath":"Things/Mote/ShotHit_Spark","shaderType":"TransparentPostLight"},"altitudeLayer":"MoteLow","mote":{"solidTime":0.05,"fadeOutTime":0.07}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_ShotHit_Dirt","graphicData":{"texPath":"Things/Mote/ShotHit_Dirt","shaderType":"Transparent"},"altitudeLayer":"MoteLow","mote":{"solidTime":0.03,"fadeOutTime":0.1}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_BlastDry","graphicData":{"texPath":"Things/Mote/BlastDry","shaderType":"TransparentPostLight"},"altitudeLayer":"MoteOverhead","mote":{"solidTime":0,"fadeOutTime":0.2}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_BlastEMP","graphicData":{"texPath":"Things/Mote/BlastEMP","shaderType":"TransparentPostLight"},"altitudeLayer":"MoteOverhead","mote":{"solidTime":0,"fadeOutTime":0.2}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_BlastFlame","graphicData":{"texPath":"Things/Mote/BlastFlame","shaderType":"TransparentPostLight"},"altitudeLayer":"MoteOverhead","mote":{"solidTime":0,"fadeOutTime":0.2}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_ElectricalSpark","graphicData":{"texPath":"Things/Mote/ElectricalSpark","shaderType":"MoteGlow"},"altitudeLayer":"MoteOverhead","mote":{"fadeInTime":0.04,"solidTime":0.08,"fadeOutTime":0.13}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_BlastExtinguisher","graphicData":{"texPath":"Things/Mote/BlastExtinguisher","shaderType":"TransparentPostLight"},"altitudeLayer":"MoteOverhead","mote":{"solidTime":0,"fadeOutTime":0.2}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_FireGlow","graphicData":{"texPath":"Things/Mote/FireGlow","shaderType":"MoteGlow"},"altitudeLayer":"MoteOverhead","mote":{"fadeInTime":0.75,"solidTime":1.08,"fadeOutTime":0.8}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_MicroSparks","graphicData":{"texPath":"Things/Mote/MicroSparks","shaderType":"MoteGlow"},"altitudeLayer":"MoteOverhead","mote":{"fadeInTime":0.75,"solidTime":0.5,"fadeOutTime":0.65}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_HeatGlow","graphicData":{"texPath":"Things/Mote/FireGlow","shaderType":"MoteGlow"},"altitudeLayer":"MoteOverhead","mote":{"fadeInTime":2.6,"solidTime":1.5,"fadeOutTime":3.3}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_LightningGlow","graphicData":{"texPath":"Things/Mote/LightningGlow","shaderType":"MoteGlow"},"altitudeLayer":"MoteOverhead","mote":{"fadeInTime":0.08,"solidTime":0.08,"fadeOutTime":0.35}},{"$":{"ParentName":"MoteBase","Name":"FoodBitBase","Abstract":"True"},"graphicData":{"shaderType":"Cutout"},"altitudeLayer":"Projectile","mote":{"fadeInTime":0.08,"solidTime":0.4,"fadeOutTime":0.25}},{"$":{"ParentName":"FoodBitBase"},"defName":"Mote_FoodBitVegetarian","graphicData":{"texPath":"Things/Mote/FoodBitVegetarian"}},{"$":{"ParentName":"FoodBitBase"},"defName":"Mote_FoodBitMeat","graphicData":{"texPath":"Things/Mote/FoodBitMeat"}},{"$":{"ParentName":"FoodBitBase"},"defName":"Mote_StoneBit","graphicData":{"texPath":"Things/Mote/StoneBit"}},{"$":{"ParentName":"FoodBitBase"},"defName":"Mote_CookBit","graphicData":{"texPath":"Things/Mote/CookBit"}},{"$":{"ParentName":"FoodBitBase"},"defName":"Mote_VomitBit","graphicData":{"texPath":"Things/Mote/VomitBit"}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_AirPuff","graphicData":{"texPath":"Things/Mote/AirPuff"},"altitudeLayer":"MoteOverhead","mote":{"fadeInTime":0.04,"solidTime":0.03,"fadeOutTime":1}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_DustPuff","graphicData":{"texPath":"Things/Mote/DustPuff"},"altitudeLayer":"MoteOverhead","mote":{"fadeInTime":0.04,"solidTime":0.03,"fadeOutTime":1}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_MetaPuff","graphicData":{"texPath":"Things/Mote/MetaPuff"},"altitudeLayer":"MoteOverhead","mote":{"realTime":true,"fadeInTime":0.04,"solidTime":0.03,"fadeOutTime":1}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_Smoke","graphicData":{"texPath":"Things/Mote/Smoke"},"altitudeLayer":"MoteOverhead","mote":{"fadeInTime":0.5,"solidTime":6,"fadeOutTime":3.2,"growthRate":0.005}},{"$":{"ParentName":"MoteBase"},"defName":"Mote_DustSlow","graphicData":{"texPath":"Things/Mote/DustPuff"},"altitudeLayer":"MoteOverhead","mote":{"fadeInTime":0.4,"solidTime":2,"fadeOutTime":2}}]}}