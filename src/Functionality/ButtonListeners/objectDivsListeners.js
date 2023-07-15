import { objectsInterface } from "../projects";
import { buttonInterface } from "./buttonListeners";
import { modals } from "../Modals";
import { hero } from "../../DOM/hero";
import { navBar } from "../../DOM/navbar";

export const objectDivs = {
  doRenameButton: function () {
    const renameButton = document.querySelectorAll(".rename");

    renameButton.forEach((button) => {
      button.onclick = function () {
        const renameModal = document.querySelector(".rename-modal");

        buttonInterface.indexOfProject = button.getAttribute("data-num");

        modals.displayModal(renameModal);
        navBar.updateProjectList();
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

        navBar.updateProjectList();
        navBar.updateProjectsNum(objectsInterface.projectsArray.length);

        objectDivs.doRenameButton();
        objectDivs.doDeleteProjectButton();
        objectDivs.doCheckBox();
        objectDivs.doAddTaskButton();
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
