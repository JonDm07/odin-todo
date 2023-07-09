import { homepage } from "./DOM/homepage";
import { navBar } from "./DOM/navbar";
import { createModal } from "./DOM/projectsModal";
import { formValidation } from "./Functionality/formValidation.js";
import { hero } from "./DOM/hero.js";
import { objectsInterface } from "./Functionality/projects";
import { renameModal } from "./DOM/renameModal";
import { buttonListeners } from "./Functionality/buttonListeners";

homepage.makeHomepage(true);

hero.displayProjects(false);

console.log(objectsInterface.projectsArray);
