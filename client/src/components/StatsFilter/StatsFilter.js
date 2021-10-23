import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./StatsFilter.scss";

function StatsFilter({ filter }) {
  return (
    <>
      <FloatingLabel controlId="floatingSelect" htmlFor="value">
        <form className="filter" onSubmit={filter}>
          <Form.Select
            aria-label="Floating label select example"
            className="selections"
            id="value"
          >
            <option>Select Employee Stats</option>
            <option value="Anas Al Shorbaji">Anas Al Shorbaji</option>
            <option value="Chang Duong">Chang Duong</option>
            <option value="Khaled Elridi">Khaled Elridi</option>
          </Form.Select>
          <button variant="primary" className="search__btn">
            Search
          </button>
        </form>
      </FloatingLabel>
    </>
  );
}

export default StatsFilter;
