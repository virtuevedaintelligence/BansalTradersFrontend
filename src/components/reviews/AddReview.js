import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./review.css";
import { useReviewContext } from "../../context/reviewcontext";

function AddReview({ id }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  //code for converting lat long to addresss in react
  {
    /*
      const [address, setAddress] = useState("");

  useEffect(() => {
    if (!location.lat || !location.lng) return;

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=YOUR_API_KEY`
    )
      .then(res => res.json())
      .then(data => {
        if (data.status === "OK") {
          setAddress(data.results[0].formatted_address);
        }
      })
      .catch(error => console.error(error));
  }, [location]);
*/
  }
  // JSON.stringify(location)

  const [review, setReview] = useState({
    reviewBy: "",
    starRating: "",
    reviewDescription: "",
    productId: id,
    location: JSON.stringify(location).toString,
  });

  const { isSaveReviewLoading, saveReviewCall } = useReviewContext() || {};

  const handleChange = (e) => {
    const value = e.target.value;
    setReview({ ...review, [e.target.name]: value });
  };
  const saveReview = (e) => {
    e.preventDefault();
    saveReviewCall(review);
    return (
      <div>
        <h4>Appreciations!!</h4>
        <p>Your reviews helps our team to be motivated all the time. </p>
      </div>
    )
  };

  if (isSaveReviewLoading) {
    return <div>... Loading</div>;
  }

  return (
    <>
      <Button className="col-2" variant="primary" onClick={handleShow}>
        Add Review
      </Button>

      <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <Button onClick={saveReview}>Submit Review</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddReview;
