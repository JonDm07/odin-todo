import { modalsInterface } from "../../DOM/Modals/modalsInteface";
import { projectModal } from "../../DOM/Modals/projectModal";
import { objectsInterface } from "../projects";

export const heroProjectButtons = {
  addAllButtons: function () {
    this.addTaskButton();
  },
  addTaskButton: function () {
    const button = document.querySelector(".add-task");

    button.onclick = function () {
      objectsInterface.createMode = "task";

      modalsInterface.displayModal(projectModal.div);
    };
  },
};
