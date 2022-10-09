import ProductItem from './ProductItem';

function ProductsGrid({ id, source }) {
    return (
        <div id={id} className="productsGrid">
            {source.map(item => (
                <ProductItem key={item.id} imageURL={item.imageURL} name={item.name} available={item.available} price={item.price}/>
            ))}
        </div>
    );
}

export default ProductsGrid;