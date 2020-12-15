import React, {useState} from 'react'
import formatCurrency from '../../util'

import Styles from './Cart.module.css'

const  Cart = ({cartItems, removeFormCart, createOrder})=> {

const [showCheckOut, setShowCheckOut] = useState(false)
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [address, setAddress] = useState('')

const nameHandler = (e) =>{
    setName(e.target.value)
}
const emailHandler = (e) =>{
setEmail(e.target.value)
}
const addressHandler = (e) =>{
setAddress(e.target.value)
}

const orderCreator =(e)=>{
e.preventDefault()
const order={
    name:name,
    email:email,
    address:address,
    cartItems:cartItems
}
orderCreator(order)
}

const proceedHandler =()=>{
    setShowCheckOut(true)
}
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
                    {cartItems.length !==0 &&(
                    <div>
                        <div className={Styles.cart}>
                            <div className={Styles.total}>
                                <div>
                                Total: {" "}
                                    { formatCurrency(cartItems.reduce((a,c)=>a+c.price*c.count,0))}
                                </div>
                                <button  onClick={proceedHandler} className={`${Styles.button} ${Styles.primary}`}>Proceed</button>
                            </div>
                        </div>
                        {
                            showCheckOut && (
                                <div className={Styles.cart}>
                                    <form >
                                        <ul className={Styles.formContainer}>
                                        <li>
                                                <label htmlFor="email">Email
                                                </label>
                                                <input name='email' type="email" required onChange={emailHandler}/>
                                            </li>
                                            <li>
                                                <label htmlFor="name">Name
                                                </label>
                                                <input name='name' type="text" required onChange={nameHandler}/>
                                            </li>
                                            <li>
                                                <label htmlFor="address">Address
                                                </label>
                                                <input name='address' type="text" required onChange={addressHandler}/>
                                            </li>
                                            <li>
                                                <button type='submit' className={`${Styles.btn} ${Styles.primary}`}>CheckOut</button>
                                            </li>

                                        </ul>

                                    </form>
                                </div>
                            )
                        }
                    </div>
                    )}
                </div>
            </div>

        </div>
        
    )
}

export default Cart
