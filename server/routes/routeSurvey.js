const express = require("express");
const router = express.Router();
const SurveyController = require("../controller/createSurvey");
const app = express();

app.use(express.json());

router.post("/survey", SurveyController.createSurvey);

// router.get("/survey", (req, res) => {
//   console.log("5");
//   knex
//     .select()
//     .from("survey.survey")
//     .then((data) => {
//       console.log(data);
//       res.status(200).json(data);
//     })
//     .catch((err) => res.send("error getting survey data"));
// });

router.get("/survey", function (req, res) {
  res.send("GET request to the homepage");
});

module.exports = router;
