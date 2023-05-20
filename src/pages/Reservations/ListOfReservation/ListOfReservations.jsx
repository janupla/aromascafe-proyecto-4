import { Container, Spinner, Table } from "react-bootstrap"
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../config/firestore.js"


export function ListOfReservations({ title }) {
    const [reservas, setReservas] = useState([])
    const [loadingData, setloadingData] = useState(true)


    useEffect(() => {
        const obtenerReservaciones = async () => {
            const collectionRef = collection(db, "Reservas")
            const querySnapshot = await getDocs(collectionRef)
            const reservas = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setReservas(reservas)
            setloadingData(false)
        }
        try {
            obtenerReservaciones()

        } catch (error) {
            console.log(error)
            setloadingData(false)
        }
    })

    return (
        <div>
            <h1> {title} </h1>

            <Container>
                <p>A continuación, podrá ver el listado de reservaciones realizado</p>
                {
                    loadingData ? (
                        <Spinner animation='border' role='status'></Spinner>
                    ) : (<Table>
                        <thead>
                            <tr>
                                <th>Persona a cargo</th>
                                <th>Tipo de mesa</th>
                                <th>Fecha reservada</th>
                                <th>Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reservas.length === 0 ?
                                    <tr>
                                        <td colSpan={4}>No hay reservaciones</td>
                                    </tr>
                                    : reservas.map(reservacion => (
                                        <tr>
                                            <td>{reservacion.nombreCliente}</td>
                                            <td>{reservacion.tipoMesa}</td>
                                            <td>{reservacion.fechaReserva}</td>
                                            <td>{reservacion.horaReserva}</td>

                                        </tr>
                                    ))
                            }


                        </tbody>

                    </Table>)

                }


            </Container>
        </div>
    )
}
