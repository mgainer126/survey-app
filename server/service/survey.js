const surveyDAO = require("../dao/survey");

class SurveyService {
  createSurvey(surveyDTO) {
    const { surveyId, comment, knowledge, prepared, priority, value } =
      surveyDTO;

    return surveyDAO.createSurvey(
      surveyId,
      comment,
      knowledge,
      prepared,
      priority,
      value
    );
  }
}
module.exports = new SurveyService();
