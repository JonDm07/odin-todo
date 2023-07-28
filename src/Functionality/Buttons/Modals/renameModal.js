import { heroInterface } from "../../../DOM/hero";
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

      objectsInterface.changeName(project, name);

      modalsInterface.displayModal(renameModal.div);

      heroInterface.displayProjects(true);
    };
  },
};
