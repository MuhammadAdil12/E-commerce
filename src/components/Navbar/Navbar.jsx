import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {

    const [menu, setMenu] = useState("shop")



  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=> {setMenu("shop")}}><Link style={{textDecoration: "none"}} to="/">Shop</Link>{menu === "shop"? <hr/>: <></>}</li>
            <li onClick={()=> {setMenu("mens")}}><Link style={{textDecoration: "none"}} to="/mens">Men </Link>{menu === "mens"? <hr/>: <></>}</li>
            <li onClick={()=> {setMenu("womens")}}><Link style={{textDecoration: "none"}} to="/womens">Women</Link> {menu === "womens"? <hr/>: <></>}</li>
            <li onClick={()=> {setMenu("kids")}}><Link style={{textDecoration: "none"}} to="/kids">Kids </Link>{menu === "kids"? <hr/>: <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
        <div className="off-canvas-nav">

        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span className="material-symbols-outlined">
menu
</span></button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <div className="offcanvas-title" id="offcanvasRightLabel">
                        <Link to="/login"><button>Login</button></Link> 
                        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                        <div className="nav-cart-count-offcanvas">0</div>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="nav-menu-offcanvas">
                        <li onClick={()=> {setMenu("shop")}}><Link style={{textDecoration: "none"}} to="/">Shop</Link>{menu === "shop"? <hr/>: <></>}</li>
                        <li onClick={()=> {setMenu("mens")}}><Link style={{textDecoration: "none"}} to="/mens">Men </Link>{menu === "mens"? <hr/>: <></>}</li>
                        <li onClick={()=> {setMenu("womens")}}><Link style={{textDecoration: "none"}} to="/womens">Women</Link> {menu === "womens"? <hr/>: <></>}</li>
                        <li onClick={()=> {setMenu("kids")}}><Link style={{textDecoration: "none"}} to="/kids">Kids </Link>{menu === "kids"? <hr/>: <></>}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
