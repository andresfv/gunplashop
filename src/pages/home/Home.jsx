import './Home.css';

import Banner from '../../components/Banner'
import ProductsPage from '../products/ProductsPage';
import LoginPage from '../login/LoginPage';
import ChatBtn from '../../components/ChatBtn';
import FooterPage from '../../components/FooterPage';
import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom';

function Home(params) {


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

                <Outlet></Outlet>

                <FooterPage />



            </div>
        </BrowserRouter>
    );
};

export default Home;