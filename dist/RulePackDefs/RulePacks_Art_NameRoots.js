module.exports={"Defs":{"RulePackDef":[{"defName":"ArtName_Weapon","include":{"li":"ArtNameUtility"},"rulePack":{"rulesStrings":{"li":["art_name->[badassconcept]","art_name->The [badassanimal]","art_name->[badassadjective] [badassanimal]","art_name->[badasscolor] [badassanimal]","art_name->[badassconcept] [badasscolor]","art_name->[anyPawn_nameShort]'s [badassconcept]","art_name->[badassconcept] of [anyPawn_nameShort]","art_name->[badasscolor] [anyPawn_nameShort]","art_name->[anyPawn_nameShort]'s [badassanimal]","art_name->[anyPawn_nameShort]'s [badassperson]"]},"rulesRaw":{"li":[{"$":{"Class":"Rule_File"},"keyword":"badassconcept","path":"NameBanks/Nouns_Concepts_Badass"},{"$":{"Class":"Rule_File"},"keyword":"badassanimal","path":"NameBanks/Nouns_BadassAnimals"},{"$":{"Class":"Rule_File"},"keyword":"badassadjective","path":"NameBanks/Adjectives_Badass"},{"$":{"Class":"Rule_File"},"keyword":"badassperson","path":"NameBanks/Nouns_BadassPersons"},{"$":{"Class":"Rule_File"},"keyword":"badassconcept","path":"NameBanks/Nouns_Concepts_Badass"},{"$":{"Class":"Rule_File"},"keyword":"badasscolor","path":"NameBanks/ColorsBadass"}]}}},{"defName":"ArtName_WeaponMelee","include":{"li":"ArtName_Weapon"}},{"defName":"ArtName_WeaponGun","include":{"li":"ArtName_Weapon"}},{"defName":"ArtName_Sculpture","include":{"li":"ArtNameUtility"},"rulePack":{"rulesStrings":{"li":["art_name->[anyPawn_nameShort]'s [artname]","art_name->[anyPawn_nameShort] [trans] [color]","art_name->[artname] [trans] [anyPawn_nameShort]","art_name->[artname] [trans] [concept]","art_name->[artname] [romannumeral]","art_name->[concept] [trans] [anyPawn_nameShort]","art_name->[concept] [trans] [anyPawn_nameShort]","art_name->[concept]","art_name->[color] [concept]","art_name->[color] [artname]","art_name->[color] [terrainfeature]","art_name->A [art_adjective] [concept]","art_name->[concept] No. [digit]","art_name->[artname] No. [digit]","art_name->[artname] No. [digit][digit]","art_name->[digit] [trans] [anyPawn_nameShort]"]}}},{"defName":"ArtName_Furniture","include":{"li":"ArtNameUtility"},"rulePack":{"rulesStrings":{"li":["art_name->[anyPawn_nameShort]'s [positiveconcept]","art_name->[positiveconcept]","art_name->The [animal]","art_name->[badasscolor] [animal]","art_name->[anyPawn_nameShort]'s [color]"]},"rulesRaw":{"li":[{"$":{"Class":"Rule_File"},"keyword":"positiveconcept","path":"NameBanks/Nouns_Concepts_Positive"},{"$":{"Class":"Rule_File"},"keyword":"animal","path":"NameBanks/Nouns_Animals"},{"$":{"Class":"Rule_File"},"keyword":"badasscolor","path":"NameBanks/ColorsBadass"}]}}},{"defName":"ArtName_SarcophagusPlate","include":{"li":"ArtNameUtility"},"rulePack":{"rulesStrings":{"li":["art_name->[angstyadjective] [anyPawn_nameShort]","art_name->[anyPawn_nameShort]","art_name->[color] [anyPawn_nameShort]","art_name->[angstyadjective] [angstyconcept]","art_name->[angstyadjective] [badassconcept]"]},"rulesRaw":{"li":[{"$":{"Class":"Rule_File"},"keyword":"angstyadjective","path":"NameBanks/Adjectives_Angsty"},{"$":{"Class":"Rule_File"},"keyword":"badassperson","path":"NameBanks/Nouns_BadassPersons"},{"$":{"Class":"Rule_File"},"keyword":"color","path":"NameBanks/Colors"},{"$":{"Class":"Rule_File"},"keyword":"angstyconcept","path":"NameBanks/Nouns_Concepts_Angsty"},{"$":{"Class":"Rule_File"},"keyword":"badassconcept","path":"NameBanks/Nouns_Concepts_Badass"}]}}},{"defName":"ArtNameUtility","rulePack":{"rulesRaw":{"li":[{"$":{"Class":"Rule_File"},"keyword":"art_adjective","pathList":{"li":["NameBanks/Adjectives_Badass","NameBanks/Adjectives_Angsty","NameBanks/Adjectives_Angsty"]}},{"$":{"Class":"Rule_File"},"keyword":"artname","path":"NameBanks/Nouns_Artworks"}]}}}]}}