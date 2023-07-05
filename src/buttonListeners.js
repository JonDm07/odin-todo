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

  doRenameButton: function () {
    const renameButton = document.querySelectorAll(".rename");

    renameButton.forEach((button) => {
      button.onclick = function () {
        const renameModal = document.querySelector(".rename-modal");

        buttonInterface.indexOfProject = button.getAttribute("data-num");

        if (
          renameModal.style.display === "" ||
          renameModal.style.display === "none"
        ) {
          renameModal.style.display = "block";
        }
      };
    });
  },

  doDeleteProjectButton: function () {
    const deleteButton = document.querySelectorAll(".project-div > .delete");

    deleteButton.forEach((button) => {
      button.onclick = function () {
        const indexOfProject = button.getAttribute("data-num");

        objectsInterface.projectsArray.splice(indexOfProject, 1);

        hero.displayProjects(true);

        navBar.updateProjectsNum(objectsInterface.projectsArray.length);

        buttonListeners.doRenameButton();
        buttonListeners.doDeleteProjectButton();
        buttonListeners.doCheckBox();
      };
    });
  },

  doCheckBox: function () {
    const checkBox = document.querySelectorAll(".checkbox");

    checkBox.forEach((checkBox) => {
      checkBox.onclick = function () {
        if (
          checkBox.style.backgroundColor === "" ||
          checkBox.style.backgroundColor === "rgb(255, 42, 42)"
        ) {
          checkBox.style.backgroundColor = "rgb(31, 171, 26)";
        } else {
          checkBox.style.backgroundColor = "rgb(255, 42, 42)";
        }
      };
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
      buttonListeners.doRenameButton();

      renameModal.modalDiv.style.display = "none";
    });
  },
};
