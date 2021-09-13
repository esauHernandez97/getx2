import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LenguaExtranjera } from '../components/CLE/LenguaExtranjera'
import { MisCursosScreen } from '../components/cursos/MisCursosScreen'
import { BibliotecaTec } from '../components/eLibro/BibliotecaTec'
import { Kardex } from '../components/kardex/Kardex'
import { PerfilScreen } from '../components/perfil-acedemico/perfil/PerfilScreen'
import { PerfilAcademicoScreen } from '../components/perfil-acedemico/PerfilAcademicoScreen'
import { PerfilAdministrativo } from '../components/perfil-acedemico/perfilAdministrativo/PerfilAdministrativo'
import { PerfilDocente } from '../components/perfil-acedemico/perfilDocente/PerfilDocente'
import { PerfilJefeCarrera } from '../components/perfil-acedemico/perfilJefeCarrera/PerfilJefeCarrera'
import { PerfilAlumnoScreen } from '../components/perfil-Alumno/PerfilAlumnoScreen'
import { Residencias } from '../components/residencias/Residencias'
import { Tramites } from '../components/tramites/Tramites'
import { AddNewFab } from '../components/ui/AddNewFab'
import { Navbar } from '../components/ui/Navbar'

export const DashBoardRouter = () => {
    return (
        <>
            <Navbar />
            <div className="">
                <Switch>

                    {/* Paginas principales */}
                    <Route exact path="/inicio" component={MisCursosScreen} />

                    <Route exact path="/perfilAlumno" component={PerfilAlumnoScreen} />

                    <Route exact path="/perfilAcademico" component={PerfilAcademicoScreen} />

                    <Route exact path="/tramites" component={Tramites} />

                    <Route exact path="/kardex" component={Kardex} />

                    <Route exact path="/centro-idiomas" component={LenguaExtranjera} />

                    <Route exact path="/residencias" component={Residencias} />

                    <Route exact path="/eLibro" component={BibliotecaTec} />

                    {/* Paginas secundarias */}

                    <Route exact path="/perfilAministrativo" component={PerfilAdministrativo} />

                    <Route exact path="/perfilDocente" component={PerfilDocente} />

                    <Route exact path="/perfilJefeCarrera" component={PerfilJefeCarrera}/>

                    <Route exact path="/perfil/:perfilId" component={PerfilScreen} />

                    <Redirect to="/login" />
                </Switch>
            </div>
            <AddNewFab />
        </>
    )
}
