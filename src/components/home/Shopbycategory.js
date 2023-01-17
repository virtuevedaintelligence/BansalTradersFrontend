import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CategoryService from "../../services/CategoryService";
import "./shopbycategory.css";

function Shopbycategory() {
  const [Catloading, CatsetLoading] = useState(true);
  const [categories, setCategory] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      CatsetLoading(true);
      try {
        const response1 = await CategoryService.getCategories();
        setCategory(response1.data);
      } catch (error) {
        console.log(error);
      }
      CatsetLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Container className="py-5 m-auto">
        <h3 className="text-center mb-4">Shop By Category</h3>
        {!Catloading && (
          <Row>
            {categories.map((category) => (
              <Col xs md="2" key={category.id}>
                <div className="card p-5 text-center category_div">{category.categoryName}</div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default Shopbycategory;
