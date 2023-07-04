import { homepage } from "./homepage";
import { navBar } from "./navbar";
import { createModal } from "./projectsModal";
import { formValidation } from "./formValidation.js";
import { hero } from "./hero.js";
import { objectsInterface } from "./projects";
import { renameModal } from "./renameModal";
import { buttonListeners } from "./buttonListeners";

homepage.makeHomepage(true);

buttonListeners.doHomepageListeners();
buttonListeners.doRenameModalListeners();

document
  .querySelector(".nav-modal > form > button")
  .addEventListener("click", (e) => {
    e.preventDefault();

    formValidation.submitForm();

    navBar.displayModal();

    hero.displayProjects(true);

    navBar.updateProjectsNum(objectsInterface.projectsArray.length);
  });

hero.displayProjects(false);
