import './CartItem.css'

const CartItem = (props) => {
    return (
        <div className="itemContainer">
                        <img width="100px" src="assets/img/products/cart1.jpg" alt="item1"/>
                        <div className="itemDescription">
                            <h4>GUNDAM W ENDLESS WALTZ</h4>
                                <span>Cantidad: 1</span>
                                <span className='bold'>Precio: $100</span>
                        </div>
                    </div>
    )
};

export default CartItem;