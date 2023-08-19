import { objectsInterface } from "./projects";

export const storage = {
  getProjectsFromStorage: function () {
    let projects = JSON.parse(localStorage.getItem("projectsArray"));

    projects.forEach((project) => {
      objectsInterface.makeDateObjectsFromISO(project);

      project.tasks.forEach((task) => {
        objectsInterface.makeDateObjectsFromISO(task);
      });
    });
    return projects;
  },
  storeProjectsInStorage: function () {
    let projects = JSON.stringify(objectsInterface.projectsArray);

    localStorage.setItem("projectsArray", projects);
  },
};

/* export function updateProjectsOnPageLoad() {
  const storageArray = getProjectsFromStorage();
  let sessionArray = objectsInterface.projectsArray;
}
 */
