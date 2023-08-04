import { heroInterface } from "../../../DOM/hero";
import { homepage } from "../../../DOM/homePage";
import { modalsInterface } from "../../../DOM/Modals/modalsInteface";
import { projectModal } from "../../../DOM/Modals/projectModal";
import { formValidation } from "../../formValidation";
import { objectsInterface } from "../../projects";

export const projectModalButtons = {
  submitButton: function () {
    projectModal.submitButton.onclick = function (e) {
      e.preventDefault();

      const name = projectModal.nameInput.value;
      const priority = projectModal.selectInput.value;
      const array = objectsInterface.projectsArray;
      const type = "project";

      if (formValidation.validateForm(name, array) === true) {
        console.log("INVALID FROM");
        modalsInterface.displayModal(projectModal.div);
        return;
      } else {
        const project = objectsInterface.createProject(type, name);
        objectsInterface.changePriority(project, priority);

        objectsInterface.projectsArray.push(project);

        homepage.displayProjects(true);

        modalsInterface.displayModal(projectModal.div);
        modalsInterface.clearInputs(projectModal.div);
      }
    };
  },
};
