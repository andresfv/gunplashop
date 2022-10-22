import SearchProductTxt from '../../components/products/searchProduct/SearchProductTxt';
import ProductsGrid from '../../components/products/productGrid/ProductsGrid';
import FooterPage from '../../components/footerPage/FooterPage';
import { useEffect} from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../store/actions/productActions'


function Products() {
    // const [data, setData] = useState([]);
    // let q = '';
    // useEffect(() => {
    //     fetch(process.env.REACT_APP_API_URL + "/api/products?populate=*&filters[name][$contains]="+q+"&filters[available][$eq]=true").then(x => x.json()).then(json => {
    //         let result = json.data.map(({ id, attributes: { name, available, price, category, image: { data: { attributes: { url } } } } }) => {
    //             return { id, imageURL: process.env.REACT_APP_API_URL + url, name, available, price, category }
    //         })
    //         setData(result);
    //     });
    // }, []);

    const { products, loading} = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts(''));
    }, [])

    return (
        <div>
            {loading ? <h3>Now loading...</h3> : null}
            <SearchProductTxt />
            <ProductsGrid id={'productsOnSaleGrid'} source={products} />
            <FooterPage />
        </div>

    );
}

export default Products;