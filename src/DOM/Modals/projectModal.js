import { projectModalButtons } from "../../Functionality/Buttons/Modals/projectModal";
import { projectButtons } from "../../Functionality/Buttons/projects";

export const projectModal = {
  createModal: function () {
    const body = document.querySelector("body");

    const modalDiv = document.createElement("div");
    modalDiv.classList.add("project-modal");
    body.appendChild(modalDiv);

    const form = document.createElement("form");
    modalDiv.appendChild(form);

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    form.appendChild(closeButton);

    const label = document.createElement("label");
    label.setAttribute("for", `project-name`);
    label.textContent = "Name:";
    form.appendChild(label);

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", `project-name`);
    nameInput.setAttribute("name", `project-name`);
    nameInput.setAttribute("placeholder", "Project name");
    label.appendChild(nameInput);

    const selectLabel = document.createElement("label");
    selectLabel.textContent = "Priority:";
    form.appendChild(selectLabel);

    const selectInput = document.createElement("select");
    selectLabel.appendChild(selectInput);

    let options = [];

    for (let i = 0; i < 5; i++) {
      const option = document.createElement("option");
      option.setAttribute("value", i + 1);
      option.text = `${i + 1}`;
      selectInput.appendChild(option);
      options.push(option);
    }

    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Due date:";
    form.appendChild(dateLabel);

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateLabel.appendChild(dateInput);

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description:";
    form.appendChild(descriptionLabel);

    const descriptionInput = document.createElement("textarea");
    descriptionLabel.appendChild(descriptionInput);
    descriptionInput.setAttribute("rows", "5");

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit");
    submitBtn.setAttribute("type", "submit");
    form.appendChild(submitBtn);

    projectModal.div = modalDiv;
    projectModal.nameInput = nameInput;
    projectModal.selectInput = selectInput;
    projectModal.submitButton = submitBtn;
    projectModal.closeButton = closeButton;
    projectModal.descriptionInput = descriptionInput;
    projectModal.dateInput = dateInput;

    projectModalButtons.addAllButtons();
  },
};
