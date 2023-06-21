import { objectsInterface, createProject } from "./projects";

export function submitForm() {
  let name = document.querySelector('form > label > input[type="text"]').value;

  let project = createProject("project");
  objectsInterface.changeName(project, name);

  objectsInterface.projectsArray.push(project);

  console.log(objectsInterface.projectsArray);
}
