import { objectsInterface } from "./projects";

export const storage = {
  getProjectsFromStorage: function () {
    let projects = JSON.parse(localStorage.getItem("projectsArray"));

    return projects;
  },
  storeProjectsInStorage: function () {
    let projects = JSON.stringify(objectsInterface.projectsArray);

    localStorage.setItem("projectsArray", projects);
  },
};
