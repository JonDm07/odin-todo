import { hero } from "../DOM/hero";
import { navBar } from "../DOM/navbar";
import { objectsInterface } from "./projects";
import { renameModal } from "../DOM/renameModal";
import { formValidation } from "./formValidation";
import { modals } from "./displayModals";
import { taskDiv } from "../DOM/taskDiv";
import { projectModal } from "../DOM/projectsModal";

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

    const submitProjectButton = document.querySelector(
      ".nav-modal > form > button"
    );

    const type = "project";

    submitProjectButton.addEventListener("click", (e) => {
      e.preventDefault();

      const modal = document.querySelector(".nav-modal");

      formValidation.submitForm(modal, type);

      navBar.updateProjectButtonText();
      navBar.updateProjectsNum(objectsInterface.projectsArray.length);

      hero.displayProjects(true);
      modals.displayModal(modal);
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

  doRenameModalListeners: function () {
    const closeButton = renameModal.closeButton();

    closeButton.addEventListener("click", () => {
      renameModal.modalDiv.style.display = "none";
    });

    const submitButton = renameModal.submitButton();

    submitButton.addEventListener("click", (e) => {
      e.preventDefault();

      const input = document.querySelector("#project-rename");

      const newName = input.value;
      const project =
        objectsInterface.projectsArray[buttonInterface.indexOfProject];

      if (
        formValidation.checkIfEmpty(newName) === true ||
        formValidation.checkSameName(objectsInterface.projectsArray, newName)
      ) {
        input.value = "";
        input.style.border = "2px solid red";
        input.setAttribute("placeholder", "Please enter valid name");
        return;
      }

      objectsInterface.changeName(project, newName);

      hero.displayProjects(true);
      buttonListeners.doRenameButton();

      renameModal.modalDiv.style.display = "none";
    });
  },

  doTaskModal: function () {
    const button = document.querySelector(".task-modal > form > button");
    const type = "task";

    button.onclick = function (e) {
      e.preventDefault();

      const modal = document.querySelector(".task-modal");

      formValidation.submitForm(modal, type);

      taskDiv.displayTasks(
        objectsInterface.projectsArray[buttonInterface.indexOfProject]
      );
    };
  },
};
