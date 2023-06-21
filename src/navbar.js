export function navBar() {
  let numOfProjects = 0;

  const navBarDiv = document.querySelector(".nav-bar");

  const projectBtn = document.createElement("button");
  projectBtn.textContent = "Add Project";
  navBarDiv.appendChild(projectBtn);

  const list = document.createElement("ul");
  navBarDiv.appendChild(list);

  const span = document.createElement("span");
  list.appendChild(span);
  span.textContent = `Projects: ${numOfProjects}`;
}

export function createModal() {
  const body = document.querySelector("body");

  const modalDiv = document.createElement("div");
  body.appendChild(modalDiv);
  modalDiv.classList.add("nav-modal");

  const form = document.createElement("form");
  modalDiv.appendChild(form);

  const label = document.createElement("label");
  label.setAttribute("for", "project-name");
  label.textContent = "Name of project";
  form.appendChild(label);

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "project-name");
  label.appendChild(input);

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "Submit";
  form.appendChild(submitBtn);
}

export function displayModal() {
  const modal = document.querySelector(".nav-modal");
  const projectBtn = document.querySelector(".nav-bar > button");

  if (modal.style.display === "block") {
    modal.style.display = "";
    projectBtn.textContent = "Add Project";
  } else if (modal.style.display === "") {
    modal.style.display = "block";
    projectBtn.textContent = "Cancel";
  }
}
