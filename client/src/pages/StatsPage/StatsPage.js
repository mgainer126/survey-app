import { React, Component } from "react";
import Table from "react-bootstrap/Table";
import Stats from "../../components/Stats/Stats";
import axios from "axios";

export default class StatsPage extends Component {
  state = {
    results: null,
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/request/survey")
      .then((response) => {
        this.setState({ results: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.results);
    return (
      <>
        {this.state.results && this.state.results && (
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
        )}
      </>
    );
  }
}
