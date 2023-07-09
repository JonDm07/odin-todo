import { projectModal } from "./projectsModal";

export const taskModal = {
  createModal: function () {
    const body = document.querySelector("body");

    const modalDiv = document.createElement("div");
    modalDiv.classList.add("task-modal");
    body.appendChild(modalDiv);

    projectModal.addForm(modalDiv);

    const form = document.querySelector(".task-modal > form");

    projectModal.addInputs(form, "task");
    projectModal.addButtons(form);
  },
};
