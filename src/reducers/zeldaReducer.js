import bomb from "../assets/bomb.png"
import bookOfMagic from "../assets/book-of-magic.png"
import boomerang from "../assets/boomerang.png"
import flute from "../assets/flute.png"
import food from "../assets/food.png"
import key from "../assets/key.png"
import magicalRod from "../assets/magical-rod.png"
import magicalSword from "../assets/magical-sword.png"
import redCandle from "../assets/red-candle.png"
import redPotion from "../assets/red-potion.png"
import {TYPES} from "../actions/zeldaActions"

export const zeldaInitialState = {
    products: [
        {id:1,name:"BOMB",price:10,img:bomb},
        {id:2,name:"BOOK OF MAGIC",price:60,img:bookOfMagic},
        {id:3,name:"BOOMERANG",price:30,img:boomerang},
        {id:4,name:"FLUTE",price:80,img:flute},
        {id:5,name:"FOOD",price:40,img:food},
        {id:6,name:"KEY",price:50,img:key},
        {id:7,name:"MAGICAL ROD",price:150,img:magicalRod},
        {id:8,name:"MAGICAL SWORD",price:300,img:magicalSword},
        {id:9,name:"RED CANDLE",price:15,img:redCandle},
        {id:10,name:"RED POTION",price:30,img:redPotion}
    ],
    cart: [],
    totalItems: 0,
    totalPrice: 0,
    confirmation: false
}

export function zeldaReducer(state,action){
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload)
            let itemInCart = state.cart.find(item => item.id === newItem.id)
            
            return itemInCart 
            ? {...state,
                cart: state.cart.map(item => item.id === newItem.id
                ? {...item, quantity: item.quantity + 1, price: item.price + newItem.price}   
                : item),
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + newItem.price}
            : {...state,
                cart: [...state.cart, {...newItem, quantity: 1}],
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + newItem.price
            }
        }     
        
        case TYPES.REMOVE_ONE_FROM_CART:{
            let newItem = state.products.find(product => product.id === action.payload)
            let removeItem = state.cart.find(item => item.id === action.payload)
            
            return removeItem.quantity > 1
            ? {...state,
                cart: state.cart.map(item => item.id === removeItem.id
                ? {...item, quantity: item.quantity - 1, price: item.price - newItem.price}   
                : item),
                totalItems: state.totalItems - 1,
                totalPrice: state.totalPrice - newItem.price
            }
            : {...state,
                cart: state.cart.filter(item => item.id !== newItem.id),
                totalItems: state.totalItems - 1,
                totalPrice: state.totalPrice - newItem.price
            }
        }
        
        case TYPES.REMOVE_ALL_FROM_CART:{
            let removeItem = state.cart.find(item => item.id === action.payload)
            
            return removeItem
            && {...state,
                cart: state.cart.filter(item => item.id !== removeItem.id),
                totalItems: state.totalItems - removeItem.quantity,
                totalPrice: state.totalPrice - removeItem.price
            }
        }
        
        case TYPES.CONFIRMATION:{
            window.scroll(0,0)
            
            return {
                ...state,
                confirmation: true
            }
        }
        
        case TYPES.CLEAR_CART:
            return zeldaInitialState
        
        default: return state
    }
}
