import { heroInterface } from "../../DOM/hero";
import { modalsInterface } from "../../DOM/Modals/modalsInteface";
import { renameModal } from "../../DOM/Modals/renameModal";
import { objectsInterface } from "../projects";
import { descriptionModal } from "../../DOM/Modals/descriptionModal";
import { storage } from "../storageFcs";
import { dateModal } from "../../DOM/Modals/dateModal";

export const taskButtons = {
  addAllButtons: function () {
    this.addDeleteButton();
    this.addRenameButton();
    this.addDescritptionButton();
    this.changeDueDateButton();
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

        storage.storeProjectsInStorage(objectsInterface.projectsArray);
      };
    });
  },
  addRenameButton: function () {
    const buttons = document.querySelectorAll(".task-div .rename");

    buttons.forEach((button) => {
      button.onclick = function () {
        objectsInterface.renameMode = "task";

        objectsInterface.indexOfTask = button.getAttribute("data-num");

        modalsInterface.displayModal(renameModal.div);
      };
    });
  },
  addDescritptionButton: function () {
    const buttons = document.querySelectorAll(".task-div .description");

    buttons.forEach((button) => {
      button.onclick = function () {
        /*         const project =
          objectsInterface.projectsArray[objectsInterface.indexOfProject]; */

        objectsInterface.descriptionMode = "task";
        objectsInterface.indexOfTask = button.getAttribute("data-num");

        modalsInterface.displayModal(descriptionModal.div);
      };
    });
  },
  changeDueDateButton: function () {
    const buttons = document.querySelectorAll(".task-div .date");

    buttons.forEach((button) => {
      button.onclick = function () {
        objectsInterface.dateMode = "task";
        objectsInterface.indexOfTask = button.getAttribute("data-num");

        modalsInterface.displayModal(dateModal.div);
      };
    });
  },
};
