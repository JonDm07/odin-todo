import { objectsInterface } from "./projects";

export function getProjectsFromStorage() {
  let projects = JSON.parse(localStorage.getItem("projectsArray"));
  return projects;
}

export function storeDataInStorage(key, value) {
  if (typeof key !== "string") {
    console.log("key must be string");
    return;
  }

  value = JSON.stringify(value);

  localStorage.setItem(key, value);
}

export function updateProjectsOnPageLoad() {
  const storageArray = getProjectsFromStorage();
  let sessionArray = objectsInterface.projectsArray;
}


console.log(hello)