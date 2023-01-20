import { Form, InputGroup, Row, } from "react-bootstrap";
import { useCategoryContext } from "../../context/categorycontext";

function AddProduct() {
    const { isLoadingCategory, categories } = useCategoryContext();
    if (isLoadingCategory) {
        return <div>... Loading</div>;
    }
    return (
        <div>
            <form className="container mt-3 mb-3">
                <Row className="mb-3">
                    <Form.Group controlId="productName" className="col col-sm-6">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="name" name="product_name" value="{form.first_name}" className="form-control" />
                    </Form.Group>
                    <Form.Group controlId="categoryName" className="col col-sm-4">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Select defaultValue="Choose..." className="form-control" name="weight" value="{form.a_state}" >
                            {categories.map((category) => {
                                return <option key={category.categoryId} value={category.name}>{category.name}</option>;
                            })}
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                        <Form.Label>Mobile Number</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                            <Form.Control aria-label="Mobile Number" type="mobile" aria-describedby="basic-addon1" className="form-control" name="mobile" value="{form.mobile}" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                            <Form.Control aria-label="Recipient's username" aria-describedby="basic-addon2" type="email" name="email" value="{form.email}" />
                            <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control className="form-control" type="text" name="address1" value="{form.address1}" />
                    </Form.Group>
                    <Form.Group className="col col-sm-6" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control className="form-control" name="address2" value="{form.address2}" type="text" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group controlId="weight" className="col col-sm-4">
                        <Form.Label>weight</Form.Label>
                        <Form.Control className="form-control" type="text" name="weight" value="{form.city}" />
                    </Form.Group>
                    <Form.Group controlId="formGridState" className="col col-sm-4">
                        <Form.Label>Weight</Form.Label>
                        <Form.Select defaultValue="Choose..." className="form-control" name="weight" value="{form.a_state}" >
                            <option value="Choose...">Choose...</option>
                            <option value="Delhi">250gm</option>
                            <option value="Bombay">500gm</option>
                            <option value="New York">1000gm</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formGridpin" className="col col-sm-4">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control className="form-control" type="pin" name="pin" value="{form.pin}" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                        <Form.Label>Menu</Form.Label>
                        <Form.Select defaultValue="Choose..." className="form-control" name="menu" value="{form.menu}" >
                            <option value="Choose...">Choose...</option>
                            <option value="Veg Biryani">Veg Biryani</option>
                            <option value="BBQ Chicken Wings">BBQ Chicken Wings</option>
                            <option value="Rasmalai">Rasmalai</option>
                            <option value="Beer">Beer</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formGridlabel" className="col col-sm-6">
                        <Form.Label>Order Details</Form.Label>
                        <Form.Control as="textarea" rows="{3}" className="form-control" name="order" value="{form.order}" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                        <button type="submit" onClick="{submitButton}" className="me-4 btn btn-success btn-lg btn-block">Submit</button>
                        <button type="reset" onClick="{resetButton}" className="me-4 btn btn-danger btn-lg btn-block">Cancel</button>
                    </Form.Group>
                </Row>
            </form>
        </div>
    )
}

export default AddProduct;