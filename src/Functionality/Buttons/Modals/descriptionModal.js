import { heroInterface } from "../../../DOM/hero";
import { homepage } from "../../../DOM/homePage";
import { descriptionModal } from "../../../DOM/Modals/descriptionModal";
import { modalsInterface } from "../../../DOM/Modals/modalsInteface";
import { objectsInterface } from "../../projects";

export const descriptionModalButtons = {
  closeButton: function () {
    descriptionModal.closeButton.onclick = function () {
      const modal = descriptionModal.div;

      modalsInterface.displayModal(modal);
    };
  },
  submitButton: function () {
    descriptionModal.submitButton.onclick = function (e) {
      e.preventDefault();

      const project =
        objectsInterface.projectsArray[objectsInterface.indexOfProject];

      const description = document.querySelector(
        ".description-modal > form > label > textarea"
      ).value;

      objectsInterface.changeDescription(project, description);

      modalsInterface.displayModal(descriptionModal.div);
      modalsInterface.clearInputs(descriptionModal.div);

      homepage.displayProjects(true);
    };
  },
};
