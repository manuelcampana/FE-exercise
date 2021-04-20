const displayComments = require("./displayComments");
const getComments = require("./getComments");
const Utils = require("./utils");

const utils = new Utils();

// Get comments on DOM ready
window.addEventListener("DOMContentLoaded", () => {
  getComments()
    .then((res) => {
      displayComments(res);
      document.getElementById("sort-btn-likes").addEventListener("click", () =>
        // TODO: change button state
        displayComments(utils.sortBy(res, "likes"))
      );
      document.getElementById("sort-btn-newest").addEventListener("click", () =>
        // TODO: change button state
        displayComments(utils.sortBy(res, "date"))
      );
    })

    .catch((error) => {
      // TODO: handle errors
    });
});
