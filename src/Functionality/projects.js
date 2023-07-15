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
      status: undefined,
    },
  ],
  changeName: function (object, name) {
    object.name = name;
  },
  changeDescription: function (object, description) {
    object.description = description;
  },
  changePriority: function (object, priority) {
    object.priority = priority;
  },
  changeStatus: function (object) {
    if (object.status == 1) {
      object.status = 0;
    } else if (object.status == 0) {
      object.status = 1;
    } else {
      console.log("object.status is neither 1 or 0");
    }
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
