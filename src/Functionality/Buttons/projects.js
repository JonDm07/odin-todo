import { heroInterface } from "../../DOM/hero";
import { descriptionModal } from "../../DOM/Modals/descriptionModal";
import { modalsInterface } from "../../DOM/Modals/modalsInteface";
import { renameModal } from "../../DOM/Modals/renameModal";
import { objectsInterface } from "../projects";

export const projectButtons = {
  addAllButtons: function () {
    this.renameButtons();
    this.descriptionButton();
    this.deleteButton();
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

        modalsInterface.displayModal(descriptionModal.div);
      };
    });
  },
  deleteButton: function () {
    const buttonsArray = document.querySelectorAll(".delete");

    buttonsArray.forEach((button) => {
      button.onclick = function () {
        const indexOfProject = button.getAttribute("data-num");

        objectsInterface.removeProject(indexOfProject);

        heroInterface.displayProjects(true);
      };
    });
  },
};
