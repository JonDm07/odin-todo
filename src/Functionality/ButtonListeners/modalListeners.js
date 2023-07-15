import { renameModal } from "../../DOM/renameModal";
import { modals } from "../Modals";
import { formValidation } from "../formValidation";
import { taskDiv } from "../../DOM/taskDiv";
import { objectsInterface } from "../projects";
import { buttonInterface, buttonListeners } from "./buttonListeners";
import { hero } from "../../DOM/hero";
import { navBar } from "../../DOM/navbar";
import { objectDivs } from "./objectDivsListeners";

export const modalListeners = {
  doRenameModalListeners: function () {
    const closeButton = renameModal.closeButton();

    closeButton.addEventListener("click", () => {
      renameModal.modalDiv.style.display = "";
    });

    const submitButton = renameModal.submitButton();

    submitButton.addEventListener("click", (e) => {
      e.preventDefault();

      const input = document.querySelector("#project-rename");

      const newName = input;
      const project =
        objectsInterface.projectsArray[buttonInterface.indexOfProject];

      if (formValidation.checkIfEmpty(newName.value) === 400) {
        modals.changeInputError(newName, 400);
        return;
      } else if (
        formValidation.checkSameName(
          objectsInterface.projectsArray,
          newName.value
        ) === 401
      ) {
        modals.changeInputError(newName, 401);
        return;
      }
      objectsInterface.changeName(project, newName.value);

      navBar.updateProjectList();

      hero.displayProjects(true);
      objectDivs.doRenameButton();

      modals.displayModal(renameModal.modalDiv);
      modals.changeInputError(newName, false);
    });
  },

  doTaskModalSubmit: function () {
    const button = document.querySelector(".task-modal > form > button");
    const type = "task";

    button.onclick = function (e) {
      e.preventDefault();

      const modal = document.querySelector(".task-modal");

      if (formValidation.submitForm(modal, type) === true) {
        return;
      } else {
        taskDiv.displayTasks(
          objectsInterface.projectsArray[buttonInterface.indexOfProject]
        );

        modals.displayModal(modal);
      }
    };
  },
  doProjectModal: function () {
    const button = document.querySelector(".nav-modal > form > button");
    const type = "project";

    button.addEventListener("click", (e) => {
      e.preventDefault();

      const modal = document.querySelector(".nav-modal");

      if (formValidation.submitForm(modal, type) === true) {
        return;
      } else {
        modals.displayModal(modal);

        navBar.updateProjectList();
        navBar.updateProjectButtonText();
        navBar.updateProjectsNum(objectsInterface.projectsArray.length);

        hero.displayProjects(true);
      }
    });
  },
};
