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
  changeInputError(input, num) {
    if (!num) {
      input.style.border = "1px solid rgb(131, 131, 131)";
      input.setAttribute("placeholder", " ");
      input.value = "";
    } else if (num) {
      input.value = "";
      input.style.border = "1px solid red";
      input.setAttribute("placeholder", "Please enter valid name");
    }
  },
};
