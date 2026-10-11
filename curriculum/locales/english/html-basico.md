# HTML básico en 3 ejercicios

Aprende a añadir contenido sencillo a una página HTML. Abre esta misma carpeta en **Visual Studio Code** y edita `html-basico/index.html` en el editor. La página de freeCodeCampOS muestra las instrucciones y las pruebas; el código se escribe en el archivo. Después usa **Run Tests** para comprobar cada paso.

## 0

### --description--

**Ejercicio 1: un título.** En Visual Studio Code, abre `html-basico/index.html` desde el explorador de archivos. Añade dentro de `<body>` un título principal (`<h1>`) cuyo texto sea `Mi primera página`. Guarda el archivo y vuelve a esta página para pulsar **Run Tests**.

### --tests--

La página debe contener un título principal con el texto «Mi primera página».

```js,runner=node
const __html = await readFile(join(ROOT, 'html-basico', 'index.html'), 'utf8');
assert.match(__html, /<h1\b[^>]*>\s*Mi primera página\s*<\/h1>/i);
```

### --hints--

#### 0

Escribe `<h1>Mi primera página</h1>` entre `<body>` y `</body>`.

### --seed--

#### --"index.html"--

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Mi primera página</title>
  </head>
  <body>
    <!-- Completa aquí los tres ejercicios. -->
  </body>
</html>
```

## 1

### --description--

**Ejercicio 2: un párrafo.** Debajo del título, añade un párrafo (`<p>`) cuyo texto sea `Estoy aprendiendo HTML.`. Conserva el título del ejercicio anterior.

### --tests--

El título principal debe seguir presente.

```js,runner=node
const __html = await readFile(join(ROOT, 'html-basico', 'index.html'), 'utf8');
assert.match(__html, /<h1\b[^>]*>\s*Mi primera página\s*<\/h1>/i);
```

Debe haber un párrafo con el texto «Estoy aprendiendo HTML.».

```js,runner=node
const __html = await readFile(join(ROOT, 'html-basico', 'index.html'), 'utf8');
assert.match(__html, /<p\b[^>]*>\s*Estoy aprendiendo HTML\.\s*<\/p>/i);
```

### --hints--

#### 0

Escribe `<p>Estoy aprendiendo HTML.</p>` después de `</h1>`.

## 2

### --description--

**Ejercicio 3: un enlace.** Debajo del párrafo, añade un enlace (`<a>`) a `https://www.freecodecamp.org/`. Su texto visible debe ser `Visitar freeCodeCamp`. Conserva el título y el párrafo.

### --tests--

El título y el párrafo deben seguir presentes.

```js,runner=node
const __html = await readFile(join(ROOT, 'html-basico', 'index.html'), 'utf8');
assert.match(__html, /<h1\b[^>]*>\s*Mi primera página\s*<\/h1>/i);
assert.match(__html, /<p\b[^>]*>\s*Estoy aprendiendo HTML\.\s*<\/p>/i);
```

El enlace debe apuntar a freeCodeCamp y mostrar «Visitar freeCodeCamp».

```js,runner=node
const __html = await readFile(join(ROOT, 'html-basico', 'index.html'), 'utf8');
assert.match(__html, /<a\b[^>]*href\s*=\s*["']https:\/\/www\.freecodecamp\.org\/["'][^>]*>\s*Visitar freeCodeCamp\s*<\/a>/i);
```

### --hints--

#### 0

Escribe `<a href="https://www.freecodecamp.org/">Visitar freeCodeCamp</a>` después de `</p>`.

