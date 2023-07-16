import { buttonInterface } from "../Functionality/ButtonListeners/buttonListeners";
import { objectsInterface } from "../Functionality/projects";
import { buttonListeners } from "../Functionality/ButtonListeners/buttonListeners";
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
  renameButton: function () {
    const buttons = document.querySelectorAll(".project-div > .rename ");
    return buttons;
  },
};

export const projectDiv = {
  displayProjects: function (removeDisplayedProjects) {
    const projectsArray = objectsInterface.projectsArray;
    const heroDiv = document.querySelector(".hero");

    if (removeDisplayedProjects) {
      hero.removeDisplayedProjects();
    }

    for (let i = 0; i < projectsArray.length; i++) {
      let numOfDisplayedProjects = hero.numOfDisplayedProjects();
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project-div");
      projectDiv.setAttribute("data-num", i);
      heroDiv.appendChild(projectDiv);

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
};

export const taskDiv = {
  displayTasks: function (project) {
    const indexOfProject = objectsInterface.getIndexOfProject(project.name);

    const projectDiv = document.querySelector(
      `.project-div:nth-of-type(${indexOfProject + 1})`
    );

    const numOfDisplayedtasks = document.querySelectorAll(
      `.project-div:nth-of-type(${indexOfProject + 1}) > .task-div`
    );

    if (numOfDisplayedtasks.length > 0) {
      numOfDisplayedtasks.forEach((element) => {
        element.remove();
      });
    }

    for (let i = 0; i < project.tasks.length; i++) {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task-div");
      projectDiv.appendChild(taskDiv);

      doText(taskDiv, project.tasks, i);
      doButtons(taskDiv, i);
    }
  },
};

function doButtons(projectDiv, numOfDisplayedProjects) {
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button-div");
  projectDiv.appendChild(buttonDiv);

  if (projectDiv.className === "project-div") {
    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("add-task");
    addTaskButton.setAttribute("data-num", numOfDisplayedProjects);
    addTaskButton.textContent = "+";
    buttonDiv.appendChild(addTaskButton);
  }

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
