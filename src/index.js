import { makeHomepage } from "./homepage";
import { navBar, createModal, displayModal, updateProjectsNum } from "./navbar";
import { submitForm } from "./form.js";
import { displayProjects } from "./hero.js";
import { objectsInterface } from "./projects";

makeHomepage(true);

document.querySelector(".nav-bar > button").addEventListener("click", () => {
  displayModal();
});

document
  .querySelector(".nav-modal > form > button")
  .addEventListener("click", (e) => {
    e.preventDefault();

    submitForm();
    displayModal();

    displayProjects(objectsInterface.projectsArray);

    updateProjectsNum(objectsInterface.projectsArray.length);
  });
