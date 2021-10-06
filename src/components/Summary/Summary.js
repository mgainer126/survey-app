import "../Summary/Summary.scss";
import { Link } from "react-router-dom";

function Summary() {
  return (
    <div className="summary">
      <h3 className="summary__title">Product Owner Individual Survey</h3>
      <p className="summary__paragraph">
        The purpose of survey is for the development of the Product Owner Team,
        to identify what is done well as well as identify areas for improvment.
      </p>
      <p className="summary__paragraph">
        The results of this survey will be shared with the product owner, so
        that the positive feedback will be enforced, and areas for improvement
        can be understood and adjustments to the approach can be implemented.
      </p>
      <p className="summary__paragraph">
        If you have any questions regarding the survey, or how the information
        collected will be used please contact me at the email address
        matthew.gainer@pcbank.ca
      </p>

      <Link to="questions">
        <button className="summary__btn">Continue</button>
      </Link>
    </div>
  );
}

export default Summary;
