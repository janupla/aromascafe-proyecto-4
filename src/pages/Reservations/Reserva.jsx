
import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { ListOfReservations } from './ListOfReservation/ListOfReservations';
import { ReservationForm } from './ReservationForm/ReservationForm';

const Reserva = () => {
    return (
        <Tabs defaultActiveKey={"reservaciones"} id="reservaciones-tabs" fill={true}>

            <Tab eventKey={"reservaciones"} title="Reservaciones" mountOnEnter={true}
                unmountOnExit={true}>

                <ListOfReservations title={"Lista de Reservaciones"}></ListOfReservations>

            </Tab>
            <ReservationForm title={"Formulario para reservar una hora"}></ReservationForm>

            <Tab eventKey={"reservar"} title="Reservar horas"></Tab>

        </Tabs>
    );
};

export default Reserva;