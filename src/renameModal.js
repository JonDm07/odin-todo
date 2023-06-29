export function createRenameModal() {
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
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "Submit";

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });

  form.appendChild(submitBtn);

  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.classList.add("rename", "close");
  closeButton.setAttribute("type", "button");

  closeButton.addEventListener("click", () => {
    modalDiv.style.display = "none";
  });

  form.appendChild(closeButton);
}
