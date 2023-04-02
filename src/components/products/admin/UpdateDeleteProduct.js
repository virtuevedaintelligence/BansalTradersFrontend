import { useSelector } from 'react-redux';
import UpdateProduct from "../UpdateProduct";
import { MdDelete } from "react-icons/md";
import { useProductContext } from '../../../context/productcontext';

function UpdateDeleteProduct({ product, productId }) {
    const { isDeleteProductLoading, deleteProductCall, singleProduct } = useProductContext();
    const deleteProd = (e) => {
        e.preventDefault();
        deleteProductCall(productId);
    };
    const adminData = useSelector((state) => {
        return state.admin;
    })

    if (adminData.dataAdminLogin && adminData.dataAdminLogin.message === "Admin logged in successfully") {
        return (
            <div>
                <UpdateProduct product={product} />
                <button className="btn-sm btn btn-danger">
                    <MdDelete onClick={deleteProd} />
                </button>
            </div>
        )
    }
    else {
        return null;
    }
}

export default UpdateDeleteProduct;