import { buttonInterface } from "../Functionality/ButtonListeners/buttonListeners";
import { objectsInterface } from "../Functionality/projects";

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

      const name = document.createElement("p");
      name.textContent = project.tasks[i].name;
      taskDiv.appendChild(name);
    }
  },
};
