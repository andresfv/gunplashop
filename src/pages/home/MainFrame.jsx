import './MainFrame.css';
import {useState} from "react";

import Banner from '../../components/banner/Banner'
import ProductsPage from '../products/ProductsPage';
import LoginPage from '../login/LoginPage';
import RegistrationPage from '../registration/RegistrationPage';
import ChatBtn from '../../components/chatBtn/ChatBtn';
import CartSidebar from '../../components/cart/cartSidebar/CartSidebar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function MainFrame() {
    const [showCart, setShowCart] = useState(false);
    const onCartClick = () => {
        setShowCart(!showCart);
    }

    return (
        <BrowserRouter>
            <div id="mainContainer">

                <ChatBtn />

                <Banner onCartClick={onCartClick}/>

                <Routes>
                    <Route path="/registration" element={<RegistrationPage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/" element={<ProductsPage />}></Route>
                    <Route path="*" element={<h1>NO HAY PANTALLA</h1>}></Route>
                </Routes>
              
            {showCart ? <CartSidebar /> : null}


            </div>
        </BrowserRouter>
    );
};

export default MainFrame;