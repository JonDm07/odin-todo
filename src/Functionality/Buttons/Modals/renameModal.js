import { heroInterface } from "../../../DOM/hero";
import { homepage } from "../../../DOM/homePage";
import { modalsInterface } from "../../../DOM/Modals/modalsInteface";
import { renameModal } from "../../../DOM/Modals/renameModal";
import { objectsInterface } from "../../projects";
import { storage } from "../../storageFcs";
import { formValidation } from "../../formValidation";

export const renameModalButtons = {
  closeButton: function () {
    renameModal.closeButton.onclick = function () {
      modalsInterface.undoInvalidInput(renameModal.nameInput);
      modalsInterface.clearInputs(renameModal.div);

      modalsInterface.displayModal(renameModal.div);
    };
  },
  submitButton: function () {
    renameModal.submitButton.onclick = function (e) {
      e.preventDefault();

      const project =
        objectsInterface.projectsArray[objectsInterface.indexOfProject];

      const name = renameModal.nameInput.value;

      if (formValidation.checkIfEmpty(name)) {
        modalsInterface.invalidInput(renameModal.nameInput);
        return;
      }

      if (objectsInterface.renameMode === "project") {
        if (
          formValidation.checkSameName(name, objectsInterface.projectsArray)
        ) {
          modalsInterface.invalidInput(renameModal.nameInput);
          return;
        }

        objectsInterface.changeName(project, name);

        homepage.displayProjects(true);
      } else if (objectsInterface.renameMode === "task") {
        const task = project.tasks[objectsInterface.indexOfTask];

        if (formValidation.checkSameName(name, project.tasks)) {
          modalsInterface.invalidInput(renameModal.nameInput);
          return;
        }

        objectsInterface.changeName(task, name);
        heroInterface.displayProject(project);
      }

      modalsInterface.displayModal(renameModal.div);
      modalsInterface.undoInvalidInput(renameModal.nameInput);
      modalsInterface.clearInputs(renameModal.div);

      storage.storeProjectsInStorage(objectsInterface.projectsArray);
    };
  },
};
