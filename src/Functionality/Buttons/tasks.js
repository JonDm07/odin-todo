import { heroInterface } from "../../DOM/hero";
import { modalsInterface } from "../../DOM/Modals/modalsInteface";
import { renameModal } from "../../DOM/Modals/renameModal";
import { objectsInterface } from "../projects";
import { descriptionModal } from "../../DOM/Modals/descriptionModal";

export const taskButtons = {
  addAllButtons: function () {
    this.addDeleteButton();
    this.addRenameButton();
    this.addDescritptionButton();
  },
  addDeleteButton: function () {
    const buttons = document.querySelectorAll(".task-div .delete");

    buttons.forEach((button) => {
      button.onclick = function () {
        const indexOfTask = button.getAttribute("data-num");

        const project =
          objectsInterface.projectsArray[objectsInterface.indexOfProject];

        objectsInterface.removeTask(project, indexOfTask);

        heroInterface.displayProject(project);

        console.log(project.tasks);
      };
    });
  },
  addRenameButton: function () {
    const buttons = document.querySelectorAll(".task-div .rename-button");

    buttons.forEach((button) => {
      button.onclick = function () {
        objectsInterface.renameMode = "task";

        objectsInterface.indexOfTask = button.getAttribute("data-num");

        modalsInterface.displayModal(renameModal.div);
      };
    });
  },
  addDescritptionButton: function () {
    const buttons = document.querySelectorAll(".task-div .description-button");

    buttons.forEach((button) => {
      button.onclick = function () {
        const project =
          objectsInterface.projectsArray[objectsInterface.indexOfProject];

        objectsInterface.descriptionMode = "task";
        objectsInterface.indexOfTask = button.getAttribute("data-num");

        modalsInterface.displayModal(descriptionModal.div);
      };
    });
  },
};
