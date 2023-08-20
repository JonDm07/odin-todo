import { heroInterface } from "../../DOM/hero";
import { homepage } from "../../DOM/homePage";
import { dateModal } from "../../DOM/Modals/dateModal";
import { descriptionModal } from "../../DOM/Modals/descriptionModal";
import { modalsInterface } from "../../DOM/Modals/modalsInteface";
import { renameModal } from "../../DOM/Modals/renameModal";
import { objectsInterface } from "../projects";
import { storage } from "../storageFcs";

export const projectButtons = {
  addAllButtons: function () {
    this.renameButtons();
    this.descriptionButton();
    this.deleteButton();
    this.checkboxButton();
    this.projectDivs();
    this.calendarButton();
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
    const renameButtonsArray = document.querySelectorAll(
      ".project-div .rename"
    );

    renameButtonsArray.forEach((button) => {
      button.onclick = function (e) {
        e.stopPropagation();

        objectsInterface.indexOfProject = button.getAttribute("data-num");

        modalsInterface.displayModal(renameModal.div);

        objectsInterface.renameMode = "project";
      };
    });
  },
  descriptionButton: function () {
    const buttonsArray = document.querySelectorAll(".project-div .description");

    buttonsArray.forEach((button) => {
      button.onclick = function (e) {
        e.stopPropagation();

        objectsInterface.indexOfProject = button.getAttribute("data-num");

        objectsInterface.descriptionMode = "project";

        modalsInterface.displayModal(descriptionModal.div);
      };
    });
  },
  deleteButton: function () {
    const buttonsArray = document.querySelectorAll(".project-div .delete");

    buttonsArray.forEach((button) => {
      button.onclick = function (e) {
        e.stopPropagation();

        const indexOfProject = button.getAttribute("data-num");

        objectsInterface.removeProject(indexOfProject);

        homepage.displayProjects(true);

        storage.storeProjectsInStorage(objectsInterface.projectsArray);
      };
    });
  },
  calendarButton: function () {
    const buttons = document.querySelectorAll(".project-div .date");

    buttons.forEach((button) => {
      button.onclick = function (e) {
        e.stopPropagation();

        objectsInterface.indexOfProject = button.getAttribute("data-num");

        objectsInterface.dateMode = "project";

        modalsInterface.displayModal(dateModal.div);
      };
    });
  },
  checkboxButton: function () {
    const checkBox = document.querySelectorAll(".checkbox");

    checkBox.forEach((button) => {
      button.onclick = function (e) {
        e.stopPropagation();

        objectsInterface.indexOfProject = button.getAttribute("data-num");
        const project =
          objectsInterface.projectsArray[objectsInterface.indexOfProject];

        if (project.status === 0) {
          project.status = 1;
          button.classList.remove("zero");
          button.classList.add("one");
        } else if (project.status === 1) {
          project.status = 0;
          button.classList.remove("one");
          button.classList.add("zero");
        }

        storage.storeProjectsInStorage(objectsInterface.projectsArray);
      };
    });
  },
};
