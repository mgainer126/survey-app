const express = require("express");
const router = express.Router();
const SurveyController = require("../controller/createSurvey");
const app = express();

app.use(express.json());

router.post("/survey", SurveyController.createSurvey);

module.exports = router;
