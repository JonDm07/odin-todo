export const formValidation = {
  checkIfEmpty: function (inputValue) {
    if (inputValue === "") {
      alert("Empty!");
      return true;
    } else {
      return false;
    }
  },
  checkSameName: function (inputValue, array) {
    let takenArray = [];

    array.forEach((element) => {
      if (element.name === inputValue) {
        takenArray.push(true);
      }
    });

    if (takenArray.length === 0) {
      return false;
    } else {
      alert("Name taken");
      return true;
    }
  },

  validateForm: function (inputValue, array) {
    if (formValidation.checkIfEmpty(inputValue) === true) {
      return true;
    }

    if (formValidation.checkSameName(inputValue, array) === true) {
      return true;
    } else {
      return false;
    }
  },
};
