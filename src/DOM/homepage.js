import "../styles.css";
import { navBar } from "./navbar";
import { projectModal } from "./projectsModal";
import { renameModal } from "./renameModal";
import { buttonListeners } from "../Functionality/ButtonListeners/buttonListeners";
import { modalListeners } from "../Functionality/ButtonListeners/modalListeners";
import { taskModal } from "./taskModal";

export const homepage = {
  makeHomepage: function (initialLoad) {
    createElement(initialLoad);
    buttonListeners.doHomepageListeners();
    modalListeners.doRenameModalListeners();
    modalListeners.doTaskModalSubmit();
    modalListeners.doProjectModal();
  },
};

function createElement(initialLoad) {
  if (initialLoad === true) {
    const body = document.querySelector("body");

    const header = document.createElement("header");
    body.appendChild(header);

    const navBarDiv = document.createElement("div");
    navBarDiv.classList.add("nav-bar");
    body.appendChild(navBarDiv);

    navBar.createNavBar();
    projectModal.createModal();
    renameModal.createModal();
    taskModal.createModal();

    const hero = document.createElement("div");
    hero.classList.add("hero");
    body.appendChild(hero);

    const footer = document.createElement("footer");
    body.appendChild(footer);
  }
}
