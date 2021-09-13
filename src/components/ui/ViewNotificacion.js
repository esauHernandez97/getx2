import React, { useState }from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { NotiList } from '../notificaciones/listas/NotiList';

export const ViewNotificacion = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={handleShow}>
                <i className="fas fa-bell"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {/* {dataNotificaciones.length} */}
                    

                </span>

            </button>

            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Notificaciones</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="panel__notificaciones">
                    <NotiList />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
