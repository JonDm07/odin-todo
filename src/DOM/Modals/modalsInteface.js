export const modalsInterface = {
  displayModal: function (modal) {
    const computedStyle = getComputedStyle(modal);

    if (computedStyle.display === "block" || computedStyle.display === "flex") {
      modal.style.display = "none";
    } else if (
      computedStyle.display === "" ||
      computedStyle.display === "none"
    ) {
      modal.style.display = "block";
    }
  },
  clearInputs: function (modal) {
    const inputsArray = document.querySelectorAll(
      `.${modal.className} > form > label > *`
    );

    inputsArray.forEach((input) => {
      input.value = "";
    });
  },
  clearSingleInput: function (input) {
    input.value = "";
  },
  invalidInput: function (input) {
    input.classList.add("invalid");
  },
  undoInvalidInput: function (input) {
    input.classList.remove("invalid");
  },
};
