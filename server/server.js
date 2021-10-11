const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const updateSurvey = require("./routes/updateSurvey");

app.use(cors());

app.use(express.json());

app.use(express.static("public"));

app.use((req, _res, next) => {
  console.log("Request:");
  console.log("- Path:", req.path);
  console.log("- Time:", new Date());
  next();
});

app.use("/update", updateSurvey);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log("This is working");
});
