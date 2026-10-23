// Comprobar datos

export function validarCampoObligatorio(valor) {
    //Validamos la existencia del valor
    return (
        //Evitamos nulos e indefinidios
        valor !== undefined &&
        valor !== null &&
        //convierte el valor a texto y elimina espacios al principio y al final.
        String(valor).trim() !== ''
    );
}

//Validamos el monto
export function validarMonto(monto){
    //Convertimos el dato a numero
    const montoNumerico = Number(monto);

    return (
        //Verificamos que sea un numero finito
        Number.isFinite(montoNumerico) &&
        montoNumerico > 0
    );
}