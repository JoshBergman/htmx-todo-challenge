const { sessions } = require("../../store/sessions");

module.exports.createSessionIDController = (req, res) => {
  const nextSessionID = Object.keys(sessions).length;
  sessions[nextSessionID] = { tasks: {} };

  res.json({ id: String(nextSessionID) });
};
