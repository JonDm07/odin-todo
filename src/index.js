import { homepage } from "./DOM/homePage.js";
import { modalsInterface } from "./DOM/Modals/modalsInteface.js";
import { projectModal } from "./DOM/Modals/projectModal.js";
import { renameModal } from "./DOM/Modals/renameModal.js";

homepage.makeHomepage();

modalsInterface.clearInputs(projectModal.div);
