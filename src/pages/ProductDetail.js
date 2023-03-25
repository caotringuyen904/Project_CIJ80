import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import ListProduct from "../components/ListProduct";


function ProductDetail({ handleAddToCart }) {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();

    console.log('productId:', productId);

    useEffect(() => {
        fetch('https://63f483a03f99f5855db14181.mockapi.io/api/v1/hdiehiu')
            .then(res => res.json())
            .then(products => {
                const temp = products.find(e => e.id == productId);
                console.log('temp:', temp);
                setProduct(temp);
            })
    }, [])


    return (<>
        {
            product &&
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Product detail</Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={`.${product.productImg}`} />
                    <Card.Title>{product.productTitle}</Card.Title>
                    <Card.Text>
                        <Card.Title>{product.productPrice}</Card.Title>
                    </Card.Text>
                </Card.Body>
                <Button onClick={handleAddToCart}>Add to cart</Button>
            </Card>
        }
        
    </>);
}


export default ProductDetail;