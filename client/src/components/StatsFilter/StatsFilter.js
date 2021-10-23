import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function StatsFilter() {
  return (
    <>
      <FloatingLabel controlId="floatingSelect" label="Employee Selection">
        <Form.Select aria-label="Floating label select example">
          <option value="1">All</option>
          <option value="2">Anas Al Shorbaji</option>
          <option value="3">Chang Duong</option>
          <option value="4">Khaled Elridi</option>
          <option value="5">Mahjabeen Chowdhury</option>
          <option value="6">Mayukh Athmaram</option>
          <option value="7">Navin Pedamalli</option>
          <option value="8">Sheen Sharma</option>
          <option value="9">Shokoofe Tabatabaei</option>
        </Form.Select>
      </FloatingLabel>
    </>
  );
}

export default StatsFilter;
