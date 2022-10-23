import './CartSidebar.css'
import CartItem from '../cartItem/CartItem'


const CartSidebar = (props) => {

    return (
        <div id="cartSidebar">
            <h1>TU CARRITO</h1>
            <hr />
            <ul>
                <li>
                    <CartItem />
                </li>
            </ul>
            <hr />
            <div id="cartFooter">
                <div id="cartQty">
                    <span className='bold'>5</span>
                    <span> articulos</span>
                </div>

                <div id="cartPrice">
                    <span>Subtotal: </span>
                    <span className='bold'> 460</span>
                </div>
            </div>
        </div>
    )
};

export default CartSidebar;
