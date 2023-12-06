import {createContext, useState} from "react";
import all_product from "../Assets/all_product";


export const ShopContext = createContext()

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++){
        cart[index] = 0;
    }

    return cart; 
}

const ShopContextProvider = ({children})=>{
    
    const [cartItems, setCartItem] = useState(getDefaultCart());
    
    const addToCart = (itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    
    const removeFromCart = (itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                } else {
                    console.error(`Product with id ${item} not found.`);
                }
            }
        }
        return totalAmount;
    }

    const getTotalCartItem = () => {
        let totalitem = 0;
        for(const item in cartItems){
            if(cartItems[item]> 0){
                totalitem+= cartItems[item]
            }
        }
        return totalitem;

    }
    
    const contextValue = {all_product, cartItems, addToCart,removeFromCart, getTotalCartAmount,getTotalCartItem }


    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

