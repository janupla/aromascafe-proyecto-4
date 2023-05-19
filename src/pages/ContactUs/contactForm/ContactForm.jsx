import { useFormik } from "formik";
import './contactForm.css';
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { db } from "../../../config/firestore.js";


export function ContactForm() {
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            contactReason: ""
        },
        onSubmit: async function (values) {
            console.log(values)
            try {
                const collectionRef = collection(db, 'Contacto')
                const docRef = await addDoc(collectionRef, values)
                console.log("Document written with ID: ", docRef.id);
            } catch (error) {
                console.error("Error adding document: ", error);

            }

        }
    })

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="contact-form" >
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input name="name" type="text" id="name" value={values.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="surname">Apellido:</label>
                    <input name="surname" type="text" id="surname" value={values.surname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Correo:</label>
                    <input name="email" type="email" id="email" value={values.email}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="contactReason">Motivo:</label>
                    <textarea 
                    name="contactReason" id="contactReason" 
                    value={values.contactReason}
                    onChange={handleChange}
                        />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
export default ContactForm;
