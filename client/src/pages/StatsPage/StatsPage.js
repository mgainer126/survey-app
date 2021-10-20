import { React, Component } from "react";
import Stats from "../../components/Stats/Stats";
import axios from "axios";

export default class StatsPage extends Component {
  render() {
    axios
      .get("http://localhost:8080/request/survey")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    return (
      <>
        <Stats />
      </>
    );
  }
}
