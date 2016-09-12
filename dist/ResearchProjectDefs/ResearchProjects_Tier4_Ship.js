module.exports={"ResearchProjectDefs":{"ResearchProjectDef":[{"$":{"Name":"ShipResearchProjectBase","Abstract":"True"},"requiredResearchBuilding":"HiTechResearchBench","requiredResearchFacilities":{"li":"MultiAnalyzer"}},{"$":{"ParentName":"ShipResearchProjectBase"},"defName":"ShipBasics","label":"shipbuilding basics","description":"Allows you to start researching more advanced shipbuilding technologies and eventually build a ship to escape the planet.","baseCost":250,"techLevel":"Spacer"},{"$":{"ParentName":"ShipResearchProjectBase"},"defName":"ShipCryptosleep","label":"ship cryptosleep caskets","description":"Allows you to construct ship cryptosleep caskets for transporting cryptosleeping colonists between the stars.","baseCost":750,"techLevel":"Spacer","prerequisites":{"li":["ShipBasics","Cryptosleep","MicroelectronicsBasics"]}},{"$":{"ParentName":"ShipResearchProjectBase"},"defName":"ShipReactor","label":"ship antimatter reactor","description":"Allows you to use an antimatter containment core to build a working antimatter reactor to power a ship.","baseCost":1400,"techLevel":"Spacer","prerequisites":{"li":["ShipBasics","MicroelectronicsBasics"]}},{"$":{"ParentName":"ShipResearchProjectBase"},"defName":"ShipEngine","label":"ship antimatter propulsion","description":"Allows you to use an antimatter containment core to construct an antimatter drive for a ship.","baseCost":2500,"techLevel":"Spacer","prerequisites":{"li":"ShipBasics"}},{"$":{"ParentName":"ShipResearchProjectBase"},"defName":"ShipComputerCore","label":"ship computer core","description":"Allows coercing an existing AI persona into a usable AI computer core for ship guidance.","baseCost":1500,"techLevel":"Spacer","prerequisites":{"li":["ShipBasics","MicroelectronicsBasics"]}}]}}