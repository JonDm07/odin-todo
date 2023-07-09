export const projectModal = {
  createModal: function () {
    const body = document.querySelector("body");

    const modalDiv = document.createElement("div");
    modalDiv.classList.add("nav-modal");
    body.appendChild(modalDiv);

    this.addForm(modalDiv);

    const form = document.querySelector(".nav-modal > form");

    this.addInputs(form, "project");
    this.addButtons(form);
  },

  addForm: function (modal) {
    const form = document.createElement("form");
    modal.appendChild(form);
  },
  addInputs: function (form, type) {
    const label = document.createElement("label");
    label.setAttribute("for", `${type}-name`);
    label.textContent = "Name";
    form.appendChild(label);

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", `${type}-name`);
    input.setAttribute("name", `${type}-name`);
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
  },
  addButtons: function (form) {
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Submit";
    form.appendChild(submitBtn);
  },
};
