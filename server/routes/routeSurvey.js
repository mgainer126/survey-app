const express = require("express");
const router = express.Router();
// const SurveyController = require("../controller/createSurvey");
const app = express();
const database = require("../database");

app.use(express.json());

router.post("/survey", (req, res) => {
  const {
    employee,
    initiativeId,
    comment,
    knowledge,
    prepared,
    priority,
    value,
    ownership,
  } = req.body;
  if (
    employee &&
    initiativeId &&
    comment &&
    knowledge &&
    prepared &&
    priority &&
    value &&
    ownership
  ) {
    try {
      database
        .promise()
        .query(
          `INSERT INTO SURVEY VALUES('${employee}',' ${comment}','${knowledge} ','${prepared}','${priority}','${value}','${initiativeId}','${ownership}')`
        );
      res.status(201).send({ msg: "success" });
    } catch (err) {
      console.log(err);
    }
  }
});

router.get("/survey", async (req, res) => {
  const results = await database.promise().query("SELECT * FROM survey");
  console.log(results[0]);
  res.status(200).send(results[0]);
});

router.get("/credentials", async (req, res) => {
  const results = await database.promise().query("SELECT * FROM credentials");
  console.log(results[0]);
  res.status(200).send(results[0]);
});

module.exports = router;
