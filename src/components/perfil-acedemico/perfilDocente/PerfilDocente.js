import React from 'react'
import { PerfilList } from '../perfil/PerfilList'

export const PerfilDocente = () => {
    return (
        <>
            <div className="container">
                <h1>
                    Perfil Docente
                </h1>
                <hr />
                <PerfilList publisher="profesorsis" />
            </div>
        </>
    )
}

