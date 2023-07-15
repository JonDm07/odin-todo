import { buttonInterface } from "../Functionality/ButtonListeners/buttonListeners";
import { objectsInterface } from "../Functionality/projects";
import { buttonListeners } from "../Functionality/ButtonListeners/buttonListeners";
import { taskDiv } from "./taskDiv";
import { objectDivs } from "../Functionality/ButtonListeners/objectDivsListeners";

export const hero = {
  numOfDisplayedProjects: function () {
    const num = document.querySelectorAll(".project-div").length;
    return num;
  },
  removeDisplayedProjects: function () {
    let displayedProjects = document.querySelectorAll(".project-div");

    displayedProjects.forEach((el) => {
      el.remove();
    });
  },
  removeDisplayedTasks: function (projectDiv) {
    if (projectDiv) {
    }
  },
  displayProjects: function (removeDisplayedProjects) {
    const projectsArray = objectsInterface.projectsArray;
    const hero = document.querySelector(".hero");

    if (removeDisplayedProjects) {
      this.removeDisplayedProjects();
    }

    for (let i = 0; i < projectsArray.length; i++) {
      let numOfDisplayedProjects = this.numOfDisplayedProjects();
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project-div");
      projectDiv.setAttribute("data-num", i);
      hero.appendChild(projectDiv);

      doText(projectDiv, projectsArray, i);
      doButtons(projectDiv, numOfDisplayedProjects);
    }
    objectDivs.doRenameButton();
    objectDivs.doDeleteProjectButton();
    objectDivs.doCheckBox();
    objectDivs.doAddTaskButton();

    projectsArray.forEach((project) => {
      taskDiv.displayTasks(project);
    });
  },
  renameButton: function () {
    const buttons = document.querySelectorAll(".project-div > .rename ");
    return buttons;
  },
};

function doButtons(projectDiv, numOfDisplayedProjects) {
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button-div");
  projectDiv.appendChild(buttonDiv);

  const addTaskButton = document.createElement("button");
  addTaskButton.classList.add("add-task");
  addTaskButton.setAttribute("data-num", numOfDisplayedProjects);
  addTaskButton.textContent = "+";
  buttonDiv.appendChild(addTaskButton);

  const renameButton = document.createElement("button");
  renameButton.classList.add("rename");
  renameButton.setAttribute("data-num", numOfDisplayedProjects);
  renameButton.textContent = "R";
  buttonDiv.appendChild(renameButton);

  const deleteButton = document.createElement("button");

  deleteButton.classList.add("delete");
  deleteButton.setAttribute("data-num", numOfDisplayedProjects);
  deleteButton.style.color = "red";
  deleteButton.textContent = "X";
  buttonDiv.appendChild(deleteButton);

  const checkBox = document.createElement("button");

  checkBox.classList.add("checkbox");
  buttonDiv.appendChild(checkBox);
}

function doText(projectDiv, projectsArray, num) {
  const textDiv = document.createElement("div");
  textDiv.classList.add("text-div");
  projectDiv.appendChild(textDiv);

  const name = document.createElement("p");
  textDiv.appendChild(name);

  name.textContent = projectsArray[num].name;

  const priority = document.createElement("p");
  textDiv.appendChild(priority);

  priority.textContent = projectsArray[num].priority;

  const description = document.createElement("p");
  textDiv.appendChild(description);

  description.textContent = projectsArray[num].description;
}
