export const modalsInterface = {
  displayModal: function (modal) {
    if (modal.style.display === "block") {
      modal.style.display = "none";
    } else if (modal.style.display === "" || modal.style.display === "none") {
      modal.style.display = "block";
    }
  },
};
