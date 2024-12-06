
## Instalación

npm install


node server.js


Uso
Registro de Usuario
POST /api/register

Descripción: Permite registrar un nuevo usuario.

Parámetros de Entrada:

json
{
  "username": "nuevoUsuario",
  "password": "passwordSeguro"
}
Respuesta de Éxito (201):

json
{
  "message": "Usuario registrado satisfactoriamente"
}
## Errores

400: Usuario ya existe

500: Error en el servidor

## Inicio de Sesión

{
  "username": "usuarioExistente",
  "password": "passwordSeguro"
}

## Respuesta de Éxito (200):
 {
  "token": "jwtTokenGenerado"
}


## Errores

400: Usuario no encontrado

400: Contraseña incorrecta

500: Error en el servidor
