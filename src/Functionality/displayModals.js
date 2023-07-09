import { navBar } from "../DOM/navbar";

export const modals = {
  displayModal: function (modal) {
    const projectBtn = navBar.addProjectButton();

    if (modal.style.display === "block") {
      modal.style.display = "";
    } else if (modal.style.display === "") {
      modal.style.display = "block";
    }
  },
};
