import "./styles.css";
import { navBar } from "./navbar";

export function makeHomepage(initialLoad) {
  createElements(initialLoad);
}

function createElements(initialLoad) {
  const body = document.querySelector("body");

  if (initialLoad === true) {
    const header = document.createElement("header");
    body.appendChild(header);

    const navBarDiv = document.createElement("div");
    navBarDiv.classList.add("nav-bar");
    body.appendChild(navBarDiv);

    navBar();

    const hero = document.createElement("div");
    hero.classList.add("hero");
    body.appendChild(hero);

    const footer = document.createElement("footer");
    body.appendChild(footer);
  }
}
