//sessions is used to store user data
module.exports.sessions = {
  sessionID: {
    tasks: {
      taskName: {
        isModifying: false,
        completed: true,
      },
    },
    isAdding: false,
  },
  invalidID: {
    tasks: {
      id_is_invalid: true,
    },
    isAdding: false,
  },
};
