import './MainFrame.css';

import Banner from '../../components/Banner'
import ProductsPage from '../products/ProductsPage';
import LoginPage from '../login/LoginPage';
import ChatBtn from '../../components/ChatBtn';

import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom';

function MainFrame(params) {


    return (
        <BrowserRouter>
            <div id="mainContainer">

                <ChatBtn />

                <Banner />

                <Routes>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/" element={<ProductsPage />}></Route>
                    <Route path="*" element={<h1>NO HAY PANTALLA</h1>}></Route>
                </Routes>

                

              



            </div>
        </BrowserRouter>
    );
};

export default MainFrame;