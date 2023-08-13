import { objectsInterface } from "../Functionality/projects";
import { projectButtons } from "../Functionality/Buttons/projects";
import { navBar, navBarInterface } from "./navBar";
import { navBarButtons } from "../Functionality/Buttons/navBar";
import { taskButtons } from "../Functionality/Buttons/tasks";
import { heroButtons } from "../Functionality/Buttons/hero";

export const heroInterface = {
  numOfDisplayedProjects: function () {
    const num = document.querySelectorAll(".project-div").length;
    return num;
  },
  numOfDisplayedTasks: function () {
    const num = document.querySelectorAll(".task-div").length;
    return num;
  },
  removeHeroElements: function () {
    let displayedProjects = document.querySelectorAll(".hero > *");

    displayedProjects.forEach((el) => {
      el.remove();
    });
  },
  createProjectsDiv(removeHeroElements) {
    const projectsArray = objectsInterface.projectsArray;
    const heroDiv = document.querySelector(".hero");

    if (removeHeroElements) {
      heroInterface.removeHeroElements();
    }

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header-div");
    heroDiv.appendChild(headerDiv);

    const headerText = document.createElement("h3");
    headerText.textContent = "Projects:";
    headerDiv.appendChild(headerText);
    /* 
    const lineDiv = document.createElement("div");
    lineDiv.classList.add("line-div");
    headerDiv.appendChild(lineDiv); */

    for (let i = 0; i < projectsArray.length; i++) {
      let numOfDisplayedProjects = heroInterface.numOfDisplayedProjects();

      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project-div");
      projectDiv.setAttribute("data-num", i);
      heroDiv.appendChild(projectDiv);

      const textDiv = document.createElement("div");
      textDiv.classList.add("text-div");
      projectDiv.appendChild(textDiv);

      const name = document.createElement("p");
      textDiv.appendChild(name);

      name.textContent = projectsArray[i].name;

      const description = document.createElement("p");
      textDiv.appendChild(description);

      description.textContent = projectsArray[i].description;

      const buttonDiv = document.createElement("div");
      buttonDiv.classList.add("button-div");
      projectDiv.appendChild(buttonDiv);

      const renameButton = document.createElement("button");
      renameButton.classList.add("rename");
      renameButton.setAttribute("data-num", numOfDisplayedProjects);
      renameButton.textContent = "R";
      buttonDiv.appendChild(renameButton);

      const descriptionButton = document.createElement("button");
      descriptionButton.classList.add("description");
      descriptionButton.setAttribute("data-num", numOfDisplayedProjects);
      descriptionButton.textContent = "D";
      buttonDiv.appendChild(descriptionButton);

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete");
      deleteButton.setAttribute("data-num", numOfDisplayedProjects);
      deleteButton.style.color = "red";
      deleteButton.textContent = "X";
      buttonDiv.appendChild(deleteButton);

      const checkBox = document.createElement("button");
      checkBox.classList.add("checkbox");
      buttonDiv.appendChild(checkBox);

      const priority = document.createElement("p");
      priority.textContent = projectsArray[i].priority;
      buttonDiv.appendChild(priority);
    }

    const projectBtn = document.createElement("button");
    projectBtn.classList.add("add-project");
    projectBtn.textContent = "New Project";
    heroDiv.appendChild(projectBtn);
  },
  createTaskDiv: function (task) {
    const numOfDisplayedTasks = heroInterface.numOfDisplayedTasks();

    const container = document.querySelector(".project-container");

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");
    container.appendChild(taskDiv);

    const name = document.createElement("p");
    name.textContent = task.name;
    name.classList.add("name");
    taskDiv.appendChild(name);

    const description = document.createElement("p");
    description.textContent = task.description;
    description.classList.add("description");
    taskDiv.appendChild(description);

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("button-div");
    taskDiv.appendChild(buttonDiv);

    const descriptionButton = document.createElement("button");
    descriptionButton.classList.add("description-button");
    descriptionButton.textContent = "D";
    descriptionButton.setAttribute("data-num", numOfDisplayedTasks);
    buttonDiv.appendChild(descriptionButton);

    const renameButton = document.createElement("button");
    renameButton.classList.add("rename-button");
    renameButton.textContent = "R";
    renameButton.setAttribute("data-num", numOfDisplayedTasks);
    buttonDiv.appendChild(renameButton);

    const checkBox = document.createElement("button");
    checkBox.classList.add("checkbox");
    buttonDiv.appendChild(checkBox);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("data-num", numOfDisplayedTasks);
    deleteButton.style.color = "red";
    deleteButton.textContent = "X";
    buttonDiv.appendChild(deleteButton);
  },
  displayProject: function (project) {
    this.removeHeroElements();

    const hero = this.div;

    const container = document.createElement("div");
    container.classList.add("project-container");
    hero.appendChild(container);

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header-div");
    container.appendChild(headerDiv);

    const h3 = document.createElement("h3");
    h3.textContent = `${project.name}`;
    headerDiv.appendChild(h3);

    if (project.tasks !== undefined) {
      for (let i = 0; i < project.tasks.length; i++) {
        this.createTaskDiv(project.tasks[i]);
      }
    }

    const taskButton = document.createElement("button");
    taskButton.classList.add("add-task");
    taskButton.textContent = "add task";
    container.appendChild(taskButton);

    taskButtons.addAllButtons();
    heroButtons.addAllButtons();
  },
};
