import Table from "react-bootstrap/Table";

function ManageProducts({ products }) {
    return (<>
        <Table triped bordered hover>
            <thead>
                <tr style={{ textAlign: "center" }}>
                    <th style={{ width: 10 }}>No</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {
                    products &&
                    products.map((product, index) => {
                        return (
                            <tr style={{textAlign: "center"}}>
                                <td>{index+1}</td>
                                <img style={{height:50}} src={product.productImg} alt=""/>
                                <td>{product.productTitle}</td>
                                <td>{product.productPrice}</td>
                                <td>{product.type}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            
            <tr>
                    <td colSpan={9}>Total</td>
            </tr>

        </Table>
    </>);
}

export default ManageProducts;