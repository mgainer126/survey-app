import { React, useState } from "react";
import StatsFilter from "../../components/StatsFilter/StatsFilter";
import "../StatsPage/StatsPage.scss";
import axios from "axios";
import StatsPageColl from "../../components/StatsPage/StatsPageColl";
import useToken from "../../components/App/useToken";

function StatsPage() {
  const [results, setResults] = useState();
  const { token } = useToken();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get("http://localhost:8080/request/survey")
      .then((response) => {
        let allData = response.data;
        let filteredData = allData.filter(
          (employee) => employee.employee === event.target[0].value
        );
        setResults(filteredData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="stats">
      {token && (
        <>
          <StatsFilter filter={handleSubmit} />
          {results && (
            <div>
              <StatsPageColl results={results} />
            </div>
          )}
        </>
      )}
      {!token && (
        <>
          <h3>To view employee stats, requires a Manager Log In</h3>
        </>
      )}
    </div>
  );
}

export default StatsPage;
