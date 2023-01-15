import React, { useEffect, useState } from 'react'
import ProductService from '../../../services/ProductService';
import {
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import DryFruit from './DryFruit';

function DryFruits() {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await ProductService.getProducts();
                console.log(response)
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    return (
        <MDBContainer fluid className="my-5">
            <MDBRow>
                {!loading && (
                    <div className="bg-white">
                        {products.map((product) => (
                            <DryFruit
                                key={product.productId}
                                product={product}
                            ></DryFruit>
                        ))}
                    </div>
                )}
            </MDBRow>
        </MDBContainer>
    );
}

export default DryFruits;