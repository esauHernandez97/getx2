import React from 'react'
import { Link } from 'react-router-dom'

export const PerfilCard = ({
    id,
    publisher,
    departamento,
    nomPerfil,
    cargo,
    correo,
    contacto
}) => {
    return (
        <div>
            <div className="card ms-3" style={{ maxWidth: 540 }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={`./assets/fotosPerfiles/${id}.png`} className="card-img" alt={nomPerfil} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title" >{departamento}</h5>
                            <p className="card-text"> {nomPerfil} </p>
                            {
                            (nomPerfil!== cargo)
                                && <p className="card-text"> {cargo} </p>
                        }

                        <p className="card-text">
                            <small className="text-muted"> {contacto} </small>
                        </p>

                            <Link to={`./perfil/${id}`}>
                                Mas...!
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
