import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productAction";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
      
          <div>
            <div>AND</div>
            <div>
              <div>
                <img  src={image}alt="img" />
              </div>
              <div >
                <h1>{title}</h1>
                <h2>
                  <a>${price}</a>
                </h2>
                <h3>{category}</h3>
                <p>{description}</p>
                <div>
                  
                  <div >Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
      
      )}
    </div>
  );
};

export default ProductDetails;
