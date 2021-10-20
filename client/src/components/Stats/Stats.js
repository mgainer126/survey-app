import Table from "react-bootstrap/Table";

function Stats() {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
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
          <tr>
            <td>1</td>
            <td>Emplyee name</td>
            <td>Inititave ID</td>
            <td>Preparnedss Score</td>
            <td>Priority Score</td>
            <td>Knowledge Score</td>
            <td>Ownership Score</td>
            <td>Comments</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Stats;
