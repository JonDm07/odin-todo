import { heroInterface } from "../../../DOM/hero";
import { homepage } from "../../../DOM/homePage";
import { modalsInterface } from "../../../DOM/Modals/modalsInteface";
import { projectModal } from "../../../DOM/Modals/projectModal";
import { formValidation } from "../../formValidation";
import { objectsInterface } from "../../projects";
import { storage } from "../../storageFcs";

export const projectModalButtons = {
  addAllButtons: function () {
    projectModalButtons.submitButton();
    projectModalButtons.closeButton();
  },
  submitButton: function () {
    projectModal.submitButton.onclick = function (e) {
      e.preventDefault();

      const name = projectModal.nameInput.value;
      const priority = projectModal.selectInput.value;
      const description = projectModal.descriptionInput.value;
      const dueDate = projectModal.dateInput;

      const date = dueDate.value.split("-");
      const projectDate = new Date(date[0], date[1], date[2]);

      if (objectsInterface.createMode === "project") {
        const array = objectsInterface.projectsArray;

        if (formValidation.validateForm(name, array) === true) {
          modalsInterface.invalidInput(projectModal.nameInput);
          return;
        } else {
          const project = objectsInterface.createProject(
            objectsInterface.createMode,
            name
          );

          project.tasks = [];
          project.status = 0;
          objectsInterface.changePriority(project, priority);
          objectsInterface.changeDescription(project, description);

          if (!isNaN(projectDate.getTime())) {
            objectsInterface.changeDueDate(project, projectDate);
          }

          array.push(project);

          homepage.displayProjects(true);
        }
      } else if (objectsInterface.createMode === "task") {
        const project =
          objectsInterface.projectsArray[objectsInterface.indexOfProject];

        const array = project.tasks;

        const task = objectsInterface.createProject(
          objectsInterface.createMode,
          name
        );
        task.status = 0;
        objectsInterface.changePriority(task, priority);
        objectsInterface.changeDescription(task, description);

        if (!isNaN(projectDate.getTime())) {
          objectsInterface.changeDueDate(task, projectDate);
        }

        array.push(task);

        heroInterface.displayProject(project);
      }

      modalsInterface.displayModal(projectModal.div);
      modalsInterface.clearInputs(projectModal.div);

      storage.storeProjectsInStorage(objectsInterface.projectsArray);
    };
  },
  closeButton: function () {
    projectModal.closeButton.onclick = function (e) {
      e.preventDefault();

      modalsInterface.clearInputs(projectModal.div);
      modalsInterface.undoInvalidInput(projectModal.nameInput);
      modalsInterface.displayModal(projectModal.div);
    };
  },
};
