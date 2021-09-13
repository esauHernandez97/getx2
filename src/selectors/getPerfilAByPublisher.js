import { perfiles } from "../data/perfiles";

export const getPerfilAByPublisher = (publisher) => {
    const validPublisher = ['administrativo', 'docente', 'profesorsis'];

    if(!validPublisher.includes(publisher)){
        throw new Error(`publisher "${publisher}" no es correcto`);
    }

    return perfiles.filter(perfil => perfil.publisher === publisher);
}