import React from 'react'
import { PerfilList } from '../perfil/PerfilList'

export const PerfilJefeCarrera = () => {
    return (
        <div className="container">
            <h1>
                Jefes de carrera
            </h1>
            <hr/>
            <PerfilList publisher="docente" />
        </div>
    )
}
