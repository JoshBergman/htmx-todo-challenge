//sessions is used to store user data
module.exports.sessions = {
  sessionID: {
    tasks: {
      taskName: false, //taskName : completion status
      isModifying: false,
    },
  },
  invalidID: {
    tasks: {
      id_is_invalid: true,
      clear_local_storage_to_fix_id: false,
    },
  },
};
