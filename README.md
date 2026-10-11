# Curso de ejemplo: HTML básico

Sí: [freeCodeCampOS](https://github.com/freeCodeCamp/freeCodeCampOS) permite crear y ejecutar cursos propios. Este ejemplo contiene un proyecto con tres ejercicios de HTML y pruebas automáticas.

## Cómo abrirlo

La versión actual del paquete oficial solo distribuye el servidor para Linux y macOS. En Windows, utiliza WSL con una distribución Linux y Node.js 20 o superior instalado **dentro de WSL**.

1. Abre WSL y entra en esta carpeta: `cd /mnt/c/Users/foky/Documents/freecodeifcd`.
2. Ejecuta `npm install`.
3. Ejecuta `npm start`.
4. Abre `http://localhost:8080` en el navegador de Windows y selecciona **HTML básico en 3 ejercicios**.
5. Edita `html-basico/index.html` y pulsa **Run Tests** para avanzar.

`npm install` descarga `@freecodecamp/freecodecamp-os` y su ejecutable para Linux. `freecodecamp-server` es el nombre del ejecutable dentro de ese paquete, no un paquete independiente de npm. El curso está escrito en español; la clave técnica `english` se conserva porque freeCodeCampOS la exige como idioma predeterminado.

## Dónde modificar el curso

- `curriculum/locales/english/html-basico.md`: enunciados, pruebas, pistas y código inicial.
- `config/projects.json`: identificador y opciones del proyecto. El título está en el archivo del currículo.
- `freecodecamp.conf.json`: configuración general.
- `html-basico/index.html`: archivo que edita quien realiza los ejercicios.

La CLI `create-freecodecamp-os-app` no está publicada en npm con ese nombre, así que el comando `npx create-freecodecamp-os-app validate` devuelve 404. La CLI está en el [código fuente de freeCodeCampOS](https://github.com/freeCodeCamp/freeCodeCampOS/tree/v4.0.0/cli).

Basado en la [guía de inicio](https://github.com/freeCodeCamp/freeCodeCampOS/blob/main/docs/src/getting-started.md), la [configuración](https://github.com/freeCodeCamp/freeCodeCampOS/blob/main/docs/src/configuration.md) y la [sintaxis de proyectos](https://github.com/freeCodeCamp/freeCodeCampOS/blob/main/docs/src/project-syntax.md) de freeCodeCampOS.
