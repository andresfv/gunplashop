import './ProductItem.css';
function ProductItem({ imageURL, name, available, price}) {
    return (
        <div className="productItem">
            <img src={imageURL} height="300px" />
            <span className="itemName">{name}</span>
            {!available ? <span className="outStock">OUT OF STOCK</span> : <span className="available">${price}</span>}

        </div>
    );
}

export default ProductItem;