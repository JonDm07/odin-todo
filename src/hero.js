import { objectsInterface } from "./projects";

export function displayProjects(projectsArray) {
  const hero = document.querySelector(".hero");

  let numOfDisplayedProjects = document.querySelectorAll(".project-div").length;

  for (let i = numOfDisplayedProjects; i < projectsArray.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    hero.appendChild(projectDiv);

    const name = document.createElement("p");
    projectDiv.appendChild(name);

    name.textContent = projectsArray[i].name;

    const priority = document.createElement("p");
    projectDiv.appendChild(priority);

    priority.textContent = projectsArray[i].priority;

    const renameButton = document.createElement("button");
    renameButton.classList.add("rename");
    renameButton.textContent = "R";
    projectDiv.appendChild(renameButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.style.color = "red";
    deleteButton.textContent = "X";
    projectDiv.appendChild(deleteButton);
  }
}
