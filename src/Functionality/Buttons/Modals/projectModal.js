import { heroInterface } from "../../../DOM/hero";
import { homepage } from "../../../DOM/homePage";
import { modalsInterface } from "../../../DOM/Modals/modalsInteface";
import { projectModal } from "../../../DOM/Modals/projectModal";
import { formValidation } from "../../formValidation";
import { objectsInterface } from "../../projects";

export const projectModalButtons = {
  submitButton: function () {
    projectModal.submitButton.onclick = function (e) {
      e.preventDefault();

      const name = projectModal.nameInput.value;
      const priority = projectModal.selectInput.value;
      const description = projectModal.descriptionInput.value;

      console.log(description);

      if (objectsInterface.createMode === "project") {
        const array = objectsInterface.projectsArray;

        if (formValidation.validateForm(name, array) === true) {
          console.log("INVALID FROM");
          modalsInterface.displayModal(projectModal.div);
          return;
        } else {
          const project = objectsInterface.createProject(
            objectsInterface.createMode,
            name
          );

          project.tasks = [];
          objectsInterface.changePriority(project, priority);
          objectsInterface.changeDescription(project, description);

          array.push(project);

          homepage.displayProjects(true);
        }
      } else if (objectsInterface.createMode === "task") {
        const project =
          objectsInterface.projectsArray[objectsInterface.indexOfProject];

        console.log(project);

        const array = project.tasks;

        const task = objectsInterface.createProject(
          objectsInterface.createMode,
          name
        );
        objectsInterface.changePriority(task, priority);
        objectsInterface.changeDescription(task, description);

        array.push(task);

        heroInterface.displayProject(project);
      }

      modalsInterface.displayModal(projectModal.div);
      modalsInterface.clearInputs(projectModal.div);
    };
  },
};
