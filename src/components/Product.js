import { NavLink } from 'react-router-dom';

function Product({ productImg, productId, productPrice, productTitle, onSubmit, type }) {
    return (<>
    <NavLink to={`/cart/${productId}`}>
        <div className='product'>
            <img src={productImg} alt=""></img>
            <div className="product-description">
                <p>{productTitle}</p>
                <p>{productPrice}</p>
                <button className="btn-add" onClick={onSubmit}>
                    {type === 'PRODUCT' ? 'Add to cart' : 'Remove'}
                </button> 
            </div>
        </div>
        </NavLink>
    </>);
}

export default Product;