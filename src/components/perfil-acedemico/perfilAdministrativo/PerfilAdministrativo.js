import React from 'react'
import { PerfilList } from '../perfil/PerfilList'

export const PerfilAdministrativo = () => {
    return (
        <>
            <div className="container">
                <h1>
                    Perfil Admisnitrativo
                </h1>
                <hr />
                <PerfilList publisher="administrativo" />
            </div>
        </>
    )
}
