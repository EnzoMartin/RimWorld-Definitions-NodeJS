module.exports={"IncidentDefs":{"IncidentDef":[{"$":{"Name":"DiseaseIncident","Abstract":"True"},"workerClass":"IncidentWorker_Disease","category":"Disease"},{"$":{"ParentName":"DiseaseIncident"},"defName":"Disease_Flu","label":"flu","diseaseIncident":"Flu","diseaseVictimFractionRange":{"min":0.2,"max":0.5}},{"$":{"ParentName":"DiseaseIncident"},"defName":"Disease_Plague","label":"plague","diseaseIncident":"Plague","diseaseVictimFractionRange":{"min":0.2,"max":0.5}},{"$":{"ParentName":"DiseaseIncident"},"defName":"Disease_Malaria","label":"malaria","diseaseIncident":"Malaria","diseaseVictimFractionRange":{"min":0.2,"max":0.5}},{"$":{"ParentName":"DiseaseIncident"},"defName":"Disease_SleepingSickness","label":"sleeping sickness","diseaseIncident":"SleepingSickness","diseaseVictimFractionRange":{"min":0.2,"max":0.5}},{"$":{"ParentName":"DiseaseIncident"},"defName":"Disease_FibrousMechanites","label":"fibrous mechanites","diseaseIncident":"FibrousMechanites","diseaseVictimFractionRange":{"min":0.2,"max":0.5}},{"$":{"ParentName":"DiseaseIncident"},"defName":"Disease_SensoryMechanites","label":"sensory mechanites","diseaseIncident":"SensoryMechanites","diseaseVictimFractionRange":{"min":0.2,"max":0.5}},{"$":{"ParentName":"DiseaseIncident"},"defName":"Disease_GutWorms","label":"gut worms","diseaseIncident":"GutWorms","diseaseVictimFractionRange":{"min":0.2,"max":0.5},"diseasePartsToAffect":{"li":"Stomach"}},{"$":{"ParentName":"DiseaseIncident"},"defName":"Disease_MuscleParasites","label":"muscle parasites","diseaseIncident":"MuscleParasites","diseaseVictimFractionRange":{"min":0.2,"max":0.5}}]}}