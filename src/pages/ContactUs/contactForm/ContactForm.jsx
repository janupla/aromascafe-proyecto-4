import { useFormik } from "formik";
import './contactForm.css';

export function ContactForm () {
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            contactReason: ""
        },
        onSubmit: async function (values) {
            console.log(values)
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" value={values.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="surname">Apellido:</label>
                <input type="text" id="surname" value={values.surname}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Correo:</label>
                <input type="email" id="email" value={values.email}
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="contactReason">Correo:</label>
                <textarea type="contactReason" id="contactReason" value={values.contactReason}
                    onChange={handleChange} />
            </div>
            <button type="submit">Enviar</button>


        </form>);

};
