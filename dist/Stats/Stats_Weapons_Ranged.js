module.exports={"Defs":{"StatDef":[{"$":{"Abstract":"True","Name":"AccuracyBase"},"category":"Weapon","defaultBaseValue":1,"minValue":0.1,"maxValue":1,"toStringStyle":"PercentZero","showIfUndefined":false,"parts":{"li":[{"$":{"Class":"StatPart_Quality"},"factorAwful":0.7,"factorShoddy":0.8,"factorPoor":0.93,"factorNormal":1,"factorGood":1.05,"factorSuperior":1.1,"factorExcellent":1.2,"factorMasterwork":1.35,"factorLegendary":1.5},{"$":{"Class":"StatPart_Health"},"curve":{"points":{"li":["(0,0.6)","(1,1)"]}}}]}},{"$":{"ParentName":"AccuracyBase"},"defName":"AccuracyTouch","label":"Accuracy (touch)","description":"Accuracy multiplier at touch range.","displayPriorityInCategory":900},{"$":{"ParentName":"AccuracyBase"},"defName":"AccuracyShort","label":"Accuracy (short)","description":"Accuracy multiplier at short range.","displayPriorityInCategory":899},{"$":{"ParentName":"AccuracyBase"},"defName":"AccuracyMedium","label":"Accuracy (medium)","description":"Accuracy multiplier at medium range.","displayPriorityInCategory":898},{"$":{"ParentName":"AccuracyBase"},"defName":"AccuracyLong","label":"Accuracy (long)","description":"Accuracy multiplier at long range.","displayPriorityInCategory":897},{"defName":"RangedWeapon_Cooldown","label":"ranged cooldown","description":"How long it takes to recover after firing this weapon.","category":"Weapon","defaultBaseValue":1,"minValue":0.01,"toStringStyle":"FloatTwo","formatString":"{0} s","showIfUndefined":false,"displayPriorityInCategory":500}]}}