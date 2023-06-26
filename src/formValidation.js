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
      console.log("name taken");
      return true;
    }
  },
};

export function submitForm() {
  let name = document.querySelector('form > label > input[type="text"]');
  let priority = document.querySelector("form > label > select");

  if (formValidation.checkIfEmpty(name.value) === true) {
    name.classList.add("invalid");
    return;
  }

  if (
    formValidation.checkSameName(objectsInterface.projectsArray, name.value) ===
    true
  ) {
    name.classList.add("invalid");
    return;
  }

  name.classList.remove("invalid");

  let project = createProject("project");
  objectsInterface.changeName(project, name.value);
  objectsInterface.changePriority(project, priority.value);

  objectsInterface.projectsArray.push(project);

  console.log(objectsInterface.projectsArray);
}
