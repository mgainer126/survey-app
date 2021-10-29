import { React, Component } from "react";
import StatsFilter from "../../components/StatsFilter/StatsFilter";
import "../StatsPage/StatsPage.scss";
import axios from "axios";
import StatsPageColl from "../../components/StatsPage/StatsPageColl";

export default class StatsPage extends Component {
  state = {
    results: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get("http://localhost:8080/request/survey")
      .then((response) => {
        let allData = response.data;
        let filteredData = allData.filter(
          (employee) => employee.employee === event.target[0].value
        );
        this.setState({ results: filteredData });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="stats">
        <StatsFilter filter={this.handleSubmit} />
        {this.state.results && this.state.results && (
          <div>
            <StatsPageColl results={this.state.results} />
          </div>
        )}
      </div>
    );
  }
}
