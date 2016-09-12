module.exports={"Defs":{"StatDef":[{"$":{"Name":"ArmorRatingBase","Abstract":"True"},"category":"Apparel","defaultBaseValue":0,"minValue":0,"hideAtValue":0,"toStringStyle":"PercentOne","parts":{"li":[{"$":{"Class":"StatPart_Quality"},"factorAwful":0.4,"factorShoddy":0.7,"factorPoor":0.85,"factorNormal":1,"factorGood":1.1,"factorSuperior":1.3,"factorExcellent":1.5,"factorMasterwork":1.7,"factorLegendary":2.1},{"$":{"Class":"StatPart_Health"},"curve":{"points":{"li":["(0,0.25)","(0.70,1)"]}}}]}},{"$":{"ParentName":"ArmorRatingBase"},"defName":"ArmorRating_Blunt","label":"Armor - Blunt","description":"Armor against blunt damage like club attacks, rock falls, and explosions."},{"$":{"ParentName":"ArmorRatingBase"},"defName":"ArmorRating_Sharp","label":"Armor - Sharp","description":"Armor against sharp damage like bullets, knife stabs, and animal bites."},{"$":{"ParentName":"ArmorRatingBase"},"defName":"ArmorRating_Heat","label":"Armor - Heat","description":"Armor against temperature-related damage like burns."},{"$":{"ParentName":"ArmorRatingBase"},"defName":"ArmorRating_Electric","label":"Armor - Electric ","description":"Armor against electric damage like EMP pulses."},{"$":{"Name":"InsulationBase","Abstract":"True"},"category":"Apparel","defaultBaseValue":0,"hideAtValue":0,"minValue":-9999,"maxValue":9999,"toStringStyle":"Temperature","toStringNumberSense":"Offset","parts":{"li":[{"$":{"Class":"StatPart_Quality"},"factorAwful":0.7,"factorShoddy":0.8,"factorPoor":0.9,"factorNormal":1,"factorGood":1.05,"factorSuperior":1.1,"factorExcellent":1.15,"factorMasterwork":1.2,"factorLegendary":1.25},{"$":{"Class":"StatPart_Health"},"curve":{"points":{"li":["(0,0.75)","(0.7,1)"]}}}]}},{"$":{"ParentName":"InsulationBase"},"defName":"Insulation_Cold","label":"Insulation - Cold","description":"How much this apparel offsets a wearer's minimum comfortable temperature when worn."},{"$":{"ParentName":"InsulationBase"},"defName":"Insulation_Heat","label":"Insulation - Heat","description":"How much this apparel offsets a wearer's maximum comfortable temperature when worn."},{"defName":"PersonalShieldEnergyMax","label":"Shield max energy","description":"The maximum energy a personal shield can have at one time. More energy can absorb more damage.","category":"Apparel","toStringStyle":"PercentZero","showIfUndefined":false,"parts":{"li":[{"$":{"Class":"StatPart_Quality"},"factorAwful":0.7,"factorShoddy":0.8,"factorPoor":0.9,"factorNormal":1,"factorGood":1.1,"factorSuperior":1.25,"factorExcellent":1.4,"factorMasterwork":1.6,"factorLegendary":1.85},{"$":{"Class":"StatPart_Health"},"curve":{"points":{"li":["(0,0.5)","(0.7,1)"]}}}]}},{"defName":"PersonalShieldRechargeRate","label":"Shield recharge rate","description":"The rate at which a shield gains energy as long as it is not broken.","category":"Apparel","defaultBaseValue":0.45,"toStringStyle":"PercentZero","formatString":"{0}/s","showIfUndefined":false,"parts":{"li":{"$":{"Class":"StatPart_Quality"},"factorAwful":0.8,"factorShoddy":0.88,"factorPoor":0.94,"factorNormal":1,"factorGood":1.05,"factorSuperior":1.1,"factorExcellent":1.125,"factorMasterwork":1.15,"factorLegendary":1.175}}}]}}