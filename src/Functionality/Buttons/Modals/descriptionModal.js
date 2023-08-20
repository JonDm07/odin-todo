import { heroInterface } from "../../../DOM/hero";
import { homepage } from "../../../DOM/homePage";
import { descriptionModal } from "../../../DOM/Modals/descriptionModal";
import { modalsInterface } from "../../../DOM/Modals/modalsInteface";
import { formValidation } from "../../formValidation";
import { objectsInterface } from "../../projects";
import { storage } from "../../storageFcs";

export const descriptionModalButtons = {
  addAllButtons: function () {
    this.closeButton();
    this.submitButton();
  },
  closeButton: function () {
    descriptionModal.closeButton.onclick = function () {
      const modal = descriptionModal.div;

      modalsInterface.undoInvalidInput(descriptionModal.textarea);
      modalsInterface.displayModal(modal);
    };
  },
  submitButton: function () {
    descriptionModal.submitButton.onclick = function (e) {
      e.preventDefault();

      const project =
        objectsInterface.projectsArray[objectsInterface.indexOfProject];

      const description = descriptionModal.textarea.value;

      if (formValidation.checkIfEmpty(description)) {
        modalsInterface.invalidInput(descriptionModal.textarea);
        return;
      }

      if (objectsInterface.descriptionMode === "project") {
        objectsInterface.changeDescription(project, description);

        homepage.displayProjects(true);
      } else if (objectsInterface.descriptionMode === "task") {
        const task = project.tasks[objectsInterface.indexOfTask];

        objectsInterface.changeDescription(task, description);

        heroInterface.displayProject(project);
      }

      modalsInterface.displayModal(descriptionModal.div);
      modalsInterface.undoInvalidInput(descriptionModal.textarea);
      modalsInterface.clearInputs(descriptionModal.div);

      storage.storeProjectsInStorage(objectsInterface.projectsArray);
    };
  },
};
