import StatsHeader from "../StatsHeader/StatsHeader";
import Table from "react-bootstrap/Table";
import Stats from "../Stats/Stats";
import Pdf from "react-to-pdf";
import React from "react";
import "./StatsPageColl.scss";
const ref = React.createRef();
const options = {
  orientation: "landscape",
  unit: "in",
  format: [15, 13],
};

function StatsPageColl({ results }) {
  return (
    <div ref={ref}>
      <Table striped bordered hover>
        <StatsHeader />
        <Stats results={results} />
        <Pdf targetRef={ref} filename="employeeResults.pdf" options={options}>
          {({ toPdf }) => (
            <button className="stats__pdfbtn" onClick={toPdf}>
              Create PDF
            </button>
          )}
        </Pdf>
      </Table>
    </div>
  );
}

export default StatsPageColl;
