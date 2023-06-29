import { objectsInterface } from "./projects";

export function navBar() {
  let numOfProjects = objectsInterface.projectsArray.length;

  const navBarDiv = document.querySelector(".nav-bar");

  const projectBtn = document.createElement("button");
  projectBtn.textContent = "Add Project";
  navBarDiv.appendChild(projectBtn);

  const list = document.createElement("ul");
  navBarDiv.appendChild(list);

  const span = document.createElement("span");
  list.appendChild(span);
  span.textContent = `Projects: ${numOfProjects}`;
}

export function displayModal() {
  const modal = document.querySelector(".nav-modal");
  const projectBtn = document.querySelector(".nav-bar > button");

  if (modal.style.display === "block") {
    modal.style.display = "";
    projectBtn.textContent = "Add Project";
  } else if (modal.style.display === "") {
    modal.style.display = "block";
    projectBtn.textContent = "Cancel";
  }
}

export function updateProjectsNum(num) {
  const span = document.querySelector(".nav-bar > ul > span");
  span.textContent = `Projects: ${num}`;
}
