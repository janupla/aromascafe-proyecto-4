
import { ContactForm } from '../contactForm/ContactForm.jsx';
import './contacto.css';

function Contacto(){
    return (
        <div className='contacto-caja'>
            <h1 className='titulo-contacto'>Formulario de Contacto</h1>
            <ContactForm />
            
        </div>
    );
};
export default Contacto