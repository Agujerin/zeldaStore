import { useContext, useReducer, useState } from "react"
import { zeldaInitialState, zeldaReducer } from "../reducers/zeldaReducer"
import ZeldaProduct from "./ZeldaProduct"
import "./ZeldaBuyApp.css"
import { TYPES } from "../actions/zeldaActions"
import ZeldaCart from "./ZeldaCart"
import triforce from "../assets/triforce-logo.png"
import ThemeContext from "../context/ThemeContext"
import ZeldaConfirmation from "./ZeldaConfirmation"

export default function ZeldaBuyApp(){
    const [cart,setCart] = useState(false)
    const [state,dispatch] = useReducer(zeldaReducer,zeldaInitialState)
    const {theme} = useContext(ThemeContext)

    const openCart=()=> cart ? setCart(false) : setCart(true)
    
    const addToCart=(id)=> dispatch({type: TYPES.ADD_TO_CART, payload: id})
    
    const removeOneFromCart=(id)=> dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id})
    
    const removeAll=(id)=> dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id})
    
    const clearCart=()=> dispatch({type: TYPES.CLEAR_CART})
    
    const confirmation=()=> dispatch({type: TYPES.CONFIRMATION})
    

    return(
        <main className={`app-container ${theme.app}`}>
            <img src={triforce} alt="triforce-logo"></img>
            <h3>Venta de productos de Zelda</h3>
            
            <div className={`cart-logo ${theme.items}`} onClick={openCart} title="Ver Carrito">
                <i className="fas fa-shopping-cart"></i>
                <h5>{state.totalItems}</h5>
            </div>
            
            {state.confirmation && <ZeldaConfirmation />}
            
            {cart && 
                <div className={`cart-container ${theme.items}`}>
                    {(state.cart.length === 0)? <h5>El carrito está vacío</h5> : <h5>Carrito</h5>}
                    <ul>
                        {state.cart.map((product,index)=> <ZeldaCart key={index} data={product} removeOneFromCart={removeOneFromCart} removeAll={removeAll} />)}
                    </ul>
                    <h5>Productos: {state.totalItems} u.</h5>
                    <h5>Total: $ {state.totalPrice} rupees</h5>
                    {(state.cart.length > 0) 
                        && <button onClick={confirmation} className="confirm-btn">Confirmar Compra</button> 
                    }
                    {(state.cart.length > 0) 
                        && <button className="delete-btn" onClick={clearCart}>Vaciar Carrito</button>
                    }
                </div>
            }
            
            <div className="products-container">
                {zeldaInitialState.products.map((product)=> <ZeldaProduct key={product.id} data={product} addToCart={addToCart} />)}
            </div>
        </main>
    )
}