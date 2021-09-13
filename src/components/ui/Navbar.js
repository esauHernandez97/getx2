import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'

import { ViewNotificacion } from './ViewNotificacion';

export const Navbar = () => {

    const history = useHistory();

    const handleLogout = () => {
        history.replace("/login");
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <Link
                className="navbar-brand"
                to="/inicio"
            >
                TecNM - ITS Xalapa
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/inicio"
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/perfilAlumno"
                    >
                        Perfil
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/perfilAcademico"
                    >
                        Academicos
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/tramites"
                    >
                        Tramites
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/kardex"
                    >
                        Kardex
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/centro-idiomas"
                    >
                        CLE
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/residencias"
                    >
                        Residencias
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/eLibro"
                    >
                        eLibro
                    </NavLink>


                </div>
            </div>
            <div className="navbar-collapse">

                <div className="navbar-nav ml-auto">


                    <div className="btn-toolbar " >
                        <div className="btn-group mr-2">
                            <ViewNotificacion/>
                        </div>


                    </div>

                    <div>
                        <div className="btn-group mr-2">
                            <button className="btn btn-outline-danger" onClick={handleLogout}>
                                <i className="fas fa-sign-out-alt"></i>
                                <span> Salir</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}
