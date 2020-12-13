import React, {useState} from 'react'

import data from './data.json'
import styles from './app.module.css'
import Products from './components/products'

const App = () => {

  const [size, setSize] = useState('')
  const [sort, setSort] = useState('')
  const [products, setProducts] = useState(data.products)

  return (
    <div className={styles.gridContainer}>
      <header>
        <a href="/"> Shopping Card</a>
      </header>
      <main>
          <div className= {styles.content}> 
            <div className={styles.main}>
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
