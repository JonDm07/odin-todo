import { homepage } from "./DOM/homepage";
import { navBar } from "./DOM/navbar";
import { createModal } from "./DOM/projectsModal";
import { formValidation } from "./Functionality/formValidation.js";
import { hero, projectDiv, taskDiv } from "./DOM/hero.js";
import { objectsInterface } from "./Functionality/projects";
import { renameModal } from "./DOM/renameModal";
import {
  buttonListeners,
  buttonInterface,
} from "./Functionality/ButtonListeners/buttonListeners";
homepage.makeHomepage(true);

projectDiv.displayProjects(false);
