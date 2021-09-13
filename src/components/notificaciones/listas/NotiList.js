import React, { useEffect, useState } from 'react'
import { dataNotificaciones } from '../data/dataNotificaciones';
//import { getNotificacionByNote } from '../selectors/getNotificacionesByNote'
//import { NotiCard } from './NotiCard'

export const NotiList = () => {

    //const notificaciones = useMemo(() => getNotificacionByNote(note), [note]);

    //Codigo de prueba

    // const [checkedState, setCheckedState] = useState(
    //     new Array(dataNotificaciones.length).fill(false)
    // );

    // const [total, setTotal] = useState();

    // const handleOnChange = (position) => {
    //     const updatedCheckedState = checkedState.map((item, index) =>
    //         index === position ? !item : item);


    //     setCheckedState(updatedCheckedState);

    //     const totalVisto = updatedCheckedState.reduce(
    //         (sum, currentState, index) => {
    //             if (currentState === true) {
    //                 return sum - 1;
    //             }
    //             return sum;
    //         },
    //         0
    //     );
        
    //     setTotal(totalVisto);
    // };
    

    return (
        <div>
            {/* {
                notificaciones.map(notification => (
                    <NotiCard
                        key={notification.id}
                        {...notification} />
                ))
            } */}

            {/* Codigo de prueba */}

            {
                dataNotificaciones.map(({
                    id,
                    valor,
                    tipo,
                    Encabezado,
                    titulo,
                    textAviso }, index) => {
                    return (
                        <div key={index}>
                            <div className={`card ${tipo} mb-3`} key={index}>
                                <div className="card-header">{Encabezado}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{titulo}</h5>
                                    <p className="card-text">{textAviso}</p>
                                </div>
                                <div className={`card-footer  ${tipo}` } key={index}>
                                    {/* <div className="form-check" key={index}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value={id}
                                            id={`custom-checkbox-${index}`}
                                            checked={checkedState[index]}
                                            onChange={() => handleOnChange(index)} />
                                        <label className="form-check-label" htmlFor={`custom-checkbox-${index}`}>
                                            Mensaje leido
                                        </label>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </div>

    )
}

