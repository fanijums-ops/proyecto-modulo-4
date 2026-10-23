//Consultará a los usuarios registrados y meanejará la sesión almacenada en LocalStorage

import {
    STORAGE_KEYS,
    storageService,
} from './StorageService.js';

//Autenticación
class AuthService {
    //Inicio de sesión, recuperamos los usuarios registrados
    //Si no existe alguno, usamos un array vacío
    login(email, password){
        const usuarios = 
        storageService.obtener(
            STORAGE_KEYS.USUARIOS,
            [],
        );
    //Convertimos el valor a string, eliminamos espacios y transformamos a minúsculas
    const emailNormalizado =
        String(email)
            .trim()
            .toLowerCase();

        //find() regresará el primer usuario que cumpla la condición: mismo correo, misma contraseña y usuario activo
        const usuario =
            usuarios.find(
                (u) =>
                    u.email.toLowerCase() ===
                        emailNormalizado &&
                    u.password === password &&
                    u.activo !== false,
            );

        //Si find() no encontró al usuario manda error
        if (!usuario) {
            throw new Error(
                'Correo o contraseña incorrectos.',
            );
        }
        //Crear sesión, qué usuario y cuándo
        const sesion = {
            usuarioid: usuario.id,
            fechaInicio:
                new Date().toISOString(),
        };
        //Guardar sesión
        storageService.guardar(
            STORAGE_KEYS.SESION,
            sesion,
        );
        
        return usuario;
    }

    //Ceerrar sesión
    logout(){
        storageService.eliminar(
            STORAGE_KEYS.SESION,
        );
    }

    getCurrentUser(){
        //Recuperamos la sesión
        const sesion =
        storageService.obtener(
            STORAGE_KEYS.SESION,
            null,
        );
        //Validamos la sesión
        if (!sesion){
            return null;
        }
        //Recuperamos usuarios
        const usuarios = 
        storageService.obtener(
            STORAGE_KEYS.USUARIOS,
            [],
        );
        //Buscamos al usuario
        return(
            usuarios.find(
                (usuario) =>
                    usuario.id ===
                    sesion.usuarioid,
            ) || null
        );
    }

    //Protegemos ruta
    protegerRuta() {
        //obtener usuario
        const usuario = 
            this.getCurrentUser();

        //Si no hay autenticación
        if(!usuario) {
            window.location.href = 'index.html';

            return false;
        }
        //Permitimos acceso
        return true;
    }
}

export const authService =
    new AuthService();
