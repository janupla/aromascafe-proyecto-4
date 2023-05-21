import { Col, Container, Row } from "react-bootstrap";
import {Product} from "../productos/Product.jsx";
import './products.css';


export function Products() {
    const products = [{ name: "Café", description: "Café helado", img: "https://i.ibb.co/kHPh2XF/cafehelado.jpg", price: 3990 },
    { name: "Cappuccino", description: "Cappuccino con crema", img: "https://i.ibb.co/6PgCSwq/cappuccino.jpg", price: 5000 },
    { name: "Moccacino", description: "Moccacino con crema", img: "https://i.ibb.co/7Q0DQr3/mocaccino.jpg", price: 5000 },
    { name: "Cheesecake", description: "Cheesecake de frutos rojos", img: "https://i.ibb.co/8drX5BC/cheesecake.jpg", price: 2300 },
    { name: "Panini", description: "Panini con jamón serrano", img: "https://i.ibb.co/LtkNggT/panini.jpg", price: 3500 }]

    return (
        <Container>
            <Row className='products'>
                {products.map((product, index )=>{
                    const{name, description, price, img} = product
                    const key=`product${index}`
                    return(
                        <Col key={key}>
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