function addButtons() {
  const form = document.querySelector("form");

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "Submit";
  form.appendChild(submitBtn);
}

function addInputs() {
  const form = document.querySelector("form");

  const label = document.createElement("label");
  label.setAttribute("for", "project-name");
  label.textContent = "Name of project";
  form.appendChild(label);

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "project-name");
  input.setAttribute("name", "project-name");
  label.appendChild(input);

  const selectLabel = document.createElement("label");
  selectLabel.textContent = "Priority";
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

  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description";
  form.appendChild(descriptionLabel);

  const descriptionInput = document.createElement("textarea");
  descriptionLabel.appendChild(descriptionInput);
  descriptionInput.setAttribute("rows", "5");
}

function createForm() {
  const modalDiv = document.querySelector(".nav-modal");

  const form = document.createElement("form");
  modalDiv.appendChild(form);
}

export const projectModal = {
  createModal: function () {
    const body = document.querySelector("body");

    const modalDiv = document.createElement("div");
    body.appendChild(modalDiv);
    modalDiv.classList.add("nav-modal");

    createForm();
    addInputs();
    addButtons();
  },
};
