import SearchProductTxt from '../../components/SearchProductTxt';
import ProductsGrid from '../../components/products/ProductsGrid';
import FooterPage from '../../components/FooterPage';
import { useEffect, useState } from 'react';

function Products() {
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
        <div>
            <SearchProductTxt />
            <ProductsGrid id={'productsOnSaleGrid'} source={data} />
            <FooterPage />
        </div>

    );
}

export default Products;