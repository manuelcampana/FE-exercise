const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", {
    meta: req.app.get("meta"),
  });
});

router.get("/:slug", (req, res, next) => {
  // Quick and dirty solution to allow for dynamic slugs
  // based on the assumption that all titles are "something - something"
  // and the slug is the first part of it
  // TODO: Replace with more elegant solution.
  const article = req.app.get("article").post;
  const title = article.title
    .split(" - ")[0]
    .replaceAll(" ", "-")
    .toLowerCase();

  if (req.params.slug === title) {
    res.render("article", {
      meta: req.app.get("meta"),
      article: article,
      posts: req.app.get("posts").posts,
    });
  } else {
    // TODO: 404 instead?
    res.redirect("/");
  }
});

module.exports = router;
