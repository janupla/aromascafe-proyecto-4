import { Container, Row } from "react-bootstrap";
import { Product } from "./productos/Product.jsx";
import './products.css'


export function Products() {
    const Productos = [{ name: "Producto 1", description: "Descripción producto 1", img: "url", price: $3990 },
    { name: "Producto 2", description: "Descripción producto 2", img: "url", price: $5000 },
    { name: "Producto 3", description: "Descripción producto 3", img: "url", price: $6800 },
    { name: "Producto 4", description: "Descripción producto 4", img: "url", price: $2300 },
    { name: "Producto 5", description: "Descripción producto 5", img: "url", price: $3500 }]

    return (
        <Container>
            <Row className='products'>
                {products.map(product =>{
                    const{name, description, price, img} = product
                    return(
                        <Col>
                        <Product name={name} description={description} price= {price} img= {img}
                        ></Product>
                        </Col>
                    )
                }
                    
                    )}
            </Row>
        </Container>
    )
}