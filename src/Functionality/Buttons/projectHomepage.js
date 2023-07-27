import { modalsInterface } from "../../DOM/Modals/modalsInteface";
import { renameModal } from "../../DOM/Modals/renameModal";

export const renameButtons = {
  addButtonsFunction: function () {
    const renameButtonsArray = document.querySelectorAll(".rename");

    renameButtonsArray.forEach((button) => {
      button.onclick = function () {
        const indexOfProject = button.getAttribute("data-num");

        modalsInterface.displayModal(renameModal.modalDiv);
      };
    });
  },
};
