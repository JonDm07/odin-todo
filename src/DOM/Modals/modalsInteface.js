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
};
