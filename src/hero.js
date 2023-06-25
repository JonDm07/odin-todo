import { objectsInterface } from "./projects";

export function displayProjects(projectsArray) {
  const hero = document.querySelector(".hero");

  let numOfDisplayedProjects = document.querySelectorAll(".project-div").length;

  for (let i = numOfDisplayedProjects; i < projectsArray.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    hero.appendChild(projectDiv);

    const para = document.createElement("p");
    projectDiv.appendChild(para);

    para.textContent = projectsArray[i].name;
  }
}
