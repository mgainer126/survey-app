import "bootstrap/dist/css/bootstrap.min.css";

function Questions() {
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">
            1. Does the product owner add value to the project?
          </label>
          <select
            multiple
            className="form-control"
            id="exampleFormControlSelect2"
          >
            <option>None</option>
            <option>Minimal</option>
            <option>Satisfactory</option>
            <option>Good</option>
            <option>Excellent</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">
            2. Does the product owner come prepared for meetings?
          </label>
          <select
            multiple
            className="form-control"
            id="exampleFormControlSelect2"
          >
            <option>Never</option>
            <option>Rarely</option>
            <option>Satisfactory</option>
            <option>Enough</option>
            <option>Always</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">
            3. Does product owner provide guidance to the working team, to
            ensure work is delivered based its relative priority?
          </label>
          <select
            multiple
            className="form-control"
            id="exampleFormControlSelect2"
          >
            <option>Never</option>
            <option>Lets Other Decide</option>
            <option>Contributes but Yields to the Consensus</option>
            <option>Mostly</option>
            <option>Always</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">
            4. Does the product owner have an sufficent level of knowledge of
            the features to be implemented and the benifit to the business they
            provide?
          </label>
          <select
            multiple
            className="form-control"
            id="exampleFormControlSelect2"
          >
            <option>None</option>
            <option>Insufficently</option>
            <option>Satisfactory</option>
            <option>Good</option>
            <option>Excellent</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">
            4. Does the product owner take ownership of the features and tracks
            thier progress from the start through to implementation?
          </label>
          <select
            multiple
            className="form-control"
            id="exampleFormControlSelect2"
          >
            <option>Never</option>
            <option>Not Enough</option>
            <option>Satisfactory</option>
            <option>Good</option>
            <option>Excellent</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Please provide comments below to include what the product owner does
            well, what they should stop doing and what recommendations you they
            can improve on.
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={8}
            defaultValue={""}
          />
        </div>
      </form>
    </>
  );
}

export default Questions;
