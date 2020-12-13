import React from 'react'
import formatCurrency from '../../util'

import Styles from './Cart.module.css'

const  Cart = ({cartItems, removeFormCart})=> {

    return (
        <div>
            <div>

            {cartItems.length===0?(
                <div className={`${Styles.cart} ${Styles.cartHeader}`}>
                    Cart is empty
                </div>):(<div className={`${Styles.cart} ${Styles.cartHeader}`}>
                    You have {cartItems.length} in the cart{" "}
                </div>
            )}
                <div>
                    <div className={Styles.cart}>
                        <ul className={Styles.cartItems}>
                            {cartItems.map(item=>(
                                <li key={item._id}>
                                    <div>
                                        <div>
                                        <img src={item.image} alt={item.title}/>
                                        </div>
                                        <div>
                                            {item.title}
                                        </div>
                                        <div className={Styles.right}>
                                            {formatCurrency(item.price)}X{" "}{item.count} {" "}
                                        <button className={Styles.btn} onClick={()=>removeFormCart(item)}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {cartItems.length!==0 &&(

                        <div className={Styles.cart}>
                            <div className={Styles.total}>
                                <div>
                                Total: {" "}
                                    { formatCurrency(cartItems.reduce((a,c)=>a+c.price*c.count,0))}
                                </div>
                                <button className={`${Styles.button} ${Styles.primary}`}>Proceed</button>
                            </div>
                        </div>
                        )}
                </div>
            </div>

        </div>
        
    )
}

export default Cart
