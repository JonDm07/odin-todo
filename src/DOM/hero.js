import { objectsInterface } from "../Functionality/projects";
import { projectButtons } from "../Functionality/Buttons/projects";

export const heroInterface = {
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
  displayProjects(removeDisplayedProjects) {
    const projectsArray = objectsInterface.projectsArray;
    const heroDiv = document.querySelector(".hero");

    heroInterface.div = heroDiv;

    if (removeDisplayedProjects) {
      heroInterface.removeDisplayedProjects();
    }

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

      const priority = document.createElement("p");
      textDiv.appendChild(priority);

      priority.textContent = projectsArray[i].priority;

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

      projectButtons.addAllButtons();
    }
  },
};
