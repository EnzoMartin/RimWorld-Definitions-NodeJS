module.exports={"Defs":{"InteractionDef":[{"defName":"BuildRapport","label":"try to get to know","symbol":"Things/Mote/SpeechSymbols/BuildRapport","initiatorXpGainSkill":"Social","initiatorXpGainAmount":30,"recipientThought":"RapportBuilt","logRulesInitiator":{"rulesStrings":{"li":"logentry->Tried to build rapport with [other_nameShortIndef]."}},"logRulesRecipient":{"rulesStrings":{"li":"logentry->Listened to [other_nameShortIndef] build rapport with me."}}},{"defName":"RecruitAttempt","label":"recruit attempt","symbol":"Things/Mote/SpeechSymbols/PrisonerRecruit","workerClass":"InteractionWorker_RecruitAttempt","initiatorXpGainSkill":"Social","initiatorXpGainAmount":170,"logRulesInitiator":{"rulesStrings":{"li":"logentry->Attempted to recruit [other_nameShortIndef]."}},"logRulesRecipient":{"rulesStrings":{"li":"logentry->Listened to a recruitment pitch from [other_nameShortIndef]."}}}]}}