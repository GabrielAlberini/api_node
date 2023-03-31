const mongoose = require("mongoose");

const TracksScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: (res) => {
        return true;
      },
      message: "ERROR_URL",
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nacionality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: String,
      },
      end: {
        type: String,
      },
    },
    mediaID: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true, //createdAt, updatedAt
    versionKey: false,
  }
);

module.exports = mongoose.model("tracks", TracksScheme);
