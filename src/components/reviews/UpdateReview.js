import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useCategoryContext } from "../../context/categorycontext";
import { useProductContext } from "../../context/productcontext";
import { FiEdit2 } from "react-icons/fi";
import { useReviewContext } from "../../context/reviewcontext";
import Preloader from "../preloader/Preloader";

function UpdateReview({ ratingResponse, productId }) {
  const { isUpdateReviewLoading, updateReviewCall } = useReviewContext() || {};
  const { id, reviewBy, starRating, reviewDescription } = ratingResponse;

  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.error(error)
    );
  }, []);
  const [review, setReview] = useState({
    reviewBy: reviewBy,
    starRating: starRating,
    reviewDescription: reviewDescription,
    productId: productId,
    location: JSON.stringify(location).toString,
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    const value = e.target.value;
    setReview({ ...review, [e.target.name]: value });
  };
  const update = (e) => {
    e.preventDefault();
    updateReviewCall(id, review);
  };

  if (isUpdateReviewLoading) {
    return <Preloader />;
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FiEdit2 />
      </Button>

      <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Update Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Appreciations!!</h4>
          <p>Your positive reviews helps our team to be motivated all the time. </p>
          <Form>
            <Form.Label>Star Rating:</Form.Label>
            <div className="rating ">
              <input type="radio" name="starRating" id="r1" value={5} onChange={(e) => handleChange(e)} />
              <label htmlFor="r1"></label>

              <input type="radio" name="starRating" id="r2" value={4} onChange={(e) => handleChange(e)} />
              <label htmlFor="r2"></label>

              <input type="radio" name="starRating" id="r3" value={3} onChange={(e) => handleChange(e)} />
              <label htmlFor="r3"></label>

              <input type="radio" name="starRating" id="r4" value={2} onChange={(e) => handleChange(e)} />
              <label htmlFor="r4"></label>

              <input type="radio" name="starRating" id="r5" value={1} onChange={(e) => handleChange(e)} />
              <label htmlFor="r5"></label>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Full Name" autoFocus defaultValue={review.reviewBy} name="reviewBy" onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Add Review" defaultValue={review.reviewDescription} name="reviewDescription" onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Button onClick={update}>Submit Review</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateReview;
