import './MainFrame.css';

import Banner from '../../components/banner/Banner'
import ProductsPage from '../products/ProductsPage';
import LoginPage from '../login/LoginPage';
import RegistrationPage from '../registration/RegistrationPage';
import ChatBtn from '../../components/chatBtn/ChatBtn';

import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom';

function MainFrame(params) {


    return (
        <BrowserRouter>
            <div id="mainContainer">

                <ChatBtn />

                <Banner />

                <Routes>
                    <Route path="/registration" element={<RegistrationPage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/" element={<ProductsPage />}></Route>
                    <Route path="*" element={<h1>NO HAY PANTALLA</h1>}></Route>
                </Routes>

                

              



            </div>
        </BrowserRouter>
    );
};

export default MainFrame;