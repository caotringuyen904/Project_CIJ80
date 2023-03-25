import { useFormik } from "formik";

function ProductFormFormik({ handleAddProduct }) {
    const formik = useFormik({
        initialValues: {
            productTitle: "",
            productPrice: "",
            type: "WOMEN",
        },
        onSubmit: (values) => {
            const data = {
                productTitle: values.productTitle,
                productPrice: values.productPrice,
                type: values.type,
            }
            handleAddProduct(data);
        }
    });

    return (<>
        <form onSubmit={formik.handleSubmit}>
            <div className="product-form">
                <h3 tyle={{ textAlign: "center" }}>Product Infomation</h3>
                <div>
                    <lable>Product name: </lable>
                    <input placeholder="add a product"
                        type='text'
                        value={formik.values.productTitle}
                        onChange={formik.handleChange}
                        name="productTitle"
                    ></input>
                </div>
                <div>
                    <lable>Product price: </lable>
                    <input placeholder="add price..."
                        type='text'
                        value={formik.values.productPrice}
                        onChange={formik.handleChange}
                        name="productPrice"

                    ></input>
                </div>
                <label>Product type: </label>
                <div className="type-select">
                    <select 
                            name="type"
                            style={{ width: 75 }}
                            value={formik.values.type}
                            onChange={formik.handleChange}
                    >
                        <option value='WOMEN'>Female</option>
                        <option value='MEN'>Male</option>
                    </select>
                </div>
                <button>Add product</button>
            </div>
        </form>
    </>);
}

export default ProductFormFormik;