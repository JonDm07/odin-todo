import { buttonInterface } from "./buttonListeners";
import { objectsInterface } from "./projects";
import { buttonListeners } from "./buttonListeners";

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
      hero.appendChild(projectDiv);

      const name = document.createElement("p");
      projectDiv.appendChild(name);

      name.textContent = projectsArray[i].name;

      const priority = document.createElement("p");
      projectDiv.appendChild(priority);

      priority.textContent = projectsArray[i].priority;

      const description = document.createElement("p");
      projectDiv.appendChild(description);

      description.textContent = projectsArray[i].description;

      const renameButton = document.createElement("button");
      renameButton.classList.add("rename");
      renameButton.setAttribute("data-num", numOfDisplayedProjects);
      renameButton.textContent = "R";
      projectDiv.appendChild(renameButton);

      const deleteButton = document.createElement("button");

      deleteButton.classList.add("delete");
      deleteButton.setAttribute("data-num", numOfDisplayedProjects);
      deleteButton.style.color = "red";
      deleteButton.textContent = "X";
      projectDiv.appendChild(deleteButton);

      const checkBox = document.createElement("button");

      checkBox.classList.add("checkbox");
      projectDiv.appendChild(checkBox);
    }
    buttonListeners.doRenameButton();
    buttonListeners.doDeleteProjectButton();
    buttonListeners.doCheckBox();
  },
  renameButton: function () {
    const buttons = document.querySelectorAll(".project-div > .rename ");
    return buttons;
  },
};
