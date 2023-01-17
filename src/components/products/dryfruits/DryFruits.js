import React, { useEffect, useState } from "react";
import CategoryService from "../../../services/CategoryService";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import DryFruit from "./DryFruit";
import DryFruitDetail from "./DryFruitDetail";
import { ProductContext, useProductContext } from "../../../context/productcontext"

const DryFruits = () => {
    const { isLoading, products } = useProductContext();
    const [Catloading, CatsetLoading] = useState(true);
    const [categories, setCategory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            CatsetLoading(true);
            try {
                const response1 = await CategoryService.getCategories();
                console.log(response1.data);
                setCategory(response1.data);
            } catch (error) {
                console.log(error);
            }
            CatsetLoading(false);
        };
        fetchData();
    }, []);
    if (isLoading) {
        return <div>... Loading</div>
    }
    return (
        <>
            <div className="scrollmenu">
                {!Catloading && (
                    <div>
                        {categories.map((category) => (
                            <a key={category.id} href="#home">
                                {category.categoryName}
                            </a>
                        ))}
                    </div>
                )}
            </div>
            <MDBContainer fluid className="my-5">
                <MDBRow>
                    {products.map((product) => {
                        <DryFruit key={product.productId} {...product} />
                    })}
                </MDBRow>
            </MDBContainer>

            {/* <DryFruitDetail /> */}
        </>
    );
}

export default DryFruits;
