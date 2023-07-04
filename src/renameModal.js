import { objectsInterface } from "./projects";

export const renameModal = {
  modalDiv: undefined,

  createModal: function () {
    const body = document.querySelector("body");
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("rename-modal");
    body.appendChild(modalDiv);

    const form = document.createElement("form");
    modalDiv.appendChild(form);

    const label = document.createElement("label");
    label.textContent = "Name";
    form.appendChild(label);

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "project-rename");
    input.setAttribute("name", "project-rename");
    label.appendChild(input);

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("rename", "submit");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Submit";

    form.appendChild(submitBtn);

    const closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.classList.add("rename", "close");
    closeButton.setAttribute("type", "button");

    form.appendChild(closeButton);

    renameModal.modalDiv = document.querySelector(".rename-modal");
  },

  closeButton: function () {
    const button = document.querySelector(".rename.close");
    return button;
  },

  submitButton: function () {
    const button = document.querySelector(".rename.submit");
    return button;
  },
};
