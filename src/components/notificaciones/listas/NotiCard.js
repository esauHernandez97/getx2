import React, { useState } from 'react'
import { dataNotificaciones } from '../data/dataNotificaciones';
//import { Notificaciones } from '../Notificaciones';

export const NotiCard = ({
    id,
    valor,
    tipo,
    Encabezado,
    titulo,
    textAviso
}) => {
    //Matriz igual a longitud del numero de casiilas de verificacion
    //

    const index  = dataNotificaciones.map;

    const [checkedState, setCheckedState] = useState(
        new Array(dataNotificaciones.length).fill(false)
    );

    const [total, setTotal] = useState(0);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item);


        setCheckedState(updatedCheckedState);

        const totalVisto = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + dataNotificaciones[index].valor;
                }
                return sum;
            },
            0
        );
        setTotal(totalVisto);
    };

    console.log(total)

    //const prueba = "text-white bg-danger";

    return (
        <div>
            <div className={`card ${tipo} mb-3`}>
                <div className="card-header">{Encabezado}</div>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{textAviso}</p>
                    <p>{total}</p>
                </div>
                <div className={`card-footer  ${tipo}`}>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id={`custom-checkbox-${index}`}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Mensaje leido
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
