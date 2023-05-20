import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs={12} className="text-center">
                        <p>&copy; 2023 Tu Empresa. Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;