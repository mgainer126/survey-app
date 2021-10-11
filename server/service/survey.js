const surveyDAO = require("../dao/vendor");

class SurveyService {
  createSurvey(surveyDTO) {
    const { surveyId, comment, knowledge, prepared, priority, value } =
      surveyDTO;

    return surveyDAO.surveyVendor(
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
