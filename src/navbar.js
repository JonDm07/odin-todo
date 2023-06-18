let numOfProjects = 0;

function createModal() {
  const body = document.querySelector("body");

  const wrapper = document.createElement("div");
  wrapper.classList.add("nav-modal-wrapper");
  body.appendChild(wrapper);

  const div = document.createElement("div");
  wrapper.appendChild(div);
  div.classList.add("nav-modal");

  const form = document.createElement("form");
  div.appendChild(form);

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

function createProject(name) {
  const list = document.querySelector("ul");

  const listItem = document.createElement("li");
  list.appendChild(listItem);

  const anchor = document.createElement("a");
  anchor.textContent = `${name}`;
  listItem.appendChild(anchor);
}

export function navBar() {
  const navBarDiv = document.querySelector(".nav-bar");

  const addProjectBtn = document.createElement("button");
  addProjectBtn.textContent = "Add Project";
  navBarDiv.appendChild(addProjectBtn);

  const list = document.createElement("ul");
  navBarDiv.appendChild(list);

  const span = document.createElement("span");
  list.appendChild(span);
  span.textContent = `Projects: ${numOfProjects}`;

  addProjectBtn.addEventListener("click", () => {
    createModal();

    const submitBtn = document.querySelector("form > button");

    submitBtn.onclick = function (e) {
      e.preventDefault();

      const name = document.querySelector("input").value;

      createProject(name);
      numOfProjects++;

      span.textContent = `Projects: ${numOfProjects}`;
    };
  });
}
