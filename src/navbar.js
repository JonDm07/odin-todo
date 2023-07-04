import { objectsInterface } from "./projects";

export const navBar = {
  numOfProjects: objectsInterface.projectsArray.length,

  navBarDiv: function () {
    const navBarDiv = document.querySelector(".nav-bar");
    return navBarDiv;
  },
  addProjectButton: function () {
    const button = document.querySelector(".nav-bar > button");
    return button;
  },

  createNavBar: function () {
    const numOfProjects = objectsInterface.projectsArray.length;
    const navBarDiv = this.navBarDiv();
    const projectBtn = document.createElement("button");
    projectBtn.textContent = "Add Project";
    navBarDiv.appendChild(projectBtn);

    const list = document.createElement("ul");
    navBarDiv.appendChild(list);

    const span = document.createElement("span");
    list.appendChild(span);
    span.textContent = `Projects: ${numOfProjects}`;
  },

  updateProjectsNum: function (num) {
    const span = document.querySelector(".nav-bar > ul > span");
    span.textContent = `Projects: ${num}`;
  },

  displayModal: function () {
    const modal = document.querySelector(".nav-modal");
    const projectBtn = this.addProjectButton();

    if (modal.style.display === "block") {
      modal.style.display = "";
      projectBtn.textContent = "Add Project";
    } else if (modal.style.display === "") {
      modal.style.display = "block";
      projectBtn.textContent = "Cancel";
    }
  },
};
