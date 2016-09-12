module.exports={"TraitDefs":{"TraitDef":[{"defName":"SpeedOffset","commonality":1,"degreeDatas":{"li":[{"label":"slowpoke","description":"NAME is always falling behind the group whenever HE goes anywhere.","degree":-1,"statOffsets":{"MoveSpeed":-0.2}},{"label":"fast walker","description":"NAME likes to be where HE's going. HECAP walks quicker than most people.","degree":1,"statOffsets":{"MoveSpeed":0.2}},{"label":"jogger","description":"NAME always moves with a sense of urgency - so much so that others often fail to keep up.","degree":2,"statOffsets":{"MoveSpeed":0.4}}]}},{"defName":"DrugDesire","commonality":1,"degreeDatas":{"li":[{"label":"chemical fascination","description":"NAME has an intense fascination with chemical sources of enjoyment. HECAP will consume much more of them, and will sometimes go on hard drug binges. HECAP will ignore directives to not use pleasurable drugs.","degree":2,"randomMentalState":"BingingDrugExtreme","randomMentalStateMtbDaysMoodCurve":{"points":{"li":["(0, 7.5)","(50, 25)","(100, 50)"]}}},{"label":"chemical interest","description":"NAME has an unusual interest in chemical sources of enjoyment. HECAP will consume more of them, and will sometimes go on social drug binges. HECAP will ignore directives to not use pleasurable drugs.","degree":1,"randomMentalState":"BingingDrugMajor","randomMentalStateMtbDaysMoodCurve":{"points":{"li":["(0, 15)","(50, 50)","(100, 100)"]}}},{"label":"teetotaler","description":"NAME abhors the idea of gaining pleasure from chemicals, and avoids alcohol and pleasurable drugs.","degree":-1,"disallowedMentalStates":{"li":["BingingDrugExtreme","BingingDrugMajor"]}}]}},{"defName":"NaturalMood","commonality":1,"degreeDatas":{"li":[{"label":"sanguine","description":"NAME is just naturally upbeat about HIS situation, pretty much all the time, no matter what it is.","degree":2},{"label":"optimist","description":"NAME is naturally optimistic about life. It's hard to get HIM down.","degree":1},{"label":"pessimist","description":"NAME tends to look on the bad side of life.","degree":-1},{"label":"depressive","description":"NAME is perenially unhappy. HECAP has trouble sustaining a good mood even when everything is fine.","degree":-2}]}},{"defName":"Nerves","commonality":1,"degreeDatas":{"li":[{"label":"iron-willed","description":"NAME's will is an iron shield. HECAP keeps going through thick and thin, when others broke down long before.","degree":2,"statOffsets":{"MentalBreakThreshold":-0.18}},{"label":"steadfast","description":"NAME is mentally tough and won't break down under stresses that would crack most people.","degree":1,"statOffsets":{"MentalBreakThreshold":-0.09}},{"label":"nervous","description":"NAME tends to crack under pressure.","degree":-1,"statOffsets":{"MentalBreakThreshold":0.08}},{"label":"volatile","description":"NAME is on a hair-trigger all the time. HECAP is the first to break in any tough situation.","degree":-2,"statOffsets":{"MentalBreakThreshold":0.15}}]}},{"defName":"Neurotic","commonality":0.5,"degreeDatas":{"li":[{"label":"neurotic","description":"NAME likes to have things squared away. HECAP will work harder than most to attain this state of affairs, but HIS nerves can get the better of HIM.","degree":1,"statOffsets":{"WorkSpeedGlobal":0.2,"MentalBreakThreshold":0.08}},{"label":"very neurotic","description":"NAME feels constantly nervous about everything that has to get done. HECAP will work extremely hard to attain this state of affairs, but HIS nerves can easily get the better of HIM.","degree":2,"statOffsets":{"WorkSpeedGlobal":0.4,"MentalBreakThreshold":0.14}}]}},{"defName":"Industriousness","commonality":1,"degreeDatas":{"li":[{"label":"industrious","description":"NAME has an easy time staying on-task and focused, and gets things done much faster than the average person.","degree":2,"statOffsets":{"WorkSpeedGlobal":0.35}},{"label":"hard worker","description":"NAME is a natural hard worker and will finish tasks faster than most.","degree":1,"statOffsets":{"WorkSpeedGlobal":0.2}},{"label":"lazy","description":"NAME is a little bit lazy.","degree":-1,"statOffsets":{"WorkSpeedGlobal":-0.2}},{"label":"slothful","description":"NAME loves idleness and hates anything productive. HECAP moves slowly and rarely stays focused on a task.","degree":-2,"statOffsets":{"WorkSpeedGlobal":-0.35}}]}},{"defName":"PsychicSensitivity","commonality":1.2,"degreeDatas":{"li":[{"label":"psychically hypersensitive","description":"NAME's mind is like a psychic tuning fork. HECAP is extremely sensitive to psychic phenomena.","degree":2,"statOffsets":{"PsychicSensitivity":0.8}},{"label":"psychically sensitive","description":"NAME's mind is unusually sensitive to psychic phenomena.","degree":1,"statOffsets":{"PsychicSensitivity":0.4}},{"label":"psychically dull","description":"NAME's mind is psychically out of tune with others. HECAP isn't as affected by psychic phenomena.","degree":-1,"statOffsets":{"PsychicSensitivity":-0.5}},{"label":"psychically deaf","description":"NAME's mind works on a psychic frequency different from everyone else. HECAP just isn't affected by psychic phenomena.","degree":-2,"statOffsets":{"PsychicSensitivity":-1}}]}},{"defName":"TemperaturePreference","commonality":1.2,"degreeDatas":{"li":[{"label":"cold lover","description":"NAME's body produces tremendous amounts of heat. HECAP is comfortable in temperatures which would make anyone else shiver, but HE doesn't like heat.","degree":2,"statOffsets":{"ComfyTemperatureMin":-22,"ComfyTemperatureMax":-4}},{"label":"cold tolerant","description":"NAME handles cool temperatures better than most.","degree":1,"statOffsets":{"ComfyTemperatureMin":-14,"ComfyTemperatureMax":-2}},{"label":"heat tolerant","description":"NAME handles warm temperatures better than most.","degree":-1,"statOffsets":{"ComfyTemperatureMax":14,"ComfyTemperatureMin":2}},{"label":"heat lover","description":"NAME loves hot weather - but HE doesn't handle cold very well.","degree":-2,"statOffsets":{"ComfyTemperatureMax":22,"ComfyTemperatureMin":4}}]}},{"defName":"ShootingAccuracy","commonality":0.9,"degreeDatas":{"li":[{"label":"careful shooter","description":"NAME is a pretty good shot, but HE needs more time to focus on HIS target.","commonality":0.4,"degree":1,"statOffsets":{"AimingDelayFactor":0.25,"ShootingAccuracy":0.5},"skillGains":{"li":{"key":"Shooting","value":3}}},{"label":"trigger-happy","description":"Pew! Pew! Pew! NAME is a terrible shot, but HE doesn't care, because guns are awesome!","commonality":0.5,"degree":-1,"statOffsets":{"AimingDelayFactor":-0.5,"ShootingAccuracy":-0.5},"skillGains":{"li":{"key":"Shooting","value":-2}}}]},"conflictingTraits":{"li":"Brawler"},"requiredWorkTags":{"li":"Violent"}},{"defName":"Beauty","commonality":0.5,"degreeDatas":{"li":[{"label":"beautiful","description":"NAME is exceptionally beautiful, with an exotic-yet-familiar facial structure and an arresting gaze. People are attracted to HIM before HE even opens HIS mouth.","degree":2},{"label":"pretty","description":"NAME has a pretty face, which predisposes people to like HIM.","degree":1},{"label":"ugly","description":"NAME is somewhat ugly. This subtly repels others during social interactions.","degree":-1},{"label":"staggeringly ugly","description":"NAME is staggeringly ugly. HISCAP face looks like a cross between a drawing by an untalented child, a malformed fetus in a jar of formaldehyde, and a piece of modern art. Others must exert conscious effort to look at HIM while conversing.","degree":-2}]}}]}}