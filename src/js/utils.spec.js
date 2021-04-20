const Utils = require("./utils");

describe("Utils", () => {
  describe("isHomePage", () => {
    it("should match if on homepage", () => {
      const utils = new Utils();
      window.history.pushState({}, "", "/");
      expect(utils.isHomePage()).toBeTruthy();
    });

    it("should match if on homepage and has query parameters", () => {
      const utils = new Utils();
      window.history.pushState({}, "", "/?foo=bar");
      expect(utils.isHomePage()).toBeTruthy();
    });

    it("should match if on homepage and has hash navigation", () => {
      const utils = new Utils();
      window.history.pushState({}, "", "/#foo");
      expect(utils.isHomePage()).toBeTruthy();
    });

    it("should not match if on another page", () => {
      const utils = new Utils();
      window.history.pushState({}, "", "/news");
      expect(utils.isHomePage()).toBeFalsy();
    });

    it("should match with different homepage parameter", () => {
      const utils = new Utils({
        homePagePath: "/home",
      });
      window.history.pushState({}, "", "/home");
      expect(utils.isHomePage()).toBeTruthy();
    });
  });

  describe("formatCommentDate", () => {
    it("should return the date formatted as D MMM YYYY, h:mmA", () => {
      const utils = new Utils();
      const inputDate = "2019-04-23T22:26:43.511Z";
      expect(utils.formatCommentDate(inputDate)).toEqual(
        "23 Apr 2019, 11:26PM"
      );
    });
    it("should not accept an invalid date", () => {
      const utils = new Utils();
      const inputDate = new Date("hello");
      expect(utils.formatCommentDate(inputDate)).toEqual("Invalid date");
    });
  });

  describe("sortBy", () => {
    const arr = [
      { id: 3, name: "Sarah" },
      { id: 1, name: "Fred" },
      { id: 5, name: "John" },
    ];

    it("should sort an array of objects by a number (id)", () => {
      const utils = new Utils();
      let sorted = utils.sortBy(arr, "id");
      expect(sorted).toEqual([
        { id: 5, name: "John" },
        { id: 3, name: "Sarah" },
        { id: 1, name: "Fred" },
      ]);
    });

    it("should sort an array of objects by a string (name)", () => {
      const utils = new Utils();
      let sorted = utils.sortBy(arr, "name");
      expect(sorted).toEqual([
        { id: 3, name: "Sarah" },
        { id: 5, name: "John" },
        { id: 1, name: "Fred" },
      ]);
    });
  });
});
