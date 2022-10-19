import './SearchProductTxt.css';
function SearchProductTxt({ }) {
    return (
        <div id="searchContainer">

            <input className="searchTxt" type="text" name="q" id="busqueda"
                placeholder="Estoy Buscando..." />

            <button className="searchButton">
                <img src="/page/lupa.png" alt="lupa" height="17px" />
            </button>
            
        </div>
    );
}

export default SearchProductTxt;