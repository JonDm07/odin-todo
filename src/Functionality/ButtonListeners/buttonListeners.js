import { hero } from "../../DOM/hero";
import { navBar } from "../../DOM/navbar";
import { objectsInterface } from "../projects";
import { renameModal } from "../../DOM/renameModal";
import { formValidation } from "../formValidation";
import { modals } from "../Modals";
import { taskDiv } from "../../DOM/taskDiv";
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

  doRenameButton: function () {
    const renameButton = document.querySelectorAll(".rename");

    renameButton.forEach((button) => {
      button.onclick = function () {
        const renameModal = document.querySelector(".rename-modal");

        buttonInterface.indexOfProject = button.getAttribute("data-num");

        modals.displayModal(renameModal);
      };
    });
  },

  doDeleteProjectButton: function () {
    const deleteButton = document.querySelectorAll(".delete");

    deleteButton.forEach((button) => {
      button.onclick = function () {
        const indexOfProject = button.getAttribute("data-num");

        objectsInterface.projectsArray.splice(indexOfProject, 1);

        hero.displayProjects(true);

        navBar.updateProjectsNum(objectsInterface.projectsArray.length);

        buttonListeners.doRenameButton();
        buttonListeners.doDeleteProjectButton();
        buttonListeners.doCheckBox();
        buttonListeners.doAddTaskButton();
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

  doAddTaskButton: function () {
    const addButtons = document.querySelectorAll(".add-task");

    addButtons.forEach((button) => {
      button.onclick = function () {
        const modal = document.querySelector(".task-modal");

        buttonInterface.indexOfProject = button.getAttribute("data-num");

        modals.displayModal(modal);
      };
    });
  },
};
