import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

export default function ZeldaProduct({data,addToCart}){
    let {id,name,price,img} = data
    const {theme} = useContext(ThemeContext)

    return(
        <article className={`product ${theme.items}`} onClick={()=>addToCart(id)} title="Agregar al Carrito">
            <img src={img} alt={name} />
            <h5>{name}</h5>
            <b>$ {price} rupees</b>
            <i className="fas fa-cart-plus"></i>
        </article>
    )
}