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

  submitForm: function () {
    let name = document.querySelector('form > label > input[type="text"]');
    let priority = document.querySelector("form > label > select");
    let description = document.querySelector("form > label > textarea");

    if (formValidation.checkIfEmpty(name.value) === true) {
      name.classList.add("invalid");
      console.log("name taken");
      return true;
    }

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
    objectsInterface.changeName(project, name.value);
    objectsInterface.changePriority(project, priority.value);
    objectsInterface.changeDescription(project, description.value);

    objectsInterface.projectsArray.push(project);

    console.log(objectsInterface.projectsArray);
  },
};
