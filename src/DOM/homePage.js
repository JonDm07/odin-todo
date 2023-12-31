import { heroButtons } from "../Functionality/Buttons/hero";
import { navBarButtons } from "../Functionality/Buttons/navBar";
import { projectButtons } from "../Functionality/Buttons/projects";
import { objectsInterface } from "../Functionality/projects";
import "../styles.css";
import { header } from "./header";
import { heroInterface } from "./hero";
import { dateModal } from "./Modals/dateModal";
import { descriptionModal } from "./Modals/descriptionModal";
import { projectModal } from "./Modals/projectModal";
import { renameModal } from "./Modals/renameModal";
import { navBar, navBarInterface } from "./navBar";

export const homepage = {
  makeHomepage: function () {
    this.createElement();
    this.displayProjects(false);

    renameModal.createModal();
    descriptionModal.createModal();
    projectModal.createModal();
    dateModal.createModal();

    navBarButtons.addAllButtons();
    heroButtons.addProjectButton();
  },
  displayProjects: function (bool) {
    heroInterface.createProjectsDiv(bool);

    projectButtons.addAllButtons();

    navBarInterface.updateProjectList();

    navBarButtons.listProjectsButtons();
    heroButtons.addProjectButton();
  },
  createElement: function () {
    const body = document.querySelector("body");

    const navBarDiv = document.createElement("div");
    navBarDiv.classList.add("nav-bar");
    body.appendChild(navBarDiv);

    navBar.createNavBar();

    const hero = document.createElement("div");
    hero.classList.add("hero");
    body.appendChild(hero);

    heroInterface.div = hero;
    navBar.div = navBarDiv;
  },
};
