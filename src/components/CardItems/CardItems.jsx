import { useContext } from "react"
import "./CardItems.css"
import { ShopContext } from "../Context/ShopContext"
import remove_icon from "../Assets/cart_cross_icon.png"

export const CardItems = () => {

    const {all_product,cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)
    console.log(all_product);
  return (
    <div className='cardItems'>
        <div className="carditem-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]> 0){
                return <div key={e.id}>
                            <div className="carditems-format carditem-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitem-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className="cartitems-remove-icon" src={remove_icon} onClick={()=> {removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>cart Totals</h1>
                <div className="cartitem-down">
                    <div className="cartitem-total-item">
                        <p>SubTotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitem-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="carditems-promobox">
                    <input type="text" placeholder="promo code"/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
