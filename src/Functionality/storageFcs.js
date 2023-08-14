import { objectsInterface } from "./projects";

export function getProjectsFromStorage() {
  let projects = JSON.parse(localStorage.getItem("projectsArray"));
  return projects;
}

export function storeProjectsInStorage(projectsArray) {
  let projects = JSON.stringify(projectsArray);

  localStorage.setItem("projectsArray", projects);
}
export function updateProjectsOnPageLoad() {
  const storageArray = getProjectsFromStorage();
  let sessionArray = objectsInterface.projectsArray;
}
