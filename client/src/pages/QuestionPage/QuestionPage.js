// import React from "react";
import { React, Component } from "react";
import Questions from "../../components/Questions/Questions";
import { v4 as uuidv4 } from "uuid";

export default class QuestionPage extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let feedback = [
      {
        surveyId: uuidv4(),
        value: event.target[0].value,
        prepared: event.target[1].value,
        priority: event.target[2].value,
        knowledge: event.target[3].value,
        ownership: event.target[4].value,
        comment: event.target[5].value,
      },
    ];

    console.log(feedback);
  };

  render() {
    return (
      <>
        <Questions submit={this.handleSubmit} />
      </>
    );
  }
}
