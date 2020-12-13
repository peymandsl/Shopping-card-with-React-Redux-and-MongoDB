import React, {useState} from 'react'

import data from './data.json'
import styles from './app.module.css'
import Products from './components/products'
import Filter from './components/filter';

const App = () => {

  const [size, setSize] = useState("")
  const [sort, setSort] = useState("")
  const [products, setProducts] = useState(data.products)

  const filterProductsSize= (e)=> {
    if (e.target.value===""){
      setSize(e.target.value)
      setProducts(data.products)
    } else{
      const selectedSize = e.target.value
      setSize(selectedSize);
      const filtered = products.filter(product=>product.availableSizes.indexOf(selectedSize)>=0)
      setProducts(filtered) 
    }
  }

  const sortProducts= (e)=> {
   const sort = e.target.value;
   setSort(sort);

   const sortedProducts= products.slice().sort((a,b)=>
    sort === "lowest"
    ? a.price > b.price
    ? 1 : -1
    : sort === "highest"
    ? a.price < b.price 
    ? 1 : -1
    : a._id > b._id
    ? 1 : -1
   )
   setProducts(sortedProducts)
  }
  return (
    <div className={styles.gridContainer}>
      <header>
        <a href="/"> Shopping Card</a>
      </header>
      <main>
          <div className= {styles.content}> 
            <div className={styles.main}>
              <Filter count={products.length}
              sort= {sort}
              size= {size}
              filterProductsSize={filterProductsSize}
              sortProducts={sortProducts}
              />
              <Products products={products} sort={sort} size={size}/>
            </div>
            <div className={styles.sideBar}>
              cart Items
            </div>
          </div>
      </main>
      <footer>All is Reserved.</footer>
    </div>
  );
};

export default App;
