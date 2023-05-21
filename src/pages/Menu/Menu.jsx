import { Container } from "react-bootstrap";
import { Products } from "./productos/Products";


const Menu = () => {
    return (
        <Container>
            <h1>Menú</h1>
            <Products></Products>
        </Container>
    );
};

export default Menu;