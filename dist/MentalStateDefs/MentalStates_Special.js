module.exports={"Defs":{"MentalStateDef":[{"$":{"ParentName":"BaseMentalState"},"defName":"WanderConfused","label":"confused wandering","stateClass":"MentalState_WanderConfused","category":"Sad","minTicksBeforeRecovery":3500,"recoveryMtbDays":0.2,"blockNormalThoughts":true,"nameColor":"(0.65, 0.9, 0.93)","beginLetterLabel":"confusion","beginLetter":"{0} has broken down and is wandering around confused.","beginLetterType":"BadNonUrgent","recoveryMessage":"{0} is no longer confused.","baseInspectLine":"Mental state: Confused and wandering"},{"$":{"ParentName":"BaseMentalState"},"defName":"PanicFlee","label":"panic fleeing","stateClass":"MentalState_PanicFlee","category":"Panic","nameColor":"(0.65, 0.9, 0.93)","beginLetterLabel":"flee","beginLetter":"{0} is fleeing in panic.","recoveryMessage":"{0} is no longer fleeing in panic.","baseInspectLine":"Mental state: Fleeing in panic","blockNormalThoughts":true},{"$":{"ParentName":"BaseMentalState","Name":"Manhunter"},"defName":"Manhunter","stateClass":"MentalState_Manhunter","label":"manhunter","category":"Aggro","nameColor":"(0.9,0.2,0.5)","beginLetterLabel":"manhunter","beginLetter":"{0} has become a manhunter!","recoveryMessage":"{0}'s manhunting bloodlust has come to an end.","baseInspectLine":"Maddened: Manhunter","stateEffecter":"Manhunter"},{"$":{"ParentName":"Manhunter"},"defName":"ManhunterPermanent","minTicksBeforeRecovery":99999999},{"$":{"ParentName":"BaseMentalState"},"defName":"SocialFighting","stateClass":"MentalState_SocialFighting","label":"social fighting","minTicksBeforeRecovery":420,"recoveryMtbDays":0.02,"category":"Aggro","nameColor":"(0.88,0.48,0.16)","baseInspectLine":"Mental state: Social fighting"}]}}