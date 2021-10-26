import { React, Component } from "react";
import Table from "react-bootstrap/Table";
import Stats from "../../components/Stats/Stats";
import StatsFilter from "../../components/StatsFilter/StatsFilter";
import "../StatsPage/StatsPage.scss";
import axios from "axios";

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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Inititave ID</th>
                  <th>Prepardness</th>
                  <th>Priority</th>
                  <th>Knowledge</th>
                  <th>Ownership</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                <Stats results={this.state.results} />
              </tbody>
            </Table>
          </div>
        )}
      </div>
    );
  }
}
