import { heroInterface } from "../../DOM/hero";
import { homepage } from "../../DOM/homePage";
import { descriptionModal } from "../../DOM/Modals/descriptionModal";
import { modalsInterface } from "../../DOM/Modals/modalsInteface";
import { renameModal } from "../../DOM/Modals/renameModal";
import { objectsInterface } from "../projects";

export const projectButtons = {
  addAllButtons: function () {
    this.renameButtons();
    this.descriptionButton();
    this.deleteButton();
    this.checkboxButton();
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

        homepage.displayProjects(true);
      };
    });
  },
  checkboxButton: function () {
    const checkBox = document.querySelectorAll(".checkbox");

    checkBox.forEach((checkBox) => {
      checkBox.onclick = function () {
        if (
          checkBox.style.backgroundColor === "" ||
          checkBox.style.backgroundColor === "rgb(255, 42, 42)"
        ) {
          checkBox.style.backgroundColor = "rgb(31, 171, 26)";
        } else {
          checkBox.style.backgroundColor = "rgb(255, 42, 42)";
        }
      };
    });
  },
};
