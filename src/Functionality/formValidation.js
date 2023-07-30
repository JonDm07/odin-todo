export const formValidation = {
  checkIfEmpty: function (input) {
    if (input === "") {
      return 400;
    } else {
      return false;
    }
  },
  checkSameName: function (input, array) {
    let takenArray = [];

    array.forEach((element) => {
      if (element.name === input) {
        takenArray.push(true);
      }
    });

    if (takenArray.length === 0) {
      return false;
    } else {
      return 401;
    }
  },

  validateForm: function (input, array) {
    if (formValidation.checkIfEmpty(input) === 400) {
      /* modals.changeInputError(input, 400); */
      return true;
    }

    if (formValidation.checkSameName(input, array) === 401) {
      return true;
    } else {
      return false;
    }
  },
};
