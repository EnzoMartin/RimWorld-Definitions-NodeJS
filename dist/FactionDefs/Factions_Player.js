module.exports={"Defs":{"FactionDef":[{"$":{"Abstract":"True","Name":"PlayerFactionBase"},"homeIconPath":"World/FactionHomes/DefaultHome","homeIconColor":"(255,220,84)"},{"$":{"ParentName":"PlayerFactionBase"},"defName":"PlayerColony","label":"colony","description":"Your own community.","isPlayer":true,"basicMemberKind":"Colonist","pawnsPlural":"colonists","factionNameMaker":"NamerFactionOutlander","techLevel":"Industrial","backstoryCategory":"Civil","startingResearchTags":{"li":"ClassicStart"},"hairTags":{"li":"Urban"},"apparelStuffFilter":{"thingDefs":{"li":"Synthread"}}},{"$":{"ParentName":"PlayerFactionBase"},"defName":"PlayerTribe","label":"tribe","description":"Your own tribe.","isPlayer":true,"pawnsPlural":"tribespeople","basicMemberKind":"Tribesperson","factionNameMaker":"NamerFactionTribal","techLevel":"Neolithic","backstoryCategory":"Tribal","pawnNameMaker":"NamerPersonTribal","startingResearchTags":{"li":"TribalStart"},"hairTags":{"li":"Tribal"},"apparelStuffFilter":{"thingDefs":{"li":"Cloth"}}}]}}