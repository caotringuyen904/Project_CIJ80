import useInput from "../hooks/useInput";

function Admin({handleAddProduct}) {
    const inputTitle = useInput();
    const inputPrice = useInput();
    const inputType = useInput();

    const handleSubmit = (e) => {
        e.prevetnDefault();

        const data={
            productTitle: inputTitle.value,
            productPrice: inputPrice.value,
            type: inputType.value,
        }
        handleAddProduct(data);
        console.log('data:', data);
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <div className="product-form">
                <h3 tyle={{ textAlign: "center" }}>Product Infomation</h3>
                <div>
                    <lable>Product name: </lable>
                    <input placeholder="add a product"
                            type= 'text'
                            value={inputTitle.value}
                            onChange={inputTitle.onChange}
                    ></input>
                </div>
                <div>
                    <lable>Product price: </lable>
                    <input placeholder="add price..."
                            type= 'text'
                            value={inputPrice.value}
                            onChange={inputPrice.onChange}
                    ></input>
                </div>
                <div>
                    <label>Product type: </label>
                    <select style={{width:"75"}}
                            value={inputType.value}
                            onChange={inputType.onChange}
                    >
                        <option value='MEN'>Male</option>
                        <option value='WOMEN'>Female</option>
                    </select>
                </div>
                <button type="submit">Add product</button>
            </div>
        </form>
    </>);
}

export default Admin;