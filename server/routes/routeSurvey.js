const express = require("express");
const router = express.Router();
const SurveyController = require("../controller/createSurvey");
const app = express();
const database = require("../database");

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

router.get("/survey", async (req, res) => {
  const results = await database.promise().query("SELECT * FROM survey");
  console.log(results[0]);
  res.status(200).send(results[0]);
});

module.exports = router;
