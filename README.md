//Proyecto Final Web

Este es un proyecto final para la materia de desarrollo web. Consiste en una aplicación sencilla de registro de usuarios usando Node.js, Express y SQLite. Permite registrar, consultar y eliminar usuarios desde una interfaz web.

//Tecnologías utilizadas

- Node.js
- Express
- SQLite (ahora usando `better-sqlite3`)
- HTML + CSS (Frontend simple)
- Render (para despliegue en la nube)

// ¿Qué hace esta app?

- Permite registrar usuarios con nombre, correo y contraseña.
- Muestra una lista de los usuarios registrados.
- Permite eliminar usuarios de la lista.
- Funciona tanto en local como en la nube (Render).


//Cómo usarlo localmente

1. Clona el repositorio:
   git clone https://github.com/Guadalupe-Islas/proyecto-final-web.git
   cd proyecto-final-web
   //instala
   npm install
//inicia el servidor
node server.js
//URL
http://localhost:3000
// Estructura del proyecto:
proyecto-final-web/

public/               # Archivos del frontend (HTML, CSS)
    index.html
usuarios.db           # Base de datos SQLite (local)
server.js             # Servidor Express
database.js           # Configuración de la base de datos
package.json          # Dependencias y scripts
   README.md             # Este archivo
