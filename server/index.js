const express = require("express");
const multer = require("multer");
const cors = require("cors");

const port = 8080;

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/tmp/my-uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  return res.json({ status: "All Good!" });
});

app.post("upload/pdf", upload.single("pdf"), (req, res) => {
  return res.json({ message: "uploaded" });
});

app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
