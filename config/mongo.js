const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("***Conexión exitosa a la base de datos***");
    })
    .catch((err) => {
      console.error("***Error de conexión a la base de datos***");
    });
};

module.exports = dbConnect;
