const express = require("express");
const exphbs = require("express-handlebars");
const moment = require("moment");
const router = require("./router");
const meta = require("./content/meta.json");
const article = require("./content/article.json");
const posts = require("./content/posts.json");
const app = express();
const port = 3000;

var hbs = exphbs.create({
  helpers: {
    formatArticleDate: function (date) {
      return moment(date).format("dddd DD MMMM YYYY, h:mma");
    },
    ifEquals: function (a, b, options) {
      if (a == b) return options.fn(this);
      return options.inverse(this);
    },
  },
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("meta", meta);
app.set("article", article);
app.set("posts", posts);

app.use("*/static", express.static("public"));

app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}!`));
