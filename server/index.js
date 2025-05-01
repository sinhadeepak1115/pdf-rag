const express = require("express");
const multer = require("multer");
const cors = require("cors");

const port = 8080;

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/pdf", upload.single("pdf"), function (req, res, next) {
  res.send("Hi Deepak");
});

app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
