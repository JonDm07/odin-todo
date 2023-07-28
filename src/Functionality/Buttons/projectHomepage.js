import { descriptionModal } from "../../DOM/Modals/descriptionModal";
import { modalsInterface } from "../../DOM/Modals/modalsInteface";
import { renameModal } from "../../DOM/Modals/renameModal";

export const projectButtons = {
  addAllButtons: function () {
    this.renameButtons();
    this.descriptionButton();
  },
  renameButtons: function () {
    const renameButtonsArray = document.querySelectorAll(".rename");

    renameButtonsArray.forEach((button) => {
      button.onclick = function () {
        const indexOfProject = button.getAttribute("data-num");

        modalsInterface.displayModal(renameModal.div);
      };
    });
  },
  descriptionButton: function () {
    const buttonsArray = document.querySelectorAll(".description");

    buttonsArray.forEach((button) => {
      button.onclick = function () {
        const indexOfProject = button.getAttribute("data-num");

        console.log(button);

        modalsInterface.displayModal(descriptionModal.div);
      };
    });
  },
};
