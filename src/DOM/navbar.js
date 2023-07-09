import { objectsInterface } from "../Functionality/projects";

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
  updateProjectButtonText: function () {
    if (navBar.addProjectButton().textContent === "Add Project") {
      navBar.addProjectButton().textContent = "Cancel";
    } else if (navBar.addProjectButton().textContent === "Cancel") {
      navBar.addProjectButton().textContent = "Add Project";
    }
  },
};
