import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom"

const ProductComponent = () => {
    const products=useSelector((state)=>state.allProducts.products);
    const render=products.map((product)=>{
        const {id,title,image,price,category}=product;
        return(
            <div>
                
                <div key={id}>
                <Link to={`/product/${id}`} >
                <img src={image} alt="items"/>
            <h1>{title}</h1>
            <h3>{price}</h3>
            <h4>{category}</h4>
            </Link>
                </div>
               
        </div>
        )
    })
    return (
        <>
        {render}
        </>
    )
}

export default ProductComponent
