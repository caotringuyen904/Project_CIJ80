
function Product({productImg, productId, productPrice, productTitle, onSubmit,type}) {
        console.log('productImg:', productImg);
    return (<>
        <div className='product'>
            <img src={productImg} alt=""></img>
            <div className="product-description">
                <p>{productTitle}</p>
                <p>{productPrice}</p>
                <button className="btn-add" onClick={onSubmit}>
                    {type ==='PRODUCT'?'Add to cart':'Remove'}
                </button>
            </div>
        </div>
    </>);
}

export default Product;