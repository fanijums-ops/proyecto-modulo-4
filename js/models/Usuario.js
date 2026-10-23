//Importamos generarId() para asignar automaticamente yb identificador
//a cada usuario creado

import { generarId } from "../utils/helpers.js";

//Clase usuario funcionara como molde para representar a las 
//personas registradas dentro del sistema

export class Usuario {
    //Constructor se ejecutará cada vez que creeemos una nueva instancia

    constructor({
        id = generarId(),
        nombre,
        email,
        telefono = '',
        password,
        activo = true,
    }) {
        //Asignar propiedades, this representa la instancia que crearemos
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.password = password;
        this.activo = activo;
    }
}