import logo from './logo.png';
import './App.css';
import './Font.css';
import Banner from './components/Banner';
import SearchProductTxt from './components/SearchProductTxt';
import ProductsGrid from './components/products/ProductsGrid';
import { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/products?populate=*").then(x => x.json()).then(json => {
      let result = json.data.map(({ id, attributes: { name, available, price, image: { data: { attributes: { url } } } } }) => {
        return { id, imageURL: process.env.REACT_APP_API_URL + url, name, available, price }
      })
      setData(result);
    });
  }, []);

  return (
    <div className="App">
      <div id="mainContainer">

      <a href="https://www.unimart.com/pages/contactanos" target="_blank" className="btn-chat"> 
        <i class="gg-comment"></i>
    </a>

        <Banner />

        <SearchProductTxt />

        <ProductsGrid id={'productsOnSaleGrid'} source={data} />
      </div>
    </div>
  );
}

export default App;
