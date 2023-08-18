import { dateModal } from "../../../DOM/Modals/dateModal";
import { modalsInterface } from "../../../DOM/Modals/modalsInteface";

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
    };
  },
};
