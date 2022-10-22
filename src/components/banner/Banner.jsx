import './Banner.css';
import { Link } from "react-router-dom";
function Banner({ homeUrl = '#', cartUrl = '#', accountUrl = '#' }) {
    return (
        <div className="topBanner">
            <div className="navButtons">

                <Link to="/">
                    <button className="actionButton" >
                        <img src="/page/home logo.png" alt="home" height="20px" />
                    </button>
                </Link>

                <button className="actionButton">
                    <img src="/page/cart logo.png" alt="cart" height="20px" />
                </button>
                <Link to="/login">
                    <button className="actionButton">
                        <img src="/page/account.png" alt="account" height="20px" />
                    </button>
                </Link>
            </div>

            <img className="logoBanner" src="/page/GunplaShop Logo.png" alt="gunplashopLogo" width="400px" />
        </div>

    )
}

export default Banner;