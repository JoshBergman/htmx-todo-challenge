const path = require("path");

exports.testController = async (req, res) => {
  const indexPath = path.join(__dirname, "test.html");
  res.sendFile(indexPath);
};
