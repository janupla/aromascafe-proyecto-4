import { Container } from "react-bootstrap";
import { Products } from "./productos/Products";
import './menu.css';



const Menu = () => {
    return (
        <Container className="menu-container">


            <div className="menu-content">
            <Products></Products>
            </div>
            
        </Container>
    );
};

export default Menu;