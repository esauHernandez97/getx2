import React from 'react'

export const PerfilAcademicoScreen = ({history}) => {

    const handleChangeAdmin = () => {
        history.push('/perfilAministrativo')
    }

    const handleChangeDocente = () => {
        history.push('/perfilDocente')
    }

    const handleChnageJefeCarrera = () => {
        history.push('/perfilJefeCarrera')
    }

    return (
        <>
            <div>
                <h1>
                    Perfiles Academicos
                </h1>

                <hr />

            </div>
            <div>
                <button 
                    type="button" 
                    className="btn btn-primary btn-lg btn-block"
                    onClick={handleChangeAdmin}
                        >
                        Perfiles Administrativos
                    </button>
                <button 
                    type="button" 
                    className="btn btn-primary btn-lg btn-block"
                    onClick={handleChangeDocente}>
                        Perfiles Docentes
                    </button>

                    <button 
                    type="button" 
                    className="btn btn-primary btn-lg btn-block"
                    onClick={handleChnageJefeCarrera}>
                        Perfiles jefe de carrera
                    </button>
            </div>
        </>
    )
}
