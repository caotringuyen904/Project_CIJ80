import ListProduct from "../components/ListProduct";
import ProductDetail from "./ProductDetail";

function Cart({listCart, handleRemoveCart}) {
    return ( <>
        <ListProduct typeRender={'CART'} handleSubmit={handleRemoveCart} products={listCart} title={'List cart'}/>
        
    </> );
}

export default Cart;


