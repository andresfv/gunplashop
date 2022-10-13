import './Banner.css';
function Banner ({homeUrl='#', cartUrl='#', accountUrl='#'}){
    return(
        <div className="topBanner">
          <div className="navButtons">
            <button className="actionButton" >
              <img src="/page/home logo.png" alt="home" height="20px" />
            </button>

            <button className="actionButton">
              <img src="/page/cart logo.png" alt="cart" height="20px" />
            </button>

            <button className="actionButton">
              <img src="/page/account.png" alt="account" height="20px" />
            </button>
          </div>

          <img className="logoBanner" src="/page/GunplaShop Logo.png" alt="gunplashopLogo" width="400px"/>
        </div>

    );
}

export default Banner;