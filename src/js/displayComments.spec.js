const displayComments = require("./displayComments");

describe("displayComments", () => {
  let l = document.createElement("ul");
  l.classList.add("comments-list");
  document.body.appendChild(l);

  let c = document.createElement("div");
  c.classList.add("comments-count");
  document.body.appendChild(c);

  let list = document.querySelector(".comments-list");
  let count = document.querySelector(".comments-count");

  jest.spyOn(list, "appendChild");

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display nothing if there are no comments to display", () => {
    const comments = [];
    displayComments(comments);
    expect(list.appendChild).toBeCalledTimes(0);
  });

  it("should display the comments if there are comments to display", () => {
    const comments = [{ id: 1 }, { id: 2 }];
    displayComments(comments);
    expect(list.appendChild).toBeCalledTimes(2);
    expect(list.appendChild).toBeCalledWith(expect.any(HTMLElement));
  });

  it("should display the number of comments in the comments count", () => {
    const comments = [{ id: 1 }, { id: 2 }];
    displayComments(comments);
    expect(count.textContent).toEqual("2 Comments");
  });

  it("should show 0 in the comments count if there are no comments", () => {
    const comments = [];
    displayComments(comments);
    expect(count.textContent).toEqual("0 Comments");
  });
});
