import { perfiles } from "../data/perfiles";

export const getHeroesByName = (name = '') => {

    if (name === ''){
        return [];
    }

    name = name.toLocaleLowerCase();
    return perfiles.filter(perfil => perfil.nomPerfil.toLocaleLowerCase().includes(name));
}