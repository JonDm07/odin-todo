import { hero } from "./hero";
import { navBar } from "./navbar";
import { objectsInterface } from "./projects";
import { renameModal } from "./renameModal";

export const buttonInterface = {
  indexOfProject: undefined,
};

export const buttonListeners = {
  doHomepageListeners: function () {
    const addProjectButton = navBar.addProjectButton();
    addProjectButton.addEventListener("click", () => {
      navBar.displayModal();
    });
  },

  doRenameModalListeners: function () {
    const closeButton = renameModal.closeButton();

    closeButton.addEventListener("click", () => {
      renameModal.modalDiv.style.display = "none";
    });

    const submitButton = renameModal.submitButton();

    submitButton.addEventListener("click", (e) => {
      e.preventDefault();

      const newName = document.querySelector("#project-rename").value;
      const project =
        objectsInterface.projectsArray[buttonInterface.indexOfProject];

      objectsInterface.changeName(project, newName);

      hero.displayProjects(true);
    });
  },
};
