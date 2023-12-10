const path = require("path");

exports.appController = async (req, res) => {
  const indexPath = path.join(__dirname, "../../../app/index.html");
  console.log(indexPath);
  res.sendFile(indexPath);
};
