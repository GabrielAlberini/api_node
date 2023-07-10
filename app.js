require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const ngrok = require("ngrok");

const app = express();

app.use(cors());
app.use(express.json());

//Habilitación para que express pueda tomar los archivos de storage
app.use(express.static("storage")); // localhost:3001/file-1684893638950.png

const port = process.env.PORT || 3000;

app.use("/api", require("./routes"));

app.listen(port, async () => {
  const url = await ngrok.connect({
    proto: "http",
    addr: port,
  });

  // console.log("Tu app está lista en:", url);
});

dbConnect();
