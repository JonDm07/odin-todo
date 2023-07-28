import { objectsInterface } from "../Functionality/projects";

export const navBarInterface = {
  updateProjectsNum: function (num) {
    const span = document.querySelector(".nav-bar > ul > span");
    span.textContent = `Projects: ${num}`;
  },
  updateProjectButtonText: function () {
    if (navBar.addProjectButton.textContent === "Add Project") {
      navBar.addProjectButton.textContent = "Cancel";
    } else if (navBar.addProjectButton.textContent === "Cancel") {
      navBar.addProjectButton.textContent = "Add Project";
    }
  },
  updateProjectList: function () {
    const list = document.querySelector(".project-list");
    const displayedProjects = document.querySelectorAll(".project-list > li");

    displayedProjects.forEach((element) => {
      element.remove();
    });

    for (let i = 0; i < objectsInterface.projectsArray.length; i++) {
      const li = document.createElement("li");
      li.textContent = objectsInterface.projectsArray[i].name;
      list.appendChild(li);
    }
  },
};

export const navBar = {
  createNavBar: function () {
    const numOfProjects = objectsInterface.projectsArray.length;
    const navBarDiv = document.querySelector(".nav-bar");
    const projectBtn = document.createElement("button");
    projectBtn.textContent = "Add Project";
    navBarDiv.appendChild(projectBtn);

    const list = document.createElement("ul");
    list.classList.add("project-list");
    navBarDiv.appendChild(list);

    const span = document.createElement("span");
    list.appendChild(span);
    span.textContent = `Projects: ${numOfProjects}`;

    navBarInterface.updateProjectList();

    navBar.div = navBarDiv;
    navBar.addProjectButton = projectBtn;
  },
};