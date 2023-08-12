import { heroInterface } from "../../DOM/hero";
import { modalsInterface } from "../../DOM/Modals/modalsInteface";
import { projectModal } from "../../DOM/Modals/projectModal";
import { navBar } from "../../DOM/navBar";
import { objectsInterface } from "../projects";

export const navBarButtons = {
  addAllButtons: function () {
    this.listProjectsButtons();
  },
  listProjectsButtons: function () {
    const buttons = document.querySelectorAll(".list-button");

    buttons.forEach((button) => {
      button.onclick = function () {
        const projectIndex = objectsInterface.getIndexOfProject(
          button.textContent
        );
        const project = objectsInterface.projectsArray[projectIndex];

        objectsInterface.indexOfProject = button.getAttribute("data-num");

        heroInterface.displayProject(project);
      };
    });
  },
};
