import { objectsInterface } from "./projects";

export function navBar() {
  let numOfProjects = objectsInterface.projectsArray.length;

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
}

function createForm() {
  const modalDiv = document.querySelector(".nav-modal");

  const form = document.createElement("form");
  modalDiv.appendChild(form);
}

export function createModal() {
  const body = document.querySelector("body");

  const modalDiv = document.createElement("div");
  body.appendChild(modalDiv);
  modalDiv.classList.add("nav-modal");

  createForm();
  addInputs();
  addButtons();
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

export function updateProjectsNum(num) {
  const span = document.querySelector(".nav-bar > ul > span");
  span.textContent = `Projects: ${num}`;
}
