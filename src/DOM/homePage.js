import { projectButtons } from "../Functionality/Buttons/projectHomepage";
import "../styles.css";
import { heroInterface } from "./hero";
import { descriptionModal } from "./Modals/descriptionModal";
import { renameModal } from "./Modals/renameModal";
import { navBar } from "./navBar";

export const homepage = {
  makeHomepage: function () {
    this.createElement();
    heroInterface.displayProjects(false);

    renameModal.createModal();
    descriptionModal.createModal();

    projectButtons.addAllButtons();
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
