import { dateModalButtons } from "../../Functionality/Buttons/Modals/dateModal";

export const dateModal = {
  createModal: function () {
    const body = document.querySelector("body");
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("date-modal");
    body.appendChild(modalDiv);

    const form = document.createElement("form");
    modalDiv.appendChild(form);

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.setAttribute("type", "button");
    form.appendChild(closeButton);

    const label = document.createElement("label");
    label.textContent = "Due date:";
    form.appendChild(label);

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    label.appendChild(dateInput);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.classList.add("submit");
    form.appendChild(submitButton);

    dateModal.div = modalDiv;
    dateModal.submitButton = submitButton;
    dateModal.closeButton = closeButton;
    dateModal.dateInput = dateInput;

    dateModalButtons.addAllButtons();
  },
};
