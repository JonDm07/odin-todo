import { descriptionModal } from "../../../DOM/Modals/descriptionModal";
import { modalsInterface } from "../../../DOM/Modals/modalsInteface";

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

      console.log("Hello");
    };
  },
};
