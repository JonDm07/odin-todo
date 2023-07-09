import { buttonInterface } from "./buttonListeners";
import { objectsInterface, createProject } from "./projects";

export const formValidation = {
  checkIfEmpty: function (value) {
    if (value === "") {
      console.log("name field empty");
      return true;
    }
  },
  checkSameName: function (array, value) {
    let takenArray = [];

    array.forEach((element) => {
      if (element.name === value) {
        takenArray.push(true);
      }
    });

    if (takenArray.length === 0) {
      return false;
    } else {
      return true;
    }
  },

  submitForm: function (modal, type) {
    let name = document.querySelector(
      `.${modal} > form > label > input[type="text"]`
    );
    let priority = document.querySelector(`.${modal} >form > label > select`);
    let description = document.querySelector(
      `.${modal} > form > label > textarea`
    );

    if (formValidation.checkIfEmpty(name.value) === true) {
      name.classList.add("invalid");
      console.log("name taken");
      return true;
    }

    if (type === "project") {
      if (
        formValidation.checkSameName(
          objectsInterface.projectsArray,
          name.value
        ) === true
      ) {
        name.classList.add("invalid");
        return true;
      }

      name.classList.remove("invalid");

      let project = createProject("project");
      project.type = type;
      objectsInterface.changeName(project, name.value);
      objectsInterface.changePriority(project, priority.value);
      objectsInterface.changeDescription(project, description.value);

      objectsInterface.projectsArray.push(project);

      console.log(objectsInterface.projectsArray);
    } else if (type === "task") {
      const project =
        objectsInterface.projectsArray[buttonInterface.indexOfProject];

      if (formValidation.checkSameName(project.tasks, name.value) === true) {
        name.classList.add("invalid");
        return true;
      }

      let task = createProject("task");
      task.type = type;
      objectsInterface.changeName(task, name.value);
      objectsInterface.changePriority(task, priority.value);
      objectsInterface.changeDescription(task, description.value);

      project.tasks.push(task);
    }
  },
};
