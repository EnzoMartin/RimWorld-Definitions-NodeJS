module.exports={"Defs":{"StatDef":[{"defName":"MedicalOperationSpeed","label":"medical operation speed","description":"Speed at which the character performs medical operations.","category":"PawnWork","defaultBaseValue":1,"toStringStyle":"PercentZero","skillNeedFactors":{"li":{"$":{"Class":"SkillNeed_BaseBonus"},"skill":"Medicine","baseFactor":0.4,"bonusFactor":0.06}},"capacityFactors":{"li":[{"capacity":"Consciousness","weight":1},{"capacity":"Sight","weight":0.7},{"capacity":"Manipulation","weight":0.9}]}},{"defName":"SurgerySuccessChance","label":"surgery success chance","description":"The likelihood that a character will succeed when attempting to perform a surgery. Failures can result in simple wasted time and medicine, or catastrophic damage to the patient.","category":"PawnWork","defaultBaseValue":1,"toStringStyle":"PercentZero","skillNeedFactors":{"li":{"$":{"Class":"SkillNeed_Direct"},"skill":"Medicine","factorsPerLevel":{"li":[0.05,0.25,0.4,0.5,0.6,0.7,0.8,0.85,0.9,0.92,0.93,0.94,0.95,0.955,0.96,0.965,0.97,0.975,0.98,0.985,0.99]}}},"capacityFactors":{"li":[{"capacity":"Consciousness","weight":1},{"capacity":"Sight","weight":0.4},{"capacity":"Manipulation","weight":0.4}]}},{"defName":"BaseHealingQuality","label":"base healing quality","description":"Base quality of treatment given to patients when acting as a doctor.","category":"PawnWork","defaultBaseValue":1,"toStringStyle":"PercentZero","skillNeedFactors":{"li":{"$":{"Class":"SkillNeed_Direct"},"skill":"Medicine","factorsPerLevel":{"li":[0.1,0.3,0.5,0.6,0.7,0.8,0.9,0.95,1,1.05,1.1,1.15,1.2,1.25,1.3,1.35,1.4,1.45,1.5,1.55,1.6]}}},"capacityFactors":{"li":[{"capacity":"Sight","weight":0.7},{"capacity":"Manipulation","weight":0.9}]}},{"defName":"HealingSpeed","label":"healing speed","description":"Speed at which the character heals wounds as a doctor.","category":"PawnWork","defaultBaseValue":1,"toStringStyle":"PercentZero","skillNeedFactors":{"li":{"$":{"Class":"SkillNeed_BaseBonus"},"skill":"Medicine","baseFactor":0.4,"bonusFactor":0.06}},"capacityFactors":{"li":[{"capacity":"Consciousness","weight":1},{"capacity":"Sight","weight":0.8},{"capacity":"Manipulation","weight":0.9}]}}]}}