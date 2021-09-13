import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLogin = () => {
        history.replace("/inicio");
    }

    return (
        <div className="container login-container">
            <div className="text-center">
                <div className="login-form-1">
                    <form className="form-signin">

                        <img className="mb-4" src="./assets/tecnm_logo.png" alt="Tec" width="285" height="141"/>
                        <h1 className="h3 mb-3 font-weight-normal"> Instituto Tecnológico Superior de Xalapa</h1>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                                onClick={handleLogin}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
