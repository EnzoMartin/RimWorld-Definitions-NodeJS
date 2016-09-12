module.exports={"ThinkTrees":{"ThinkTreeDef":[{"defName":"Humanlike","thinkRoot":{"$":{"Class":"ThinkNode_Priority"},"subNodes":{"li":[{"$":{"Class":"ThinkNode_ConditionalLyingDown"},"subNodes":{"li":{"$":{"Class":"ThinkNode_ChancePerHour_Lovin"},"subNodes":{"li":{"$":{"Class":"JobGiver_DoLovin"}}}}}},{"$":{"Class":"ThinkNode_ConditionalMustKeepLyingDown"},"subNodes":{"li":[{"$":{"Class":"JobGiver_GetJoyInBed"}},{"$":{"Class":"JobGiver_KeepLyingDown"}}]}},{"$":{"Class":"ThinkNode_Subtree"},"treeDef":"Downed"},{"$":{"Class":"ThinkNode_Subtree"},"treeDef":"BurningResponse"},{"$":{"Class":"ThinkNode_Subtree"},"treeDef":"MentalStateCritical"},{"$":{"Class":"JobGiver_ReactToCloseMeleeThreat"}},{"$":{"Class":"ThinkNode_Subtree"},"treeDef":"MentalStateNonCritical"},{"$":{"Class":"ThinkNode_SubtreesByTag"},"insertTag":"Humanlike_PostMentalState"},{"$":{"Class":"ThinkNode_ConditionalColonist"},"subNodes":{"li":{"$":{"Class":"JobGiver_Orders"}}}},{"$":{"Class":"ThinkNode_JoinVoluntarilyJoinableLord"},"dutyHook":"HighPriority","subNodes":{"li":{"$":{"Class":"ThinkNode_Subtree"},"treeDef":"LordDuty"}}},{"$":{"Class":"ThinkNode_SubtreesByTag"},"insertTag":"Humanlike_PostDuty"},{"$":{"Class":"ThinkNode_ConditionalPrisoner"},"leaveJoinableLordIfIssuesJob":true,"subNodes":{"li":[{"$":{"Class":"JobGiver_PrisonerEscape"}},{"$":{"Class":"JobGiver_PatientGoToBed"}},{"$":{"Class":"JobGiver_PrisonerGetDressed"}},{"$":{"Class":"ThinkNode_PrioritySorter"},"subNodes":{"li":[{"$":{"Class":"JobGiver_GetFood"}},{"$":{"Class":"JobGiver_GetRest"}},{"$":{"Class":"JobGiver_SatisfyChemicalNeed"}},{"$":{"Class":"ThinkNode_Priority_GetJoy"},"subNodes":{"li":{"$":{"Class":"JobGiver_GetJoy"}}}}]}},{"$":{"Class":"ThinkNode_ConditionalReleased"},"subNodes":{"li":{"$":{"Class":"JobGiver_ExitMapBest"},"defaultLocomotion":"Walk"}}},{"$":{"Class":"JobGiver_WanderCurrentRoom"},"maxDanger":"Deadly"},{"$":{"Class":"JobGiver_IdleError"}}]}},{"$":{"Class":"ThinkNode_ConditionalColonist"},"subNodes":{"li":[{"$":{"Class":"JobGiver_JobQueue"},"leaveJoinableLordIfIssuesJob":true},{"$":{"Class":"JobGiver_SeekAllowedArea"}},{"$":{"Class":"JobGiver_SeekSafeTemperature"}},{"$":{"Class":"JobGiver_DropUnusedInventory"}},{"$":{"Class":"ThinkNode_ConditionalStarving"},"subNodes":{"li":{"$":{"Class":"JobGiver_GetFood"},"leaveJoinableLordIfIssuesJob":true}}},{"$":{"Class":"JobGiver_Work"},"leaveJoinableLordIfIssuesJob":true,"emergency":true},{"$":{"Class":"ThinkNode_JoinVoluntarilyJoinableLord"},"dutyHook":"MediumPriority","subNodes":{"li":{"$":{"Class":"ThinkNode_Subtree"},"treeDef":"LordDuty"}}},{"$":{"Class":"JobGiver_OptimizeApparel"},"leaveJoinableLordIfIssuesJob":true},{"$":{"Class":"ThinkNode_ConditionalNeedPercentageAbove"},"need":"Food","threshold":0.6,"subNodes":{"li":{"$":{"Class":"JobGiver_PackFood"},"leaveJoinableLordIfIssuesJob":true}}}]}},{"$":{"Class":"ThinkNode_TraitBehaviors"}},{"$":{"Class":"ThinkNode_SubtreesByTag"},"insertTag":"Humanlike_PreMain"},{"$":{"Class":"ThinkNode_ConditionalColonist"},"subNodes":{"li":{"$":{"Class":"ThinkNode_PrioritySorter"},"leaveJoinableLordIfIssuesJob":true,"subNodes":{"li":[{"$":{"Class":"JobGiver_GetFood"}},{"$":{"Class":"JobGiver_GetRest"}},{"$":{"Class":"JobGiver_SatisfyChemicalNeed"}},{"$":{"Class":"JobGiver_TakeDrugsForDrugPolicy"}},{"$":{"Class":"ThinkNode_Priority_GetJoy"},"subNodes":{"li":[{"$":{"Class":"JobGiver_GetJoyInBed"}},{"$":{"Class":"JobGiver_GetJoy"}}]}},{"$":{"Class":"JobGiver_Work"}}]}}}},{"$":{"Class":"ThinkNode_SubtreesByTag"},"insertTag":"Humanlike_PostMain"},{"$":{"Class":"ThinkNode_ConditionalColonist"},"subNodes":{"li":{"$":{"Class":"ThinkNode_Tagger"},"tagToGive":"Idle","subNodes":{"li":[{"$":{"Class":"ThinkNode_ConditionalNeedPercentageAbove"},"need":"Joy","threshold":0.9,"invert":true,"subNodes":{"li":{"$":{"Class":"JobGiver_IdleJoy"}}}},{"$":{"Class":"JobGiver_WanderColony"},"maxDanger":"None"}]}}}},{"$":{"Class":"ThinkNode_ConditionalPrisoner"},"invert":true,"subNodes":{"li":{"$":{"Class":"ThinkNode_ConditionalNeutralFaction"},"subNodes":{"li":[{"$":{"Class":"JobGiver_PatientGoToBed"}},{"$":{"Class":"JobGiver_ExitMapBest"},"defaultLocomotion":"Walk"}]}}}},{"$":{"Class":"JobGiver_WanderAnywhere"},"maxDanger":"Deadly"},{"$":{"Class":"JobGiver_IdleError"}}]}}},{"defName":"HumanlikeConstant","thinkRoot":{"$":{"Class":"ThinkNode_Priority"},"subNodes":{"li":{"$":{"Class":"ThinkNode_ConditionalCanDoConstantThinkTreeJobNow"},"subNodes":{"li":[{"$":{"Class":"JobGiver_FleeExplosion"}},{"$":{"Class":"JobGiver_ConfigurableHostilityResponse"}},{"$":{"Class":"ThinkNode_Subtree"},"treeDef":"LordDutyConstant"}]}}}}}]}}