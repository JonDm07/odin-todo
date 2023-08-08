import { heroInterface } from "../../../DOM/hero";
import { homepage } from "../../../DOM/homePage";
import { modalsInterface } from "../../../DOM/Modals/modalsInteface";
import { renameModal } from "../../../DOM/Modals/renameModal";
import { objectsInterface } from "../../projects";

export const renameModalButtons = {
  closeButton: function () {
    renameModal.closeButton.onclick = function () {
      modalsInterface.displayModal(renameModal.div);
    };
  },
  submitButton: function () {
    renameModal.submitButton.onclick = function (e) {
      e.preventDefault();

      const project =
        objectsInterface.projectsArray[objectsInterface.indexOfProject];

      const name = renameModal.nameInput.value;

      if (objectsInterface.renameMode === "project") {
        objectsInterface.changeName(project, name);

        homepage.displayProjects(true);
      } else if (objectsInterface.renameMode === "task") {
        const task = project.tasks[objectsInterface.indexOfTask];

        objectsInterface.changeName(task, name);
        heroInterface.displayProject(project);
      }

      modalsInterface.displayModal(renameModal.div);
      modalsInterface.clearInputs(renameModal.div);
    };
  },
};
