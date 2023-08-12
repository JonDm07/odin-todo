export const header = {
  createHomepageHeader: function () {
    const header = document.querySelector("header");

    const appName = document.createElement("h1");
    appName.textContent = "Todo list";
    header.appendChild(appName);

    header.div = header;
  },
};
