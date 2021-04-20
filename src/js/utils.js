/**
 * Dummy utility class to demonstrate a basic JS
 * structure and assoiciated test
 * @param {Object} params - containing:
 * @param {String} homePagePath - the pathname of the homepage (defaults to '/')
 */
class Utils {
  constructor(params) {
    this.params = Object.assign(
      {
        homePagePath: "/",
      },
      params
    );
  }

  /**
   * Is the user on the hompage
   * @return {Boolean}
   */
  isHomePage() {
    return document.location.pathname === this.params.homePagePath;
  }

  formatCommentDate(date) {
    const moment = require("moment");
    return moment(date).format("D MMM YYYY, h:mmA");
  }

  sortBy(list, prop) {
    return list.sort((a, b) =>
      a[prop] < b[prop] ? 1 : b[prop] < a[prop] ? -1 : 0
    );
  }
}

module.exports = Utils;
