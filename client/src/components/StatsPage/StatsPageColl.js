import StatsHeader from "../StatsHeader/StatsHeader";
import Table from "react-bootstrap/Table";
import Stats from "../Stats/Stats";
import Pdf from "react-to-pdf";
import React from "react";
const ref = React.createRef();

function StatsPageColl({ results }) {
  return (
    <div ref={ref}>
      <Table striped bordered hover>
        <StatsHeader />
        <Stats results={results} />
        <Pdf targetRef={ref} filename="post.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
        </Pdf>
      </Table>
    </div>
  );
}

export default StatsPageColl;
