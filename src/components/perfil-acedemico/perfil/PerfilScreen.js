import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getPerfilAById } from './../../../selectors/getPerfilAById';

export const PerfilScreen = ({ history }) => {

    const { perfilId } = useParams();

    const perfil = getPerfilAById(perfilId);

    if (!perfil) {
        return <Redirect to="/perfilAcademico" />
    }
    const {
        publisher,
        departamento,
        nomPerfil,
        cargo,
        correo,
        contacto
    } = perfil;

    const handleReturn = () => {
        history.goBack();
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-4">
                    <img
                        src={`../assets/fotosPerfiles/${perfilId}.png`}
                        alt={nomPerfil}
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
                </div>

                <div className="col-8 animate__animated animate__fadeInRight">
                    <h3> {departamento} </h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b> Nombre a cargo: </b> {nomPerfil}</li>
                        <li className="list-group-item"> <b>Cargo: </b> {cargo} </li>
                        <li className="list-group-item"> <b>Correo: </b> {correo} </li>
                        <li className="list-group-item"> <b>Contacto: </b> {contacto} </li>
                    </ul>

                    <h5>Caracteristicas de su Cargo</h5>
                    <p> {nomPerfil} </p>

                    <button
                        className="btn btn-outline-info"
                        onClick={handleReturn}
                    >
                        Return
                    </button>
                </div>
            </div>
        </div>
    )
}
 