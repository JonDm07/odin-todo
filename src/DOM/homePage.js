import { navBarButtons } from "../Functionality/Buttons/navBar";
import { projectButtons } from "../Functionality/Buttons/projects";
import { objectsInterface } from "../Functionality/projects";
import "../styles.css";
import { heroInterface } from "./hero";
import { descriptionModal } from "./Modals/descriptionModal";
import { projectModal } from "./Modals/projectModal";
import { renameModal } from "./Modals/renameModal";
import { navBar, navBarInterface } from "./navBar";

export const homepage = {
  makeHomepage: function () {
    this.createElement();
    this.displayProjects(false);
    /*     heroInterface.displayProject(objectsInterface.projectsArray[0]); */

    renameModal.createModal();
    descriptionModal.createModal();
    projectModal.createModal();

    navBarButtons.addAllButtons();
  },
  displayProjects: function (bool) {
    heroInterface.createProjectsDiv(bool);

    projectButtons.addAllButtons();

    navBarInterface.updateProjectList();
    navBarInterface.updateProjectsNum(objectsInterface.projectsArray.length);

    navBarButtons.listProjectsButtons();
  },
  createElement: function () {
    const body = document.querySelector("body");

    const header = document.createElement("header");
    body.appendChild(header);

    const navBarDiv = document.createElement("div");
    navBarDiv.classList.add("nav-bar");
    body.appendChild(navBarDiv);

    navBar.createNavBar();

    const hero = document.createElement("div");
    hero.classList.add("hero");
    body.appendChild(hero);

    const footer = document.createElement("footer");
    body.appendChild(footer);

    heroInterface.div = hero;
    navBar.div = navBarDiv;
  },
};
