# 🔎📖 Cinema: "Buscador de peliculas y series"

### 👩‍💻 Realizado con ❤️ por:
- [Alexandra Quijano S.](https://github.com/Alexaquijano22)

### 🖥️ Deployado [aquí](https://buscador-peliculas-aa00d.firebaseapp.com/)

### 🛠️ Recursos:

React Js version: 17.0.2

API: https://www.themoviedb.org/

Material UI

Firebase



## 📄 Consigna

En este proyecto vas a crear una aplicación que se basará en la gestión y uso de una plataforma de contenido cinematográfico. Se conecta a una api de películas y series de donde se obtendra toda la información necesaria para nutrir la aplicación de contenidos.


## ✋ Actores, funciones y responsabilidades

• Administrador
    - Iniciar sesión con "role admin".
    - Acceso a todas las paginas del sitio.
    - Seleccionar items (peliculas o series) de la api para agregar a la plataforma (DB) de reproducción.
    - Eliminar items (peliculas o series) de la plataforma (DB).
    - Eliminar usuarios.

• Usuario
    - Iniciar sesión con "role user".
    - Acceso solo a películas, series y detalle.
    - Los items (películas y series) pueden ser marcadas como vistos.

## 💻 Pantallas

• Signup
    - Esta pantalla contendrá un formulario que permitirá crear usuarios en la base de datos.
    - Los usuarios se crean con el role “user” por defecto.
    - Tendremos que cambiar, directamente desde firebase, el role de uno de los usuarios a “admin”.
    - Validaciones 

• Login
    - Formulario de inicio de sesión que solicita usuario y contraseña.
    - Validaciones 

• Admin
    - Esta pantalla listará las películas mejor ranqueadas
    - Tendrá un buscador que en caso de contener texto realizará una busqueda multiple (peliculas, series, personas, etc) 
    - Para ambos casos previos, dispondremos de una paginación que se ajuste a los resultados.
    - Paginación numérica
    - Los items (películas y series) se presentarán con una imagen y los datos mas relevantes.
    - Cada item deberá tener un botón que permita dar de alta la totalidad de sus datos en la base de datos de la aplicación.
    - Los items que ya existen en la base de datos, deberen contener un botón que permita eliminarlos.

• Home
    - Esta pantalla debe listar todos los items dados de alta en la base de datos.
    - Al hacer click sobre un item, se debe abrir la pagina “Detail”.
    - Los items deben contener un botón que permita marcarlos como vistos para el usuario en sesión.

• Películas
    - Esta pantalla debe listar solo las películas dadas de alta en la base de datos.
    - Al hacer click sobre un item, se debe abrir la pagina “Detail”.
    - Las películas deben contener un botón que permita marcarlas como vistas para el usuario en sesión.

• Series
    - Esta pantalla debe listar solo las películas dadas de alta en la base de datos.
    - Al hacer click sobre un item, se debe abrir la pagina “Detail”.
    - Las películas deben contener un botón que permita marcarlas como vistas para el usuario en sesión.

• Detail
    - En esta pantalla se podrá ver la información detallada de la película, poster y trailers y un listado con el resto de los items (películas y series) disponibles.
