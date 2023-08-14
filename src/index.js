import { homepage } from "./DOM/homePage.js";
import { modalsInterface } from "./DOM/Modals/modalsInteface.js";
import { projectModal } from "./DOM/Modals/projectModal.js";
import { renameModal } from "./DOM/Modals/renameModal.js";
import { objectsInterface } from "./Functionality/projects.js";
import {
  getProjectsFromStorage,
  storeProjectsInStorage,
} from "./Functionality/storageFcs.js";

let projects = getProjectsFromStorage();

objectsInterface.projectsArray = projects;

homepage.makeHomepage();

modalsInterface.clearInputs(projectModal.div);
