import { buttonInterface } from "./buttonListeners";
import { objectsInterface, createProject } from "./projects";
import { modals } from "./displayModals";

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
      `.${modal.className} > form > label > input[type="text"]`
    );
    let priority = document.querySelector(
      `.${modal.className} >form > label > select`
    );
    let description = document.querySelector(
      `.${modal.className} > form > label > textarea`
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
      project.tasks = [];
      objectsInterface.changeName(project, name.value);
      objectsInterface.changePriority(project, priority.value);
      objectsInterface.changeDescription(project, description.value);

      objectsInterface.projectsArray.push(project);

      console.log(objectsInterface.projectsArray);
    } else if (type === "task") {
      let project =
        objectsInterface.projectsArray[buttonInterface.indexOfProject];

      console.log(project);

      if (formValidation.checkSameName(project.tasks, name.value) === true) {
        name.value = "";
        name.style.border = "2px solid red";
        name.setAttribute("placeholder", "Please enter valid name");
        return true;
      }

      let task = createProject("task");
      task.type = type;
      objectsInterface.changeName(task, name.value);
      objectsInterface.changePriority(task, priority.value);
      objectsInterface.changeDescription(task, description.value);

      project.tasks.push(task);

      modals.displayModal(modal);
    }
  },
};
