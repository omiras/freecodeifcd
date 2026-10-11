# Curso de ejemplo: HTML básico

Sí: [freeCodeCampOS](https://github.com/freeCodeCamp/freeCodeCampOS) permite crear y ejecutar cursos propios. Este ejemplo contiene un proyecto con tres ejercicios de HTML y pruebas automáticas.

## Opción con editor en el navegador

Abre `editor-online/index.html` en un navegador para ver los mismos tres ejercicios con editor HTML, vista previa y pruebas integradas. Esta versión funciona sin instalar paquetes ni arrancar freeCodeCampOS. Guarda el progreso en el almacenamiento local de ese navegador. Es una aplicación de ejemplo independiente: las modificaciones hechas en este editor no cambian `html-basico/index.html`.

## Cómo abrirlo

La versión actual del paquete oficial solo distribuye el servidor para Linux y macOS. En Windows, utiliza WSL con una distribución Linux y Node.js 20 o superior instalado **dentro de WSL**.

1. Abre WSL y entra en esta carpeta: `cd /mnt/c/Users/foky/Documents/freecodeifcd`.
2. Ejecuta `npm install`.
3. Ejecuta `npm start`.
4. Abre `http://localhost:8080` en el navegador de Windows y selecciona **HTML básico en 3 ejercicios**.
5. Abre esta carpeta en Visual Studio Code, edita y guarda `html-basico/index.html`, y vuelve a la página del curso para pulsar **Run Tests**. La página del curso no incluye un editor de código.

`npm install` descarga `@freecodecamp/freecodecamp-os` y su ejecutable para Linux. Ejecuta tanto `npm install` como `npm start` **dentro de WSL**, con el Node.js de Linux. La versión 4.0.0 tiene un error en su lanzador; `npm start` usa `scripts/start.js` para ejecutar directamente el binario instalado. El curso está escrito en español; la clave técnica `english` se conserva porque freeCodeCampOS la exige como idioma predeterminado.

## Dónde modificar el curso

- `curriculum/locales/english/html-basico.md`: enunciados, pruebas, pistas y código inicial.
- `config/projects.json`: identificador y opciones del proyecto. El título está en el archivo del currículo.
- `freecodecamp.conf.json`: configuración general.
- `html-basico/index.html`: archivo que edita quien realiza los ejercicios.

La CLI `create-freecodecamp-os-app` no está publicada en npm con ese nombre, así que el comando `npx create-freecodecamp-os-app validate` devuelve 404. La CLI está en el [código fuente de freeCodeCampOS](https://github.com/freeCodeCamp/freeCodeCampOS/tree/v4.0.0/cli).

Basado en la [guía de inicio](https://github.com/freeCodeCamp/freeCodeCampOS/blob/main/docs/src/getting-started.md), la [configuración](https://github.com/freeCodeCamp/freeCodeCampOS/blob/main/docs/src/configuration.md) y la [sintaxis de proyectos](https://github.com/freeCodeCamp/freeCodeCampOS/blob/main/docs/src/project-syntax.md) de freeCodeCampOS.
