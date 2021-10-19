const surveyDAO = require("../dao/survey");

class SurveyService {
  createSurvey(surveyDTO) {
    const { employee, comment, knowledge, prepared, priority, value } =
      surveyDTO;

    return surveyDAO.createSurvey(
      employee,
      initiativeId,
      comment,
      knowledge,
      prepared,
      priority,
      value
    );
  }
}
module.exports = new SurveyService();
