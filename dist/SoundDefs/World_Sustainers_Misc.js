module.exports={"DefPackage-SoundDef":{"SoundDef":[{"defName":"FireBurning","sustain":true,"eventNames":"","maxSimultaneous":1,"priorityMode":"PrioritizeNearest","subSounds":{"li":{"grains":{"li":{"$":{"Class":"AudioGrain_Clip"},"clipPath":"Misc/Fire/BurningLoop"}},"volumeRange":{"min":61,"max":61},"pitchRange":{"min":1.190761,"max":0.8304348},"paramMappings":{"li":[{"inParam":{"$":{"Class":"SoundParamSource_AggregateSize"}},"outParam":{"$":{"Class":"SoundParamTarget_PropertyHighPass"},"filterProperty":"Cutoff"},"paramUpdateMode":"Constant","curve":{"points":{"li":[{"loc":{"x":0.6926602,"y":265.3306}},{"loc":{"x":2.202203,"y":50.08133}},{"loc":{"x":4.875373,"y":-2.766907}}]}}},{"inParam":{"$":{"Class":"SoundParamSource_AggregateSize"}},"outParam":{"$":{"Class":"SoundParamTarget_Volume"}},"paramUpdateMode":"Constant","curve":{"points":{"li":[{"loc":{"x":0.3816619,"y":0.1522805}},{"loc":{"x":4.838721,"y":0.9683864}},{"loc":{"x":13.89854,"y":1.049647}}]}}}]},"filters":{"li":{"$":{"Class":"SoundFilterHighPass"},"cutoffFrequency":10000}}}}},{"defName":"HissSmall","sustain":true,"eventNames":"","maxSimultaneous":1,"priorityMode":"PrioritizeNearest","subSounds":{"li":{"name":"Main hiss","grains":{"li":{"$":{"Class":"AudioGrain_Clip"},"clipPath":"Misc/Hiss/HissSmall"}},"volumeRange":{"min":15,"max":15},"pitchRange":{"min":1.042391,"max":1.021195},"paramMappings":{"li":{"inParam":{"$":{"Class":"SoundParamSource_SourceAge"},"timeType":"RealtimeSeconds"},"outParam":{"$":{"Class":"SoundParamTarget_Pitch"},"pitchType":"Multiply"},"paramUpdateMode":"Constant","curve":{"points":{"li":[{"loc":{"x":-0.02839804,"y":0.8161545}},{"loc":{"x":6.056979,"y":1.037908}},{"loc":{"x":15.57441,"y":1.26183}},{"loc":{"x":39.21252,"y":1.51962}}]}}}},"sustainLoopDurationRange":{"min":5,"max":5},"sustainIntervalRange":{"min":-2.5,"max":-2.5},"sustainAttack":2.5,"sustainRelease":2.5}}},{"defName":"HissJet","sustain":true,"eventNames":"","maxSimultaneous":1,"priorityMode":"PrioritizeNearest","subSounds":{"li":{"name":"Main hiss jet","grains":{"li":{"$":{"Class":"AudioGrain_Clip"},"clipPath":"Misc/Hiss/HissJet"}},"volumeRange":{"min":40,"max":40},"pitchRange":{"min":0.936413,"max":1},"sustainLoopDurationRange":{"min":999,"max":999}}}},{"defName":"Vomit","sustain":true,"eventNames":"","maxSimultaneous":4,"priorityMode":"PrioritizeNearest","sustainFadeoutTime":0.25,"subSounds":{"li":{"muteWhenPaused":true,"grains":{"li":{"$":{"Class":"AudioGrain_Folder"},"clipFolderPath":"Pawn/Human/Vomit"}},"volumeRange":{"min":11.86047,"max":11.86047},"pitchRange":{"min":0.9152174,"max":1.158843},"distRange":{"min":0,"max":51.39535},"sustainLoop":false}}}]}}