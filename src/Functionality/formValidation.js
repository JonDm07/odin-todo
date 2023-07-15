import { buttonInterface } from "./ButtonListeners/buttonListeners";
import { objectsInterface, createProject } from "./projects";
import { modals } from "./Modals";

export const formValidation = {
  checkIfEmpty: function (input) {
    if (input === "") {
      console.log("empty");
      return 400;
    } else {
      return false;
    }
  },
  checkSameName: function (array, input) {
    let takenArray = [];

    array.forEach((element) => {
      if (element.name === input) {
        takenArray.push(true);
      }
    });

    if (takenArray.length === 0) {
      return false;
    } else {
      console.log("name taken");
      return 401;
    }
  },

  submitForm: function (modal, type) {
    let name = document.querySelector(
      `.${modal.className} > form > label > input[type="text"]`
    );
    let priority = document.querySelector(
      `.${modal.className} >form > label > select`
    );
    let description = document.querySelector(
      `.${modal.className} > form > label > textarea`
    );

    if (formValidation.checkIfEmpty(name.value) === 400) {
      modals.changeInputError(name, 400);
      return true;
    }

    let project = createProject(type);
    project.tasks = [];
    objectsInterface.changeName(project, name.value);
    objectsInterface.changePriority(project, priority.value);
    objectsInterface.changeDescription(project, description.value);

    if (type === "project") {
      if (
        formValidation.checkSameName(
          objectsInterface.projectsArray,
          name.value
        ) === 401
      ) {
        modals.changeInputError(name, 401);
        return true;
      }
      objectsInterface.projectsArray.push(project);
    } else if (type === "task") {
      let project =
        objectsInterface.projectsArray[buttonInterface.indexOfProject];

      if (formValidation.checkSameName(project.tasks, name.value) === 401) {
        modals.changeInputError(name, 401);
        return true;
      }
      project.tasks.push(project);
    }
    modals.changeInputError(name, false);
    name.value = "";
  },
};
