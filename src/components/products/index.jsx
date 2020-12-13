import React from 'react'
import formatCurrency from '../../util'

import Styles from './products.module.css'

const Products = ({products, size, sort}) => {
    return (
        <div>
            <ul className={Styles.products}>
                {products.map(product=>(
                    <li key={product._id}>
                        <div className={Styles.product}>
                            <a href={"#"+product._id}>
                                <img src={product.image} alt={product.title}/>
                                <p>{product.title}</p>
                            </a>
                            <div className={Styles.productPrice}>
                                <div>{ formatCurrency(product.price)}</div>
                                <button className={`${Styles.btn} ${Styles.primary}`}>Add To Cart</button>
                            </div>
                        </div>
                    </li>
                ) )}

            </ul>
        </div>
    )
}

export default Products
