module.exports={"ThingDefs":{"ThingDef":[{"$":{"Name":"BaseGun","Abstract":"True"},"category":"Item","thingClass":"ThingWithComps","equipmentType":"Primary","pathCost":10,"useHitPoints":true,"selectable":true,"graphicData":{"onGroundRandomRotateAngle":35},"drawGUIOverlay":true,"statBases":{"MaxHitPoints":100,"Flammability":1,"DeteriorationRate":2,"SellPriceFactor":0.5},"altitudeLayer":"Item","alwaysHaulable":true,"tickerType":"Never","techLevel":"Industrial","thingCategories":{"li":"WeaponsRanged"},"inspectorTabs":{"li":"ITab_Art"},"comps":{"li":[{"$":{"Class":"CompProperties_Forbiddable"}},{"compClass":"CompEquippable"},{"compClass":"CompQuality"},{"$":{"Class":"CompProperties_Art"},"nameMaker":"ArtName_WeaponGun","descriptionMaker":"ArtDescription_WeaponGun","minQualityForArtistic":"Excellent"}]}},{"$":{"Name":"BaseMakeableGun","ParentName":"BaseGun","Abstract":"True"},"recipeMaker":{"workSpeedStat":"SmithingSpeed","workSkill":"Crafting","effectWorking":"Smith","soundWorking":"Recipe_Smith","recipeUsers":{"li":"TableMachining"},"unfinishedThingDef":"UnfinishedGun"}},{"$":{"Name":"BaseHumanGun","ParentName":"BaseGun","Abstract":"True"},"weaponTags":{"li":"Gun"}},{"$":{"Name":"BaseHumanMakeableGun","ParentName":"BaseMakeableGun","Abstract":"True"},"weaponTags":{"li":"Gun"}},{"$":{"Name":"BaseBullet","Abstract":"True"},"category":"Projectile","tickerType":"Normal","altitudeLayer":"Projectile","thingClass":"Bullet","label":"bullet","useHitPoints":false,"neverMultiSelect":true,"graphicData":{"shaderType":"Transparent"}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_Pistol","label":"pistol bullet","graphicData":{"texPath":"Things/Projectile/Bullet_Small","graphicClass":"Graphic_Single"},"projectile":{"flyOverhead":false,"damageDef":"Bullet","DamageAmountBase":9,"Speed":55}},{"$":{"ParentName":"BaseHumanMakeableGun"},"defName":"Gun_Pistol","label":"pistol","description":"Ancient pattern automatic pistol. Weak and short range, but quick.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/Pistol","graphicClass":"Graphic_Single"},"soundInteract":"InteractPistol","statBases":{"WorkToMake":32000,"MarketValue":200,"AccuracyTouch":0.91,"AccuracyShort":0.71,"AccuracyMedium":0.5,"AccuracyLong":0.32,"RangedWeapon_Cooldown":0.66},"costList":{"Steel":30,"Component":2},"verbs":{"li":{"verbClass":"Verb_Shoot","hasStandardCommand":true,"projectileDef":"Bullet_Pistol","warmupTicks":54,"range":24,"soundCast":"ShotPistol","soundCastTail":"GunTail_Light","muzzleFlashScale":9}}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_PumpShotgun","label":"shotgun blast","graphicData":{"texPath":"Things/Projectile/Bullet_Shotgun","graphicClass":"Graphic_Single"},"projectile":{"damageDef":"Bullet","damageAmountBase":20,"speed":55}},{"$":{"ParentName":"BaseHumanMakeableGun"},"defName":"Gun_PumpShotgun","label":"pump shotgun","description":"Ancient design. Deadly, but short range.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/Shotgun","graphicClass":"Graphic_Single"},"soundInteract":"InteractShotgun","statBases":{"WorkToMake":50000,"MarketValue":400,"AccuracyTouch":0.8,"AccuracyShort":0.87,"AccuracyMedium":0.77,"AccuracyLong":0.64,"RangedWeapon_Cooldown":0.66},"costList":{"Steel":90,"Component":3},"verbs":{"li":{"verbClass":"Verb_Shoot","hasStandardCommand":true,"projectileDef":"Bullet_PumpShotgun","warmupTicks":90,"range":16,"soundCast":"ShotShotgun","soundCastTail":"GunTail_Heavy","muzzleFlashScale":9}}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_SurvivalRifle","label":"survival rifle bullet","projectile":{"damageDef":"Bullet","damageAmountBase":18,"speed":70},"graphicData":{"texPath":"Things/Projectile/Bullet_big","graphicClass":"Graphic_Single"}},{"$":{"ParentName":"BaseHumanMakeableGun"},"defName":"Gun_SurvivalRifle","label":"survival rifle","description":"Ancient bolt-action rifle. Good range, Good power, low rate of fire.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/SurvivalRifle","graphicClass":"Graphic_Single"},"soundInteract":"InteractRifle","statBases":{"WorkToMake":50000,"MarketValue":400,"AccuracyTouch":0.75,"AccuracyShort":0.96,"AccuracyMedium":0.96,"AccuracyLong":0.9,"RangedWeapon_Cooldown":0.66},"costList":{"Steel":90,"Component":3},"verbs":{"li":{"verbClass":"Verb_Shoot","hasStandardCommand":true,"projectileDef":"Bullet_SurvivalRifle","warmupTicks":150,"range":37,"soundCast":"ShotSurvivalRifle","soundCastTail":"GunTail_Heavy","muzzleFlashScale":9}}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_AssaultRifle","label":"assault rifle bullet","graphicData":{"texPath":"Things/Projectile/Bullet_Small","graphicClass":"Graphic_Single"},"projectile":{"damageDef":"Bullet","damageAmountBase":7,"speed":70}},{"$":{"ParentName":"BaseHumanMakeableGun"},"defName":"Gun_AssaultRifle","label":"assault rifle","description":"A general-purpose military weapon for field or urban combat. It fires a three-round burst. Good range, low power, high rate of fire.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/AssaultRifle","graphicClass":"Graphic_Single"},"soundInteract":"InteractRifle","statBases":{"WorkToMake":120000,"MarketValue":650,"AccuracyTouch":0.7,"AccuracyShort":0.87,"AccuracyMedium":0.77,"AccuracyLong":0.64,"RangedWeapon_Cooldown":0.69},"costList":{"Steel":100,"Component":4},"verbs":{"li":{"verbClass":"Verb_Shoot","hasStandardCommand":true,"projectileDef":"Bullet_AssaultRifle","warmupTicks":90,"range":31,"burstShotCount":3,"ticksBetweenBurstShots":7,"soundCast":"ShotAssaultRifle","soundCastTail":"GunTail_Medium","muzzleFlashScale":9}}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_SniperRifle","label":"sniper rifle bullet","graphicData":{"texPath":"Things/Projectile/Bullet_Big","graphicClass":"Graphic_Single"},"projectile":{"damageDef":"Bullet","damageAmountBase":40,"speed":100}},{"$":{"ParentName":"BaseHumanMakeableGun"},"defName":"Gun_SniperRifle","label":"sniper rifle","description":"Ancient pattern military sniper rifle. Bolt action. Long range, great accuracy and power.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/SniperRifle","graphicClass":"Graphic_Single"},"soundInteract":"InteractRifle","statBases":{"WorkToMake":120000,"MarketValue":850,"AccuracyTouch":0.5,"AccuracyShort":0.86,"AccuracyMedium":0.86,"AccuracyLong":0.88,"RangedWeapon_Cooldown":2.33},"costList":{"Steel":100,"Component":6},"verbs":{"li":{"verbClass":"Verb_Shoot","hasStandardCommand":true,"projectileDef":"Bullet_SniperRifle","warmupTicks":240,"range":45,"soundCast":"ShotSniperRifle","soundCastTail":"GunTail_Heavy","muzzleFlashScale":9}},"weaponTags":{"li":"SniperRifle"}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_MachinePistol","label":"Machine pistol bullet","graphicData":{"texPath":"Things/Projectile/Bullet_Small","graphicClass":"Graphic_Single"},"projectile":{"damageDef":"Bullet","damageAmountBase":5,"speed":55}},{"$":{"ParentName":"BaseHumanMakeableGun"},"defName":"Gun_MachinePistol","label":"Machine pistol","description":"A micro-submachine gun. Short range, low power, high rate of fire. Very quick to aim and fire.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/MachinePistol","graphicClass":"Graphic_Single"},"soundInteract":"InteractSMG","statBases":{"WorkToMake":50000,"MarketValue":550,"AccuracyTouch":0.73,"AccuracyShort":0.62,"AccuracyMedium":0.43,"AccuracyLong":0.15,"RangedWeapon_Cooldown":0.66},"costList":{"Steel":90,"Component":3},"verbs":{"li":{"verbClass":"Verb_Shoot","hasStandardCommand":true,"projectileDef":"Bullet_MachinePistol","warmupTicks":45,"range":24,"burstShotCount":3,"ticksBetweenBurstShots":7,"soundCast":"ShotMachinePistol","soundCastTail":"GunTail_Light","muzzleFlashScale":9}}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_HeavySMG","label":"heavy SMG bullet","graphicData":{"texPath":"Things/Projectile/Bullet_Small","graphicClass":"Graphic_Single"},"projectile":{"damageDef":"Bullet","damageAmountBase":10,"speed":50}},{"$":{"ParentName":"BaseHumanMakeableGun"},"defName":"Gun_HeavySMG","label":"heavy SMG","description":"A compact, wide-caliber slug-thrower. Very short range, but it packs a punch and handles quite well.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/HeavySMG","graphicClass":"Graphic_Single"},"soundInteract":"InteractSMG","statBases":{"WorkToMake":60000,"MarketValue":600,"AccuracyTouch":0.89,"AccuracyShort":0.64,"AccuracyMedium":0.37,"AccuracyLong":0.22,"RangedWeapon_Cooldown":1.3},"costList":{"Steel":130,"Component":4},"verbs":{"li":{"verbClass":"Verb_Shoot","hasStandardCommand":true,"projectileDef":"Bullet_HeavySMG","warmupTicks":80,"range":20,"burstShotCount":3,"ticksBetweenBurstShots":11,"soundCast":"ShotHeavySMG","soundCastTail":"GunTail_Heavy","muzzleFlashScale":9}}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_IncendiaryLauncher","label":"incendiary bolt","graphicData":{"texPath":"Things/Projectile/InfernoCannonShot","graphicClass":"Graphic_Single","shaderType":"TransparentPostLight"},"thingClass":"Projectile_Explosive","projectile":{"speed":40,"damageDef":"Flame","damageAmountBase":10,"explosionRadius":1.1,"preExplosionSpawnThingDef":"FilthFuel","explosionSpawnChance":0.6}},{"$":{"ParentName":"BaseHumanMakeableGun"},"defName":"Gun_IncendiaryLauncher","label":"incendiary launcher","description":"Incendiary bolt launcher. Starts fires.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/IncendiaryLauncher","graphicClass":"Graphic_Single"},"soundInteract":"InteractRifle","statBases":{"WorkToMake":80000,"MarketValue":630,"AccuracyTouch":0.79,"AccuracyShort":0.42,"AccuracyMedium":0.18,"AccuracyLong":0.06,"RangedWeapon_Cooldown":1.66},"costList":{"Steel":140,"Component":4},"verbs":{"li":{"verbClass":"Verb_Shoot","hasStandardCommand":true,"projectileDef":"Bullet_IncendiaryLauncher","ai_IsIncendiary":true,"warmupTicks":370,"range":24,"burstShotCount":1,"soundCast":"ShotIncendiaryLauncher","soundCastTail":"GunTail_Medium","muzzleFlashScale":14}}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_LMG","label":"LMG bullet","graphicData":{"texPath":"Things/Projectile/Bullet_Small","graphicClass":"Graphic_Single"},"projectile":{"damageDef":"Bullet","damageAmountBase":8,"speed":40}},{"$":{"ParentName":"BaseHumanMakeableGun"},"defName":"Gun_LMG","label":"LMG","description":"A light machine gun.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/LMG","graphicClass":"Graphic_Single"},"soundInteract":"InteractRifle","statBases":{"WorkToMake":90000,"MarketValue":800,"AccuracyTouch":0.5,"AccuracyShort":0.64,"AccuracyMedium":0.41,"AccuracyLong":0.22,"RangedWeapon_Cooldown":1.4},"costList":{"Steel":150,"Component":4},"verbs":{"li":{"verbClass":"Verb_Shoot","hasStandardCommand":true,"projectileDef":"Bullet_LMG","warmupTicks":120,"range":25.9,"ticksBetweenBurstShots":7,"burstShotCount":6,"soundCast":"ShotMinigun","soundCastTail":"GunTail_Medium","muzzleFlashScale":9}}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_ChargeRifle","label":"charge shot","graphicData":{"texPath":"Things/Projectile/Charge_Small","graphicClass":"Graphic_Single"},"projectile":{"damageDef":"Bullet","damageAmountBase":13,"speed":70}},{"$":{"ParentName":"BaseHumanMakeableGun"},"defName":"Gun_ChargeRifle","label":"charge rifle","description":"Charged-shot energy/projectile rifle.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/ChargeRifle","graphicClass":"Graphic_Single"},"soundInteract":"InteractChargeRifle","statBases":{"WorkToMake":120000,"MarketValue":1500,"AccuracyTouch":0.8,"AccuracyShort":0.83,"AccuracyMedium":0.68,"AccuracyLong":0.53,"RangedWeapon_Cooldown":0.66},"recipeMaker":{"researchPrerequisite":"ChargedShot"},"costList":{"Steel":120,"Plasteel":30,"Component":6},"techLevel":"Spacer","weaponTags":{"li":"AdvancedGun"},"verbs":{"li":{"verbClass":"Verb_Shoot","hasStandardCommand":true,"projectileDef":"Bullet_ChargeRifle","warmupTicks":90,"range":24,"ticksBetweenBurstShots":12,"burstShotCount":3,"soundCast":"ShotChargeRifle","soundCastTail":"GunTail_Medium","muzzleFlashScale":9}}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_Minigun","label":"minigun bullet","graphicData":{"texPath":"Things/Projectile/Bullet_Small","graphicClass":"Graphic_Single"},"projectile":{"damageDef":"Bullet","damageAmountBase":8,"speed":70}},{"$":{"ParentName":"BaseHumanMakeableGun"},"defName":"Gun_Minigun","label":"minigun","description":"A multi-barrel machine gun with an extremely high rate of fire. Mechanoid-built.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/Minigun","graphicClass":"Graphic_Single"},"soundInteract":"InteractRifle","statBases":{"WorkToMake":220000,"MarketValue":2200,"AccuracyTouch":0.5,"AccuracyShort":0.42,"AccuracyMedium":0.18,"AccuracyLong":0.06,"RangedWeapon_Cooldown":0.66},"costList":{"Steel":160,"Component":20},"recipeMaker":{"researchPrerequisite":"MultibarrelWeapons"},"techLevel":"Industrial","weaponTags":{"li":["MechanoidGunHeavy","GunHeavy"]},"equippedStatOffsets":{"MoveSpeed":-0.25},"verbs":{"li":{"verbClass":"Verb_Shoot","hasStandardCommand":true,"projectileDef":"Bullet_Minigun","forcedMissRadius":2.4,"warmupTicks":240,"range":32,"burstShotCount":30,"ticksBetweenBurstShots":4,"soundCast":"ShotMinigun","soundCastTail":"GunTail_Medium","muzzleFlashScale":9}}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_DoomsdayRocket","label":"doomsday rocket","graphicData":{"texPath":"Things/Projectile/Rocket_Big","graphicClass":"Graphic_Single","shaderType":"TransparentPostLight"},"thingClass":"Projectile_DoomsdayRocket","projectile":{"damageDef":"Bomb","damageAmountBase":40,"explosionRadius":7.8,"speed":50}},{"$":{"ParentName":"BaseGun"},"defName":"Gun_DoomsdayRocket","label":"doomsday rocket launcher","description":"A single-use rocket launcher for quick retribution.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/DoomsdayLauncher","graphicClass":"Graphic_Single"},"statBases":{"MarketValue":2000,"AccuracyTouch":1,"AccuracyShort":1,"AccuracyMedium":1,"AccuracyLong":1,"RangedWeapon_Cooldown":4.5},"techLevel":"Spacer","destroyOnDrop":false,"weaponTags":{"li":["Gun","GunHeavy"]},"tradeTags":{"li":"Exotic"},"verbs":{"li":{"verbClass":"Verb_ShootOneUse","hasStandardCommand":true,"projectileDef":"Bullet_DoomsdayRocket","forcedMissRadius":0,"warmupTicks":270,"range":40,"burstShotCount":1,"soundCast":"InfernoCannon_Fire","soundCastTail":"GunTail_Heavy","onlyManualCast":true,"targetParams":{"canTargetLocations":true},"muzzleFlashScale":14}}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_Rocket","label":"rocket","graphicData":{"texPath":"Things/Projectile/Rocket_Big","graphicClass":"Graphic_Single","shaderType":"TransparentPostLight"},"thingClass":"Projectile_Explosive","projectile":{"damageDef":"Bomb","damageAmountBase":40,"explosionRadius":3,"speed":50}},{"$":{"ParentName":"BaseGun"},"defName":"Gun_TripleRocket","label":"triple rocket launcher","description":"A single-use rocket launcher that fires 3 projectiles in quick succession.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/RocketLauncher","graphicClass":"Graphic_Single"},"statBases":{"MarketValue":1000,"AccuracyTouch":0.6,"AccuracyShort":0.8,"AccuracyMedium":0.92,"AccuracyLong":0.88,"RangedWeapon_Cooldown":4.5},"techLevel":"Spacer","destroyOnDrop":false,"weaponTags":{"li":["Gun","GunHeavy"]},"tradeTags":{"li":"Exotic"},"verbs":{"li":{"verbClass":"Verb_ShootOneUse","hasStandardCommand":true,"projectileDef":"Bullet_Rocket","forcedMissRadius":2,"warmupTicks":300,"range":40,"ticksBetweenBurstShots":20,"burstShotCount":3,"soundCast":"InfernoCannon_Fire","soundCastTail":"GunTail_Heavy","onlyManualCast":true,"stopBurstWithoutLos":false,"targetParams":{"canTargetLocations":true},"muzzleFlashScale":14}}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_ChargeBlasterHeavy","label":"charge blaster shot","graphicData":{"texPath":"Things/Projectile/Charge_Small","graphicClass":"Graphic_Single","shaderType":"TransparentPostLight"},"projectile":{"damageDef":"Bullet","damageAmountBase":15,"speed":90}},{"$":{"ParentName":"BaseGun"},"defName":"Gun_ChargeBlasterHeavy","label":"heavy charge blaster","description":"Charged-shot blaster for area suppressive fire. Mechanoid-built.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/ChargeBlasterHeavy","graphicClass":"Graphic_Single"},"statBases":{"MarketValue":2400,"AccuracyTouch":0.6,"AccuracyShort":0.77,"AccuracyMedium":0.59,"AccuracyLong":0.42,"RangedWeapon_Cooldown":7},"tradeability":"Never","techLevel":"Spacer","destroyOnDrop":true,"menuHidden":true,"weaponTags":{"li":"MechanoidGunHeavy"},"verbs":{"li":{"verbClass":"Verb_Shoot","hasStandardCommand":true,"projectileDef":"Bullet_ChargeBlasterHeavy","forcedMissRadius":2.9,"warmupTicks":100,"range":27,"ticksBetweenBurstShots":5,"burstShotCount":24,"soundCast":"ShotChargeBlaster","soundCastTail":"GunTail_Heavy","muzzleFlashScale":9}}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_InfernoCannon","label":"inferno cannon shell","graphicData":{"texPath":"Things/Projectile/InfernoCannonShot","graphicClass":"Graphic_Single","shaderType":"TransparentPostLight"},"thingClass":"Projectile_Explosive","projectile":{"damageDef":"Flame","damageAmountBase":13,"speed":45,"explosionRadius":2.4,"preExplosionSpawnThingDef":"FilthFuel","explosionSpawnChance":0.27}},{"$":{"ParentName":"BaseGun"},"defName":"Gun_InfernoCannon","label":"inferno cannon","description":"Incendiary-shot mini-artillery device. Mechanoid-built.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/InfernoCannon","graphicClass":"Graphic_Single"},"statBases":{"MarketValue":2400,"AccuracyTouch":0.79,"AccuracyShort":0.42,"AccuracyMedium":0.18,"AccuracyLong":0.06,"RangedWeapon_Cooldown":8},"tradeability":"Never","techLevel":"Spacer","destroyOnDrop":true,"menuHidden":true,"weaponTags":{"li":"MechanoidGunHeavy"},"verbs":{"li":{"verbClass":"Verb_Shoot","hasStandardCommand":true,"projectileDef":"Bullet_InfernoCannon","forcedMissRadius":3.5,"ai_IsIncendiary":true,"warmupTicks":100,"range":27,"burstShotCount":1,"soundCast":"InfernoCannon_Fire","soundCastTail":"GunTail_Light","muzzleFlashScale":14}}},{"$":{"ParentName":"BaseBullet"},"defName":"Bullet_ChargeLance","label":"charge lance shot","graphicData":{"texPath":"Things/Projectile/ChargeLanceShot","graphicClass":"Graphic_Single","shaderType":"TransparentPostLight","drawSize":"(3,3)"},"projectile":{"damageDef":"Bullet","damageAmountBase":27,"speed":120}},{"$":{"ParentName":"BaseGun"},"defName":"Gun_ChargeLance","label":"charge lance","description":"Charged-shot rail-assisted lance weapon. Fires a single charged shot at high velocity.","graphicData":{"texPath":"Things/Item/Equipment/WeaponRanged/ChargeLance","graphicClass":"Graphic_Single"},"statBases":{"MarketValue":2000,"AccuracyTouch":0.6,"AccuracyShort":0.8,"AccuracyMedium":0.92,"AccuracyLong":0.88,"RangedWeapon_Cooldown":2.8},"tradeability":"Never","techLevel":"Spacer","destroyOnDrop":true,"menuHidden":true,"weaponTags":{"li":"MechanoidGunMedium"},"verbs":{"li":{"verbClass":"Verb_Shoot","hasStandardCommand":true,"projectileDef":"Bullet_ChargeLance","warmupTicks":120,"range":37,"burstShotCount":1,"soundCast":"ChargeLance_Fire","soundCastTail":"GunTail_Heavy","muzzleFlashScale":9}}}]}}