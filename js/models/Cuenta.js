// Importamos generarId() para asignar automáticamente un identificador interno a cada cuenta.
import { generarId } from '../utils/helpers.js';

//Modelo cuenta representa la cuenta bancaria del usuario

export class Cuenta {
    constructor({
        id = generarId(),
        numeroCuenta,
        /* Si no se indica otro tipo, utilizaremos Ahorro. */
        tipo = 'Ahorro',
        saldo = 0,
        //Identificador del usuario propietario de la cuenta.
        usuarioId,
        fechaApertura = new Date().toISOString(),
        activa = true,
    }) {
	    
	    /* ================================= 
			    ASIGNAR PROPIEDADES 
		================================= */
        this.id = id;
        this.numeroCuenta = numeroCuenta;
        this.tipo = tipo;
        this.saldo = Number(saldo);
        this.usuarioId = usuarioId;
        this.fechaApertura = fechaApertura;
        this.activa = activa;
    }

//Deposito incrementa el saldo actual utilizando el monto recibido.

    depositar(monto) {
        this.saldo += Number(monto);

        return this.saldo;
    }

//Retirar para disminuir el saldo actual utilizando el monto recibido.
    retirar(monto) {
        this.saldo -= Number(monto);

        return this.saldo;
    }
}