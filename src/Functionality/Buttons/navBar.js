import { modalsInterface } from "../../DOM/Modals/modalsInteface";
import { projectModal } from "../../DOM/Modals/projectModal";
import { navBar } from "../../DOM/navBar";

export const navBarButtons = {
  addAllButtons: function () {
    this.addProjectButton();
  },
  addProjectButton: function () {
    navBar.addProjectButton.onclick = function () {
      modalsInterface.displayModal(projectModal.div);
    };
  },
};
