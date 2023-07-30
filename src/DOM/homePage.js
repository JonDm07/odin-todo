import { navBarButtons } from "../Functionality/Buttons/navBar";
import { projectButtons } from "../Functionality/Buttons/projects";
import "../styles.css";
import { heroInterface } from "./hero";
import { descriptionModal } from "./Modals/descriptionModal";
import { projectModal } from "./Modals/projectModal";
import { renameModal } from "./Modals/renameModal";
import { navBar } from "./navBar";

export const homepage = {
  makeHomepage: function () {
    this.createElement();
    heroInterface.displayProjects(false);

    renameModal.createModal();
    descriptionModal.createModal();
    projectModal.createModal();

    navBarButtons.addAllButtons();
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
  },
};
