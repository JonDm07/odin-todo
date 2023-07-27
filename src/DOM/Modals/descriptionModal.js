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
    closeButton.textContent = "X";
    form.appendChild(closeButton);

    const label = document.createElement("label");
    label.textContent = "Description";
    form.appendChild(label);

    const textarea = document.createElement("textarea");
    label.appendChild(textarea);
  },
};
