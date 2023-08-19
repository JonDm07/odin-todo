import { dateModal } from "../../../DOM/Modals/dateModal";
import { modalsInterface } from "../../../DOM/Modals/modalsInteface";
import { objectsInterface } from "../../projects";
import { homepage } from "../../../DOM/homePage";
import { storage } from "../../storageFcs";
import { heroButtons } from "../hero";
import { heroInterface } from "../../../DOM/hero";

export const dateModalButtons = {
  addAllButtons: function () {
    this.closeButton();
    this.submitButton();
  },
  closeButton: function () {
    dateModal.closeButton.onclick = function (e) {
      e.preventDefault();

      modalsInterface.displayModal(dateModal.div);
    };
  },
  submitButton: function (e) {
    dateModal.submitButton.onclick = function (e) {
      e.preventDefault();

      const date = dateModal.dateInput.valueAsDate;
      const project =
        objectsInterface.projectsArray[objectsInterface.indexOfProject];

      if (objectsInterface.dateMode === "project") {
        objectsInterface.changeDueDate(project, date);

        homepage.displayProjects(true);
      } else if (objectsInterface.dateMode === "task") {
        const task = project.tasks[[objectsInterface.indexOfTask]];

        objectsInterface.changeDueDate(task, date);

        heroInterface.displayProject(project);
      }
      storage.storeProjectsInStorage(objectsInterface.projectsArray);
      modalsInterface.displayModal(dateModal.div);
    };
  },
};
