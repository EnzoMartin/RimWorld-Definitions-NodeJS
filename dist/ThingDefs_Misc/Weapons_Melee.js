module.exports={"ThingDefs":{"ThingDef":[{"$":{"Name":"BaseMeleeWeapon","Abstract":"True"},"category":"Item","thingClass":"ThingWithComps","equipmentType":"Primary","pathCost":10,"useHitPoints":true,"selectable":true,"graphicData":{"onGroundRandomRotateAngle":35},"drawGUIOverlay":true,"statBases":{"MaxHitPoints":100,"Flammability":1,"DeteriorationRate":1,"SellPriceFactor":0.5},"altitudeLayer":"Item","alwaysHaulable":true,"tickerType":"Never","techLevel":"Industrial","weaponTags":{"li":"Melee"},"thingCategories":{"li":"WeaponsMelee"},"comps":{"li":[{"$":{"Class":"CompProperties_Forbiddable"}},{"compClass":"CompEquippable"},{"compClass":"CompQuality"},{"$":{"Class":"CompProperties_Art"},"nameMaker":"ArtName_WeaponMelee","descriptionMaker":"ArtDescription_WeaponMelee","minQualityForArtistic":"Excellent"}]},"recipeMaker":{"workSpeedStat":"SmithingSpeed","workSkill":"Crafting","effectWorking":"Smith","soundWorking":"Recipe_Smith","recipeUsers":{"li":["ElectricSmithy","FueledSmithy"]},"unfinishedThingDef":"UnfinishedWeapon"},"inspectorTabs":{"li":"ITab_Art"}},{"$":{"Name":"BaseMeleeWeapon_Sharp","ParentName":"BaseMeleeWeapon","Abstract":"True"},"recipeMaker":{"defaultIngredientFilter":{"categories":{"li":"Root"},"exceptedThingDefs":{"li":["Silver","Gold","WoodLog"]}}}},{"$":{"Name":"BaseMeleeWeapon_Blunt","ParentName":"BaseMeleeWeapon","Abstract":"True"},"recipeMaker":{"defaultIngredientFilter":{"categories":{"li":"Root"},"exceptedThingDefs":{"li":["Silver","Gold"]}}}},{"$":{"ParentName":"BaseMeleeWeapon_Sharp"},"defName":"MeleeWeapon_Gladius","label":"gladius","description":"A short sword of ancient design. Good for stabbing or slashing.","graphicData":{"texPath":"Things/Item/Equipment/WeaponMelee/Gladius","graphicClass":"Graphic_Single"},"soundInteract":"InteractPistol","costStuffCount":50,"statBases":{"WorkToMake":20000,"MeleeWeapon_DamageAmount":12,"MeleeWeapon_Cooldown":1.95},"equippedAngleOffset":-65,"stuffCategories":{"li":["Metallic","Woody"]},"verbs":{"li":{"verbClass":"Verb_MeleeAttack","hasStandardCommand":true,"meleeDamageDef":"Cut"}}},{"$":{"ParentName":"BaseMeleeWeapon_Sharp"},"defName":"MeleeWeapon_LongSword","label":"longsword","description":"The ancient weapon of kings, the longsword can be used for slashing or stabbing and is deadly in the right hands.","graphicData":{"texPath":"Things/Item/Equipment/WeaponMelee/LongSword","graphicClass":"Graphic_Single"},"soundInteract":"InteractPistol","costStuffCount":120,"statBases":{"WorkToMake":40000,"MeleeWeapon_DamageAmount":17,"MeleeWeapon_Cooldown":2.5},"equippedAngleOffset":-65,"stuffCategories":{"li":["Metallic","Woody"]},"verbs":{"li":{"verbClass":"Verb_MeleeAttack","hasStandardCommand":true,"meleeDamageDef":"Cut"}}},{"$":{"ParentName":"BaseMeleeWeapon_Sharp"},"defName":"MeleeWeapon_Knife","label":"knife","description":"One of humankind's oldest tools, the knife is both an everyday tool and a deadly weapon.","graphicData":{"texPath":"Things/Item/Equipment/WeaponMelee/Knife","graphicClass":"Graphic_Single"},"soundInteract":"InteractPistol","costStuffCount":40,"statBases":{"WorkToMake":6000,"MeleeWeapon_DamageAmount":8,"MeleeWeapon_Cooldown":1.66},"equippedAngleOffset":-65,"stuffCategories":{"li":"Metallic"},"verbs":{"li":{"verbClass":"Verb_MeleeAttack","hasStandardCommand":true,"meleeDamageDef":"Cut"}}},{"$":{"ParentName":"BaseMeleeWeapon_Sharp"},"defName":"MeleeWeapon_Shiv","label":"shiv","description":"An improvised knife-like weapon.","graphicData":{"texPath":"Things/Item/Equipment/WeaponMelee/Shiv","graphicClass":"Graphic_Single"},"soundInteract":"InteractPistol","tradeability":"Sellable","costStuffCount":10,"statBases":{"WorkToMake":300,"MeleeWeapon_DamageAmount":7,"DeteriorationRate":0.5,"MeleeWeapon_Cooldown":1.55},"equippedAngleOffset":-65,"stuffCategories":{"li":["Metallic","Woody","Stony"]},"recipeMaker":{"recipeUsers":{"li":["ElectricSmithy","FueledSmithy","CraftingSpot"]}},"verbs":{"li":{"verbClass":"Verb_MeleeAttack","hasStandardCommand":true,"meleeDamageDef":"Cut"}}},{"$":{"ParentName":"BaseMeleeWeapon_Sharp"},"defName":"MeleeWeapon_Spear","label":"spear","description":"A polearm tipped with a sharp point for stabbing opponents in melee combat.","graphicData":{"texPath":"Things/Item/Equipment/WeaponMelee/Spear","graphicClass":"Graphic_Single"},"techLevel":"Neolithic","weaponTags":{"li":["Neolithic","NeolithicMelee"]},"costStuffCount":90,"statBases":{"WorkToMake":25000,"MeleeWeapon_DamageAmount":15,"MeleeWeapon_Cooldown":2.3},"equippedAngleOffset":-25,"stuffCategories":{"li":["Metallic","Woody"]},"verbs":{"li":{"verbClass":"Verb_MeleeAttack","hasStandardCommand":true,"meleeDamageDef":"Stab"}}},{"$":{"ParentName":"BaseMeleeWeapon_Blunt"},"defName":"MeleeWeapon_Mace","label":"mace","description":"A refined club, engineered for efficient swinging and deadly impacts.","graphicData":{"texPath":"Things/Item/Equipment/WeaponMelee/Mace","graphicClass":"Graphic_Single"},"costStuffCount":75,"statBases":{"WorkToMake":15000,"MeleeWeapon_DamageAmount":11,"MeleeWeapon_Cooldown":2.1},"equippedAngleOffset":-65,"stuffCategories":{"li":["Metallic","Woody"]},"verbs":{"li":{"verbClass":"Verb_MeleeAttack","hasStandardCommand":true,"meleeDamageDef":"Blunt"}}},{"$":{"ParentName":"BaseMeleeWeapon_Blunt"},"defName":"MeleeWeapon_Club","label":"club","description":"The oldest human weapon - a shaped stick, heavy at one end, for bashing enemies to death. Primitive but effective.","graphicData":{"texPath":"Things/Item/Equipment/WeaponMelee/Club","graphicClass":"Graphic_Single"},"techLevel":"Neolithic","weaponTags":{"li":["Neolithic","NeolithicMelee"]},"tradeability":"Sellable","costStuffCount":40,"statBases":{"WorkToMake":500,"MeleeWeapon_DamageAmount":11,"DeteriorationRate":0.5,"MeleeWeapon_Cooldown":2.4},"equippedAngleOffset":-65,"stuffCategories":{"li":["Metallic","Woody","Stony"]},"recipeMaker":{"recipeUsers":{"li":["ElectricSmithy","FueledSmithy","CraftingSpot"]}},"verbs":{"li":{"verbClass":"Verb_MeleeAttack","hasStandardCommand":true,"meleeDamageDef":"Blunt"}}}]}}