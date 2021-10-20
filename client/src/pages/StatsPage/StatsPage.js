import { React, Component } from "react";
import Stats from "../../components/Stats/Stats";
import axios from "axios";

export default class StatsPage extends Component {
  render() {
    axios
      .get("http://localhost:8080/request/survey")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    return (
      <>
        <Stats />
      </>
    );
  }
}
