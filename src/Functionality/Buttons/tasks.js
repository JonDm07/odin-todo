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
    this.checkboxButton();
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
  checkboxButton: function () {
    const checkBox = document.querySelectorAll(".checkbox");

    checkBox.forEach((button) => {
      button.onclick = function (e) {
        e.stopPropagation();

        objectsInterface.indexOfTask = button.getAttribute("data-num");
        const project =
          objectsInterface.projectsArray[objectsInterface.indexOfProject];

        const task = project.tasks[objectsInterface.indexOfTask];

        if (task.status === 0) {
          task.status = 1;
          button.classList.remove("zero");
          button.classList.add("one");
        } else if (task.status === 1) {
          task.status = 0;
          button.classList.remove("one");
          button.classList.add("zero");
        }

        storage.storeProjectsInStorage(objectsInterface.projectsArray);
      };
    });
  },
};
