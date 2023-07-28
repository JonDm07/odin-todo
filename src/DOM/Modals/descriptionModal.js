import { descriptionModalButtons } from "../../Functionality/Buttons/Modals/descriptionModal";

export const descriptionModal = {
  createModal: function () {
    const body = document.querySelector("body");
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("description-modal");
    body.appendChild(modalDiv);

    const form = document.createElement("form");
    modalDiv.appendChild(form);

    const closeButton = document.createElement("button");
    closeButton.classList.add("close");
    closeButton.setAttribute("type", "button");
    closeButton.textContent = "X";
    form.appendChild(closeButton);

    const label = document.createElement("label");
    label.textContent = "Description";
    form.appendChild(label);

    const textarea = document.createElement("textarea");
    label.appendChild(textarea);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.classList.add("submit");
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    descriptionModal.div = modalDiv;
    descriptionModal.closeButton = closeButton;
    descriptionModal.submitButton = submitButton;

    this.addListenersToModal();
  },
  addListenersToModal: function () {
    descriptionModalButtons.closeButton();
    descriptionModalButtons.submitButton();
  },
};
