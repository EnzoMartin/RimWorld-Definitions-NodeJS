module.exports={"PawnKindDefs":{"PawnKindDef":[{"$":{"Abstract":"True","Name":"BasePlayerPawnKind"},"race":"Human","combatPower":30,"baseRecruitDifficulty":0.6,"isFighter":false,"apparelIgnoreSeasons":true,"forceNormalGearQuality":true},{"$":{"ParentName":"BasePlayerPawnKind"},"defName":"Colonist","label":"colonist","defaultFactionType":"PlayerColony","backstoryCategory":"Civil","chemicalAddictionChance":0.06,"apparelTags":{"li":"Spacer"},"apparelMoney":{"min":1000,"max":2400},"backstoryCryptosleepCommonality":1},{"$":{"ParentName":"BasePlayerPawnKind"},"defName":"Tribesperson","label":"member","race":"Human","defaultFactionType":"PlayerTribe","backstoryCategory":"Tribal","chemicalAddictionChance":0.05,"apparelTags":{"li":"Tribal"},"apparelMoney":{"min":200,"max":400},"backstoryCryptosleepCommonality":0}]}}