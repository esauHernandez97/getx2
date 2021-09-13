import React, {useMemo} from 'react'
import { getPerfilAByPublisher } from '../../../selectors/getPerfilAByPublisher'
import { PerfilCard } from './PerfilCard'

export const PerfilList = ({publisher}) => {

    const perfiles = useMemo( () =>  getPerfilAByPublisher(publisher), [publisher])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
            {
                perfiles.map(perfil => (
                    <PerfilCard
                    key={perfil.id}
                    {...perfil}/>
                ))
            }
        </div>
    )
}
