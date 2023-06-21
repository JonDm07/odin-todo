import { makeHomepage } from "./homepage";
import { navBar, createModal, displayModal } from "./navbar";
import { objectsInterface, createProject } from "./projects";

makeHomepage(true);

let projects = [];

document.querySelector(".nav-bar > button").addEventListener("click", () => {
  displayModal();
});

document
  .querySelector(".nav-modal > form > button")
  .addEventListener("click", (e) => {
    e.preventDefault();

    let name = document.querySelector(
      'form > label > input[type="text"]'
    ).value;

    let project = createProject("project");
    objectsInterface.changeName(project, name);

    projects.push(project);

    console.log(projects);
    displayModal();
  });
