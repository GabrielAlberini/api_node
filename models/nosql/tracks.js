const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

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
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true, //createdAt, updatedAt
    versionKey: false,
  }
);

TracksScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("tracks", TracksScheme);
