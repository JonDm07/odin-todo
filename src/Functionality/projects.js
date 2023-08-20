export const objectsInterface = {
  projectsArray: [
    {
      type: "project",
      name: "Project",
      tasks: [
        {
          type: "task",
          name: "Task 1",
          priority: "",
          description: "Brief description",
          dueDate: "2023-08-16T00:00:00.000Z",
          status: 0,
        },
        {
          type: "task",
          name: "Task 2",
          priority: "",
          description: "",
          dueDate: "2023-08-29T00:00:00.000Z",
          status: 0,
        },
        {
          type: "task",
          name: " Task 3",
          priority: "",
          description: "",
          dueDate: "2023-09-07T00:00:00.000Z",
          status: 0,
        },
      ],
      priority: "1",
      description: "Description",
      dueDate: "2023-08-29T00:00:00.000Z",
      status: 1,
    },
    {
      type: "project",
      name: "Project 1",
      tasks: [],
      priority: "1",
      description: "Short Description\n",
      dueDate: "2023-08-13T00:00:00.000Z",
      status: 0,
    },
    {
      type: "project",
      name: "Project 2",
      tasks: [],
      priority: "1",
      description: "A medium sized Description",
      dueDate: "2023-08-27T00:00:00.000Z",
      status: 0,
    },
    {
      type: "project",
      name: "Project 3",
      tasks: [
        {
          type: "task",
          name: "Task 1",
          priority: "",
          description: "",
          dueDate: null,
          status: 1,
        },
      ],
      priority: "1",
      description: "A long description for a very important project",
      dueDate: "2023-08-23T00:00:00.000Z",
      status: 0,
    },
  ],

  indexOfProject: 0,
  indexOfTask: 0,
  renameMode: undefined,
  createMode: undefined,
  descriptionMode: undefined,
  dateMode: undefined,

  createProject: function (type, name) {
    return { type, name };
  },
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
  changeDueDate: function (object, date) {
    object.dueDate = date;
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
  removeProject: function (indexOfProject) {
    objectsInterface.projectsArray.splice(indexOfProject, 1);
  },
  removeTask: function (project, indexOfTask) {
    project.tasks.splice(indexOfTask, 1);
  },
  makeDateObjectsFromISO: function (project) {
    if (typeof project.dueDate !== "object") {
      const dateObject = new Date(project.dueDate);

      project.dueDate = dateObject;
    }
  },
};
