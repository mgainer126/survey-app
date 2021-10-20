import { React, Component } from "react";
import Questions from "../../components/Questions/Questions";
import axios from "axios";

export default class QuestionPage extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let feedback = [
      {
        employee: event.target[0].value,
        initiativeId: event.target[1].value,
        value: event.target[2].value,
        prepared: event.target[3].value,
        priority: event.target[4].value,
        knowledge: event.target[5].value,
        ownership: event.target[6].value,
        comment: event.target[7].value,
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
        <Questions submit={this.handleSubmit} />
      </>
    );
  }
}
