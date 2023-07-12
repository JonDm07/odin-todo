export function createProject(type) {
  return { type };
}

export const objectsInterface = {
  projectsArray: [
    {
      type: "project",
      tasks: [],
      name: "Hello World",
      priority: "1",
      description: "",
    },
  ],
  /*   currentSelectedProject: undefined, */
  changeName: function (object, name) {
    object.name = name;
  },
  changeDescription: function (object, description) {
    object.description = description;
  },
  changePriority: function (object, priority) {
    object.priority = priority;
  },
  addNotes: function (object, ...note) {
    if (object.notes === undefined) {
      object.notes = [];
    }
    object.notes.push(...note);
  },
  addTask: function (object, ...task) {
    if (object.tasks === undefined) {
      object.tasks = [];
    }

    object.tasks.push(...task);
  },
  getIndexOfProject: function (name) {
    for (let i = 0; i < this.projectsArray.length; i++) {
      if (name === this.projectsArray[i].name) {
        return i;
      }
    }
  },
};
