import { renameModalButtons } from "../../Functionality/Buttons/Modals/renameModal";

export const renameModal = {
  createModal: function () {
    const body = document.querySelector("body");
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("rename-modal");
    body.appendChild(modalDiv);

    const form = document.createElement("form");
    modalDiv.appendChild(form);

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.setAttribute("type", "button");
    form.appendChild(closeButton);

    const label = document.createElement("label");
    label.textContent = "Name";
    form.appendChild(label);

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "project-rename");
    input.setAttribute("name", "project-rename");
    label.appendChild(input);

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit");
    submitBtn.setAttribute("type", "submit");
    form.appendChild(submitBtn);

    renameModal.div = modalDiv;
    renameModal.nameInput = input;
    renameModal.closeButton = closeButton;
    renameModal.submitButton = submitBtn;

    this.addListenersToModal();
  },
  addListenersToModal: function () {
    renameModalButtons.closeButton();
    renameModalButtons.submitButton();
  },
};
