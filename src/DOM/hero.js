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

      const buttonDiv = document.createElement("div");
      buttonDiv.classList.add("button-div");
      projectDiv.appendChild(buttonDiv);

      const renameButton = document.createElement("button");
      renameButton.classList.add("rename");
      renameButton.setAttribute("data-num", numOfDisplayedProjects);
      buttonDiv.appendChild(renameButton);

      const descriptionButton = document.createElement("button");
      descriptionButton.classList.add("description");
      descriptionButton.setAttribute("data-num", numOfDisplayedProjects);
      buttonDiv.appendChild(descriptionButton);

      const calendarButton = document.createElement("button");
      calendarButton.classList.add("date");
      calendarButton.setAttribute("data-num", numOfDisplayedProjects);
      buttonDiv.appendChild(calendarButton);

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete");
      deleteButton.setAttribute("data-num", numOfDisplayedProjects);
      deleteButton.style.color = "red";
      buttonDiv.appendChild(deleteButton);

      const checkBox = document.createElement("button");
      checkBox.setAttribute("data-num", numOfDisplayedProjects);
      checkBox.classList.add("checkbox");
      if (objectsInterface.projectsArray[i].status === 0) {
        checkBox.classList.add("zero");
      } else if (objectsInterface.projectsArray[i].status === 1) {
        checkBox.classList.add("one");
      }
      buttonDiv.appendChild(checkBox);

      const priority = document.createElement("p");
      priority.classList.add("priority-text");
      priority.textContent = objectsInterface.projectsArray[i].priority;
      buttonDiv.appendChild(priority);

      if (objectsInterface.projectsArray[i].dueDate) {
        const dueDate = document.createElement("p");

        objectsInterface.makeDateObjectsFromISO(
          objectsInterface.projectsArray[i]
        );

        const projectDate = objectsInterface.projectsArray[i].dueDate;
        dueDate.textContent = projectDate.toLocaleDateString(
          navigator.language
        );
        buttonDiv.appendChild(dueDate);
      }

      const descriptionDiv = document.createElement("div");
      descriptionDiv.classList.add("description-div");
      projectDiv.appendChild(descriptionDiv);

      const description = document.createElement("p");
      description.textContent = `- ${projectsArray[i].description}`;
      descriptionDiv.appendChild(description);
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

    if (task.description !== "") {
      const description = document.createElement("p");
      description.textContent = task.description;
      description.classList.add("description");
      taskDiv.appendChild(description);
    }

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("button-div");
    taskDiv.appendChild(buttonDiv);

    const renameButton = document.createElement("button");
    renameButton.classList.add("rename");
    renameButton.setAttribute("data-num", numOfDisplayedTasks);
    buttonDiv.appendChild(renameButton);

    const descriptionButton = document.createElement("button");
    descriptionButton.classList.add("description");
    descriptionButton.setAttribute("data-num", numOfDisplayedTasks);
    buttonDiv.appendChild(descriptionButton);

    const calendarButton = document.createElement("button");
    calendarButton.classList.add("date");
    calendarButton.setAttribute("data-num", numOfDisplayedTasks);
    buttonDiv.appendChild(calendarButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("data-num", numOfDisplayedTasks);
    deleteButton.style.color = "red";
    buttonDiv.appendChild(deleteButton);

    const checkBox = document.createElement("button");
    checkBox.setAttribute("data-num", numOfDisplayedTasks);
    checkBox.classList.add("checkbox");
    if (task.status === 0) {
      checkBox.classList.add("zero");
    } else if (task.status === 1) {
      checkBox.classList.add("one");
    }
    buttonDiv.appendChild(checkBox);

    if (task.dueDate) {
      const dueDate = document.createElement("p");

      objectsInterface.makeDateObjectsFromISO(task);

      const projectDate = task.dueDate;
      dueDate.textContent = projectDate.toLocaleDateString(navigator.language);
      buttonDiv.appendChild(dueDate);
    }
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
