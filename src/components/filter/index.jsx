import React from 'react'

import Styles from './filter.module.css'

const Filter = ({count, sort, size, sortProducts, filterProductsSize}) => {
    return (
        <div className={Styles.filter}>
            <div className={Styles.filterResult}>{count} Products</div>
            <div className={Styles.filterSort}>Order {" "}
                 <select value={sort} onChange={sortProducts}>
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select></div>
            <div className={Styles.filterSize}>Filter{" "} 
                <select value={size} onChange={filterProductsSize}>
                    <option value="">ALL</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select></div>
        </div>
    )
}

export default Filter
