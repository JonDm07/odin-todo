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
    this.projectDivs();
  },
  projectDivs: function () {
    const divs = document.querySelectorAll(".project-div");

    divs.forEach((div) => {
      div.onclick = function () {
        const projectIndex = div.getAttribute("data-num");
        const project = objectsInterface.projectsArray[projectIndex];

        objectsInterface.indexOfProject = projectIndex;

        heroInterface.displayProject(project);
      };
    });
  },
  renameButtons: function () {
    const renameButtonsArray = document.querySelectorAll(".rename");

    renameButtonsArray.forEach((button) => {
      button.onclick = function (e) {
        e.stopPropagation();

        const indexOfProject = button.getAttribute("data-num");

        modalsInterface.displayModal(renameModal.div);
      };
    });
  },
  descriptionButton: function () {
    const buttonsArray = document.querySelectorAll(".description");

    buttonsArray.forEach((button) => {
      button.onclick = function (e) {
        e.stopPropagation();

        const indexOfProject = button.getAttribute("data-num");

        objectsInterface.descriptionMode = "project";

        modalsInterface.displayModal(descriptionModal.div);
      };
    });
  },
  deleteButton: function () {
    const buttonsArray = document.querySelectorAll(".delete");

    buttonsArray.forEach((button) => {
      button.onclick = function (e) {
        e.stopPropagation();

        const indexOfProject = button.getAttribute("data-num");

        objectsInterface.removeProject(indexOfProject);

        homepage.displayProjects(true);
      };
    });
  },
  checkboxButton: function () {
    const checkBox = document.querySelectorAll(".checkbox");

    checkBox.forEach((checkBox) => {
      checkBox.onclick = function (e) {
        e.stopPropagation();

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
