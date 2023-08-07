import { heroInterface } from "../../DOM/hero";
import { objectsInterface } from "../projects";

export const taskButtons = {
  addAllButtons: function () {
    this.addDeleteButton();
  },
  addDeleteButton: function () {
    const buttons = document.querySelectorAll(".task-div .delete");

    buttons.forEach((button) => {
      button.onclick = function () {
        const indexOfTask = button.getAttribute("data-num");

        const project =
          objectsInterface.projectsArray[objectsInterface.indexOfProject];

        objectsInterface.removeTask(project, indexOfTask);

        heroInterface.displayProject(project);

        console.log(project.tasks);
      };
    });
  },
};
