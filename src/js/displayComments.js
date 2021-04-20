const Utils = require("./utils");

const utils = new Utils();

const displayComments = (comments) => {
  const list = document.querySelector(".comments-list");
  list.innerHTML = "";

  const count = document.querySelector(".comments-count");
  count.textContent = `${comments.length} Comments`;

  comments.map((item) => {
    const formattedDate = utils.formatCommentDate(item.date);

    let li = document.createElement("li");
    li.classList.add("comment");

    li.innerHTML = `<div class="meta">
                          <div>
                            ${item.name}
                            ${formattedDate}
                          </div>
                          <div class="comment-likes">
                            ${item.likes} Likes
                          </div>
                        </div> 
                        <p class="comment-body">
                          ${item.body}
                        </p>`;

    list.appendChild(li);
  });
};

module.exports = displayComments;
