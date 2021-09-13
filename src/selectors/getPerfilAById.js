import { perfiles } from "../data/perfiles";

export const getPerfilAById = ( id ) => {
    return perfiles.find(perfil => perfil.id === id);
} 