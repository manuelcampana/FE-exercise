const axios = require("axios");
const getComments = require("./getComments");

jest.mock("axios");

describe("getComments", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call the right API", async () => {
    const data = [];
    axios.get.mockResolvedValueOnce({ data: data });
    await getComments();

    expect(axios.get).toHaveBeenCalledWith(
      "https://my-json-server.typicode.com/telegraph/frontend-exercise/comments"
    );
  });

  it("should fetch successfully from the API", async () => {
    const data = [];
    axios.get.mockResolvedValueOnce({ data: data });

    await expect(getComments()).resolves.toEqual(data);
  });

  it("should fetch erroneously from the API", async () => {
    const errorMessage = "Network Error";
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    await expect(getComments()).rejects.toThrow(errorMessage);
  });
});
