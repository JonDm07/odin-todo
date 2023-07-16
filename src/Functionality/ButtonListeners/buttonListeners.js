import { hero } from "../../DOM/hero";
import { navBar } from "../../DOM/navbar";
import { objectsInterface } from "../projects";
import { renameModal } from "../../DOM/renameModal";
import { formValidation } from "../formValidation";
import { modals } from "../Modals";
import { projectModal } from "../../DOM/projectsModal";

export const buttonInterface = {
  indexOfProject: 0,
};

export const buttonListeners = {
  doHomepageListeners: function () {
    const addProjectButton = navBar.addProjectButton();
    addProjectButton.addEventListener("click", () => {
      const modal = document.querySelector(".nav-modal");
      modals.displayModal(modal);
      navBar.updateProjectButtonText();
    });
  },
};
