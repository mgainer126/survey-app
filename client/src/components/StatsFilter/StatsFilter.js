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
            <option value="Rob Smith">Rob Smith</option>
            <option value="Grace Young">Grace Young</option>
            <option value="Weston Micheal">Weston Michael</option>
            <option value="Mila Kila">Mila Kilo</option>
            <option value="Tom Cruise">Tom Cruise</option>
            <option value="Connor Wilson">Connor Wilson</option>
            <option value="Micheal Harris">Michael Harris</option>
            <option value="Jennifer Harrison">Jennifer Harrison</option>
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
