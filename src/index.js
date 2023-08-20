import { homepage } from "./DOM/homePage.js";
import { modalsInterface } from "./DOM/Modals/modalsInteface.js";
import { projectModal } from "./DOM/Modals/projectModal.js";
import { renameModal } from "./DOM/Modals/renameModal.js";
import { objectsInterface } from "./Functionality/projects.js";
import { storage } from "./Functionality/storageFcs.js";

let projects = storage.getProjectsFromStorage();

objectsInterface.projectsArray = projects;

homepage.makeHomepage();
