// import React from "react";
import { React, Component } from "react";
import Questions from "../../components/Questions/Questions";
import axios from "axios";

export default class QuestionPage extends Component {
  state = {
    employee: "Select Employee For Survey",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let feedback = [
      {
        surveyId: "Matt Gainer",
        value: event.target[0].value,
        prepared: event.target[1].value,
        priority: event.target[2].value,
        knowledge: event.target[3].value,
        ownership: event.target[4].value,
        comment: event.target[5].value,
      },
    ];
    this.createSurveyResults(feedback[0]);
    console.log(feedback);
  };

  createSurveyResults = (obj) => {
    axios
      .post("http://localhost:8080/update/survey", obj)
      .then((response) => {
        console.log(response);
        console.log("sucess");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <Questions submit={this.handleSubmit} employee={this.state.employee} />
      </>
    );
  }
}
