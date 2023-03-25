import { NavLink } from 'react-router-dom';

function Product({ productImg, productId, productPrice, productTitle, onSubmit, type }) {
    return (<>
            <div className='product' style={{textAlign:"center"}}>
                <img src={productImg} alt=""></img>
                <div className="product-description">
                    <p>{productTitle}</p>
                    <p>{productPrice}</p>
                </div>
                <button  onClick={onSubmit}>
                    {type === 'PRODUCT' ? 'Add to cart' : 'Remove'}
                </button>

                <NavLink to={`/cart/${productId}`}>
                <button>Detail</button>
                </NavLink>

            </div>
    </>);
}

export default Product;