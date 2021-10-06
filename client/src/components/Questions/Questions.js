import "./Questions.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Questions({ submit }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <form className="form" onSubmit={submit}>
        <div className="form__group">
          <label htmlFor="value" className="form__label">
            1. Does the product owner add value to the project?
          </label>
          <select multiple className="form__control" id="value">
            <option>None</option>
            <option>Minimal</option>
            <option>Satisfactory</option>
            <option>Good</option>
            <option>Excellent</option>
          </select>
        </div>
        <div className="form__group">
          <label htmlFor="prepared" className="form__label">
            2. Does the product owner come prepared for meetings?
          </label>
          <select multiple className="form__control" id="prepared">
            <option>Never</option>
            <option>Rarely</option>
            <option>Satisfactory</option>
            <option>Good</option>
            <option>Excellent</option>
          </select>
        </div>
        <div className="form__group">
          <label htmlFor="priority" className="form__label">
            3. Does product owner provide guidance to the working team, to
            ensure work is delivered based its relative priority?
          </label>
          <select multiple className="form__control" id="priority">
            <option>Never</option>
            <option>Lets Others Decide</option>
            <option>Aligns to the Consensus</option>
            <option>Good</option>
            <option>Excellent</option>
          </select>
        </div>
        <div className="form__group">
          <label htmlFor="knowledge" className="form__label">
            4. Does the product owner have an sufficent level of knowledge of
            the features to be implemented and the benifit to the business they
            provide?
          </label>
          <select multiple className="form__control" id="knowledge">
            <option>None</option>
            <option>Insufficently</option>
            <option>Satisfactory</option>
            <option>Good</option>
            <option>Excellent</option>
          </select>
        </div>
        <div className="form__group">
          <label htmlFor="ownership" className="form__label">
            5. Does the product owner take ownership of the features and tracks
            thier progress from the start through to implementation?
          </label>
          <select multiple className="form__control" id="ownership">
            <option>Never</option>
            <option>Not Enough</option>
            <option>Satisfactory</option>
            <option>Good</option>
            <option>Excellent</option>
          </select>
        </div>
        <div className="form__group-comment">
          <label htmlFor="comments" className="form__label-comment">
            6. Please provide comments below to include what the product owner
            does well, and what could be improved on.
          </label>
          <textarea
            className="form__control-comment"
            id="comments"
            rows={8}
            defaultValue={""}
          />
        </div>
        <Button variant="primary" onClick={handleShow} className="form__btn">
          Submit Feedback
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Feedback Sent!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Thank you for your feedback!</Modal.Body>
          <Modal.Footer>
            <Link to="/">
              <Button variant="primary" onClick={handleClose}>
                Back to Main Page
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
}

export default Questions;
