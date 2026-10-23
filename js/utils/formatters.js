//Preparar información para mostrarla

//Función que convierte valor númerico a una representación monetaria usando mxn

export function formatCurrency(valor){
    const numero = Number(valor);

    if (!Number.isFinite(numero)){
        return '$0.00';
    }

    //Aplicar formato de moneda
    return numero.toLocaleString('es-MX',{
        style: 'currency',
        currency:'MXN',
    });
}



//Formatear fecha
export function formatDate(fecha) {
	
	// Convertimos el valor a un objeto Date
    const fechaObjeto = new Date(fecha);
	
	// Comprobamos que sea una fecha válida
    if (Number.isNaN(fechaObjeto.getTime())) {
        return '';
    }

    return fechaObjeto.toLocaleDateString('es-MX');
}

//Formatear número de cuenta
export function formatAccountNumber(numerCuenta) {
    const numero = String(numerCuenta ?? '');

    //Separar grupos de cuatro digitos
    return numero.replace(
        /(\d{4})(?=\d)/g,
        '$1 ',
    );
}

