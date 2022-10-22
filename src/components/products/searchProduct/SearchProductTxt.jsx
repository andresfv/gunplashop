import { useEffect, useRef } from 'react';
import './SearchProductTxt.css';
//redux
import { useSelector, useDispatch} from 'react-redux';
import { getProducts } from '../../../store/actions/productActions'

function SearchProductTxt() {
    const query = useSelector(state => state.products.busqueda);
    const searchTxt = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        searchTxt.current.focus();
    }, [])
    

    const buscar=(e)=>{
        e.preventDefault();
        // console.log("buscar cuando presionen enter", query, searchTxt.current.value);
    }

    const onSearchChange = (event) =>{
        dispatch(getProducts(event.target.value))
    }

    return (
        <div id="searchContainer">
            <form onSubmit={buscar}>
                <input type="text" ref={searchTxt} value={query} className="searchTxt" id="busqueda"
                    placeholder="Estoy Buscando..." onChange={onSearchChange}/>

                <button className="searchButton">
                    <img src="/page/lupa.png" alt="lupa" height="17px" />
                </button>
            </form>

        </div>
    );
}

export default SearchProductTxt;