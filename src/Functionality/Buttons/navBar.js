import { modalsInterface } from "../../DOM/Modals/modalsInteface";
import { projectModal } from "../../DOM/Modals/projectModal";
import { navBar } from "../../DOM/navBar";

export const navBarButtons = {
  addAllButtons: function () {
    this.addProjectButton();
    this.listProjectsButtons();
  },
  addProjectButton: function () {
    navBar.addProjectButton.onclick = function () {
      modalsInterface.displayModal(projectModal.div);
    };
  },
  listProjectsButtons: function () {
    const buttons = document.querySelectorAll(".list-button");

    buttons.forEach((button) => {
      button.onclick = function () {
        console.log(button);
      };
    });
  },
};
