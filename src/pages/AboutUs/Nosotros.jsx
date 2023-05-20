import './nosotros.css';
import waterBackground from '../AboutUs/water-background.jpg';

const Nosotros = () => {
    return (
        <div className='nosotros-inicio'>
            <img src={waterBackground} alt="" />
            <h2>Sobre Aromas Café</h2>
            <p>¡Bienvenido a nuestro café! Somos un lugar acogedor
                donde puedes disfrutar de deliciosas bebidas calientes y pasteles frescos.
                Nuestro objetivo es brindar un ambiente relajante y un excelente servicio a nuestros clientes.
                Hoy, ya consolidados como una Cafetería de Especialidad buscamos preservar y expandir el espíritu
                de buena onda y buen café. </p>
        </div>
    );
};

export default Nosotros;