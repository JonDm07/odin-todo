import { homepage } from "./DOM/homepage";
import { navBar } from "./DOM/navbar";
import { createModal } from "./DOM/projectsModal";
import { formValidation } from "./Functionality/formValidation.js";
import { hero } from "./DOM/hero.js";
import { objectsInterface } from "./Functionality/projects";
import { renameModal } from "./DOM/renameModal";
import {
  buttonListeners,
  buttonInterface,
} from "./Functionality/buttonListeners";
homepage.makeHomepage(true);

hero.displayProjects(false);

let project = objectsInterface.projectsArray[buttonInterface.indexOfProject];

console.log(project);

console.log(
  objectsInterface.getIndexOfProject(objectsInterface.projectsArray[0].name)
);
