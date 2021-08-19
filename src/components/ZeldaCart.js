import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

export default function ZeldaCart({data,removeOneFromCart,removeAll}){
    let {id,name,price,img,quantity} = data
    const {theme} = useContext(ThemeContext)
    
    return(
        <li className={`cart-item ${theme.cart}`}>
            <h5>x{quantity}</h5>
            <img src={img} alt={name} />
            <h5>{name}</h5>
            <h5>${price}</h5>
            <button className="delete-btn" onClick={()=> removeOneFromCart(id)}>Eliminar 1 item</button>
            <button className="delete-btn" onClick={()=> removeAll(id)}>Eliminar Todos</button>
        </li>
    )
}