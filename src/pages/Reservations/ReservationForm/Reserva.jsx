import React, { useState, useRef } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../config/firestore';
import './reserva.css';

export default function Reservations() {
    const [Nombre, setNombre] = useState('');
    const [Hora, setHora] = useState('');
    const [Fecha, setFecha] = useState('');
    const [Correo, setCorreo] = useState('');
    const refNombre = useRef(null);
    const refHora = useRef(null);
    const refFecha = useRef(null);
    const refCorreo = useRef(null);

    const agregarReserva = async () => {
        if (Nombre !== '' && Hora !== '' && Fecha !== '' && Correo !== '') {
            const { id } = await addDoc(collection(db, 'reservas'), {
                Nombre: Nombre,
                Hora: Hora,
                Fecha: Fecha,
                Correo: Correo,
            });

            if (id !== '') {
                alert('¡Reserva guardada con éxito!');
                setNombre('');
                setHora('');
                setFecha('');
                setCorreo('');
            } else {
                alert('Error: no se pudo reservar');
            }
        } else {
            alert('Debes llenar todos los campos');
        }
        refNombre.current.focus();
    };

    return (
        <div className="content">
            <h2>Reservar Mesa</h2>
            <div className="form">
                <form className="form-container">
                    <div className="form-item col-5">
                        <input
                            className="input"
                            type="text"
                            required="required"
                            id="Nombre"
                            ref={refNombre}
                            value={Nombre}
                            onChange={(event) => {
                                setNombre(event.target.value);
                            }}
                            autoFocus
                        />
                        <label className="label" htmlFor="titulo">
                            Nombre
                        </label>
                    </div>
                    <div className="form-item col-5">
                        <input
                            className="input"
                            type="time"
                            required="required"
                            id="Hora"
                            ref={refHora}
                            value={Hora}
                            onChange={(event) => {
                                setHora(event.target.value);
                            }}
                        />
                        <label className="label" htmlFor="Hora">
                            Hora
                        </label>
                    </div>
                    <div className="form-item col-5">
                        <input
                            className="input"
                            type="date"
                            required="required"
                            id="Fecha"
                            ref={refFecha}
                            value={Fecha}
                            onChange={(event) => {
                                setFecha(event.target.value);
                            }}
                        />
                        <label className="label" htmlFor="Fecha">
                            Fecha
                        </label>
                    </div>
                    <div className="form-item">
                        <input
                            className="input"
                            type="text"
                            required="required"
                            id="Correo"
                            ref={refCorreo}
                            value={Correo}
                            onChange={(event) => {
                                setCorreo(event.target.value);
                            }}
                            placeholder="example@gmail.com"
                        />
                        <label className="label" htmlFor="Correo">
                            Correo
                        </label>
                    </div>
                    <div className="form-item">
                        <input
                            className="btn-enviar"
                            type="button"
                            value="Agregar"
                            onClick={agregarReserva}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}