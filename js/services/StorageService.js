//Centralizamos nombres de todas las claves ysadas en LocalStorage, para no escribir cadenas manuales
export const STORAGE_KEYS = {
    USUARIOS: 'usuarios', //Asi evitamos errores de escribir usuario y usuarios
    CUENTAS: 'cuentas',
    MOVIMIENTOS: 'movimientos',
    SESION: 'sesion',
};

class StorageService{
    //Vamos a guardar la información, clave(donde guaardarlo ) y valor (lo que queremos guardar)
    guardar(clave, valor) {
        const valorJSON =
            JSON.stringify(valor);
        
        /* Guardamos el JSON utilizando la clave recibida. */
        localStorage.setItem(
            clave,
            valorJSON,
        );
    }

    //Obtener la información, clave (lo que queremos recuperar) y valorPorDefecto(retorna si no existe información)
    obtener(
    clave,
    valorPorDefecto = null,
    ) {
        /* getItem() devuelve el contenido almacenado como texto. Si la clave no existe devuelve null. */
        const valor =
            localStorage.getItem(clave);
        
        // VALIDAR SI EXISTE INFORMACIÓN
        if (valor === null) {
            return valorPorDefecto;
        }
        
        // CONVERTIR JSON
        try {
            return JSON.parse(valor);
        } catch (error) {
        
            //Si el JSON almacenado es inválido, evitamos detener toda la aplicación.
            console.error(
                `No fue posible leer la clave "${clave}" de LocalStorage.`,
                error,
            );
            /* Si ocurre un error regresamos el valor predeterminado. */
            return valorPorDefecto;
        }
    }

    //Eliminar únicamente la clave recibida sin afectar el LS
    eliminar(clave){
        localStorage.removeItem(clave);
    }

    //Limpiar el LS
    limpiar(){
        localStorage.clear();
    }

}

//Instancia del servicio, una sola para después reutilizarla

export const storageService = new StorageService();



