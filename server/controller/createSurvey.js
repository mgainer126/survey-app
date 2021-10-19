const SurveyService = require("../service/survey");

class SurveyController {
  async createSurvey(req, res) {
    try {
      const id = await SurveyService.createSurvey(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new SurveyController();
