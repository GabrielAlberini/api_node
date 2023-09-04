const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      // linea para no mostrar la contraseña en la respuesta
      select: false,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true, //createdAt, updatedAt
    versionKey: false,
  }
);
UserScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("user", UserScheme);
