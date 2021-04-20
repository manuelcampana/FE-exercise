const axios = require("axios");

const getComments = () => {
  const apiUrl =
    "https://my-json-server.typicode.com/telegraph/frontend-exercise/comments";

  return new Promise((resolve, reject) => {
    axios
      .get(apiUrl)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = getComments;
