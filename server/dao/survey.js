const db = require("../db/db");

class SurveyDAO {
  async createSurvey(
    employee,
    initiativeId,
    comment,
    knowledge,
    prepared,
    priority,
    value
  ) {
    const [id] = await db("survey").insert({
      employee: employee,
      initiativeId: initiativeId,
      comment: comment,
      knowledge: knowledge,
      prepared: prepared,
      priority: priority,
      value: value,
    });
    return id;
  }
}

module.exports = new SurveyDAO();
