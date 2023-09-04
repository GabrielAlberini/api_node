require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const app = express();

app.use(cors());
app.use(express.json());

//Habilitación para que express pueda tomar los archivos de storage
app.use(express.static("storage")); // localhost:3001/file-1684893638950.png

const port = process.env.PORT || 3000;

app.use("/api", require("./routes"));

app.listen(port, async () => {
  console.log("Tu app está lista en:", `http://localhost:${port}`);
});

dbConnect();
