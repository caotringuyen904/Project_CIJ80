import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";


function ProductDetail() {
const [product, setProduct] = useState(null);
const {productId} = useParams();

console.log('productId:', productId);

    useEffect(() => {
     fetch('https://63f483a03f99f5855db14181.mockapi.io/api/v1/hdiehiu')
     .then(res => res.json())
     .then(products => {
        console.log('products:', products);

        const temp = products.find(e => e.id == productId);
        console.log('temp:', temp);
        setProduct(temp);
     })
    },[])

    console.log('product:', product);

     

    return ( <>
    {
            product &&<>
                <img style={{width: "400", height:"800" , display: "block"}}src={product.productImg} alt="" />
                <div>{product.productTitle}</div>
                </>

            
            //      <Card border="primary" style={{ width: '18rem' }}>
            //     <Card.Header>Product detail</Card.Header>
            //     <Card.Body>
                    
            //     {/* <Card.Img variant="top" src={product.productImg} /> */}
            //     <img style={{width: "400", height:"800" , display: "block"}}src={product.productImg} alt="" />




            //         <Card.Title>{product.productTitle}</Card.Title>
            //         <Card.Text>
            //         <Card.Title>{product.productPrice}</Card.Title>
            //         </Card.Text>
            //     </Card.Body>
            // </Card>
           
        }
    </> );
}

export default ProductDetail ;