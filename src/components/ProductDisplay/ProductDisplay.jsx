import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png" 
// import { useContext } from "react"
// import { ShopContext } from "../Context/ShopContext"


export const ProductDisplay = (props) => {

    const product = props
    // const {addToCart} = useContext(ShopContext)

  return (
    <div className="Productdisplay">
        <div className="Productdisplay-left">
            <div className="Productdisplay-img-list">
                <img src={product.product.image} alt="" />
                <img src={product.product.image} alt="" />
                <img src={product.product.image} alt="" />
                <img src={product.product.image} alt="" />
            </div>
            <div className="Productdisplay-img">
                <img className="Productdisplay-main-img" src={product.product.image} alt="" />
            </div>
        </div>
        <div className="Productdisplay-right">
            <h1>{product.product.name}</h1>
            <div className="Productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="Productdisplay-right-price">
                <div className="Productdisplay-right-price-old">${product.product.old_price}</div>
                <div className="Productdisplay-right-price-new">${product.product.new_price}</div>
            </div>
            <div className="Productdisplay-right-description">
                Lorem ipsum, dolendus, atque blanditiis eum deserunt ad nam voluptatem modi vitae voluptatum? Deserunt, beatae rerum cumque cupiditate illriosam.
            </div>
            <div className="Productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="Productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>ADD TO CART</button>
            <p className="Productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
            <p className="Productdisplay-right-category"><span>Tag :</span>Modern, Latest</p>
        </div>
    </div>
  )
}
