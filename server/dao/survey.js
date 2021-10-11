const db = require("../db/dp");

class SurveyDAO {
  async createSurvey(surveyId, comment, knowledge, prepared, priority, value) {
    const [id] = await db("surveyinfo")
      .insert({
        surveyId: surveyId,
        comment: comment,
        knowledge: knowledge,
        prepared: prepared,
        priority: priority,
        value: value,
      })
      .returning("id");
    return id;
  }
}

module.exports = new SurveyDAO();
