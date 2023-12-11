//sessions is used to store user data
module.exports.sessions = {
  sessionID: {
    tasks: {
      taskName: {
        isModifying: false,
        completed: true,
      },
    },
  },
  invalidID: {
    tasks: {
      id_is_invalid: true,
      clear_local_storage_to_fix_id: false,
    },
  },
};
