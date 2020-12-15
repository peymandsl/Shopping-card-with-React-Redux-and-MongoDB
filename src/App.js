import React, {useState} from 'react'

import data from './data.json'
import styles from './app.module.css'
import Cart from './components/cart';
import Filter from './components/filter';
import Products from './components/products'

const App = () => {

  const [size, setSize] = useState("")
  const [sort, setSort] = useState("")
  const [products, setProducts] = useState(data.products)
  const [cartItems, setCartItems] = useState(localStorage.getItem('cardItems')?JSON.parse(localStorage.getItem('cardItems')):[])

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

  const removeFormCart=(product)=>{
    const cardItems = cartItems.slice()
    const filteredcartItems= cardItems.filter(x=>x._id !==product._id)
  setCartItems(filteredcartItems)
  localStorage.setItem("cardItems",JSON.stringify(filteredcartItems))
  }

  const addToCart =(product)=>{
    const cardItems = cartItems.slice()
    let alreadyInCart= false;
    cardItems.forEach((item)=>{
    if (item._id===product._id){
      item.count++;
      alreadyInCart= true;
    }
    });
    if (!alreadyInCart) {
      cardItems.push({...product, count:1})
    }
    setCartItems(cardItems)
    localStorage.setItem("cardItems",JSON.stringify(cardItems))
  }

  const createOrder =(order)=>{
alert('save'+ order.name)
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
              <Products products={products} sort={sort} size={size} addToCart={addToCart}></Products>
            </div>
            <div className={styles.sideBar}>
              <Cart cartItems={cartItems} removeFormCart={removeFormCart} createOrder= {createOrder}/>
            </div>
          </div>
      </main>
      <footer>All is Reserved.</footer>
    </div>
  );
};

export default App;
