import { makeHomepage } from "./homepage";
import { navBar, createModal, displayModal } from "./navbar";
import { submitForm } from "./form.js";

makeHomepage(true);

document.querySelector(".nav-bar > button").addEventListener("click", () => {
  displayModal();
});

document
  .querySelector(".nav-modal > form > button")
  .addEventListener("click", (e) => {
    e.preventDefault();

    submitForm();
    displayModal();
  });
