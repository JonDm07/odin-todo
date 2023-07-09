export const taskDiv = {
  createDiv: function (project) {
    const div = document.createElement("div");
    div.classList.add("task-div");

    project.appendChild(div);
  },
};
