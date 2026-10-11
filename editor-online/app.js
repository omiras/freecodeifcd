const starter = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Mi primera página</title>
  </head>
  <body>

  </body>
</html>`;

const lessons = [
  {
    title: 'Crea un título principal',
    description: 'Dentro de <body>, añade un título <h1> con el texto «Mi primera página». Guarda el contenido escribiendo directamente en el editor.',
    hint: 'Un título principal se escribe así: <h1>Texto</h1>.',
    checks: [
      ['Existe un título <h1>.', doc => !!doc.body.querySelector('h1')],
      ['El título dice «Mi primera página».', doc => doc.body.querySelector('h1')?.textContent.trim() === 'Mi primera página']
    ]
  },
  {
    title: 'Añade un párrafo',
    description: 'Debajo del título, añade un párrafo <p> con el texto «Estoy aprendiendo HTML.». Conserva el título anterior.',
    hint: 'Un párrafo se escribe así: <p>Texto</p>.',
    checks: [
      ['El título anterior sigue presente.', doc => doc.body.querySelector('h1')?.textContent.trim() === 'Mi primera página'],
      ['Existe un párrafo <p>.', doc => !!doc.body.querySelector('p')],
      ['El párrafo dice «Estoy aprendiendo HTML.».', doc => doc.body.querySelector('p')?.textContent.trim() === 'Estoy aprendiendo HTML.']
    ]
  },
  {
    title: 'Inserta un enlace',
    description: 'Debajo del párrafo, añade un enlace <a> que lleve a https://www.freecodecamp.org/ y muestre el texto «Visitar freeCodeCamp».',
    hint: 'Ejemplo: <a href="https://ejemplo.com/">Visitar sitio</a>.',
    checks: [
      ['El título y el párrafo siguen presentes.', doc => doc.body.querySelector('h1')?.textContent.trim() === 'Mi primera página' && doc.body.querySelector('p')?.textContent.trim() === 'Estoy aprendiendo HTML.'],
      ['Existe un enlace con el texto pedido.', doc => [...doc.body.querySelectorAll('a')].some(a => a.textContent.trim() === 'Visitar freeCodeCamp')],
      ['El enlace apunta a freeCodeCamp.', doc => [...doc.body.querySelectorAll('a')].some(a => a.getAttribute('href') === 'https://www.freecodecamp.org/' && a.textContent.trim() === 'Visitar freeCodeCamp')]
    ]
  }
];

const storageKey = 'laboratorio-html-v1';
const code = document.querySelector('#code');
const preview = document.querySelector('#preview');
const results = document.querySelector('#results');
let saved;
try { saved = JSON.parse(localStorage.getItem(storageKey) || 'null'); } catch { saved = null; }
let lesson = Number.isInteger(saved?.lesson) && saved.lesson >= 0 && saved.lesson < lessons.length ? saved.lesson : 0;
let completed = Array.isArray(saved?.completed) ? saved.completed : [];
code.value = typeof saved?.code === 'string' ? saved.code : starter;

function persist() {
  try { localStorage.setItem(storageKey, JSON.stringify({ code: code.value, lesson, completed })); } catch { /* Almacenamiento no disponible. */ }
}

function renderPreview() {
  preview.srcdoc = code.value;
  persist();
}

function renderLesson() {
  const item = lessons[lesson];
  document.querySelector('#lesson-count').textContent = `Ejercicio ${lesson + 1} de ${lessons.length}`;
  document.querySelector('#lesson-title').textContent = item.title;
  document.querySelector('#lesson-description').textContent = item.description;
  document.querySelector('#lesson-hint').textContent = item.hint;
  document.querySelector('#previous').disabled = lesson === 0;
  document.querySelector('#next').disabled = lesson === lessons.length - 1 || !completed.includes(lesson);
  document.querySelector('#next').textContent = lesson === lessons.length - 1 ? 'Curso terminado' : 'Siguiente';
  results.replaceChildren();
  const message = document.createElement('li');
  message.className = 'muted';
  message.textContent = 'Escribe el código y ejecuta las pruebas.';
  results.append(message);
  persist();
}

function runTests() {
  const doc = new DOMParser().parseFromString(code.value, 'text/html');
  const checks = lessons[lesson].checks.map(([label, check]) => ({ label, passed: Boolean(check(doc)) }));
  results.replaceChildren();
  for (const { label, passed } of checks) {
    const item = document.createElement('li');
    item.className = passed ? 'pass' : 'fail';
    item.textContent = `${passed ? '✓' : '✗'} ${label}`;
    results.append(item);
  }
  if (checks.every(test => test.passed)) {
    if (!completed.includes(lesson)) completed.push(lesson);
    document.querySelector('#next').disabled = lesson === lessons.length - 1;
    if (lesson === lessons.length - 1) {
      const done = document.createElement('li');
      done.className = 'pass';
      done.textContent = '¡Curso completado! Has terminado los tres ejercicios.';
      results.append(done);
    }
  } else {
    completed = completed.filter(index => index !== lesson);
    document.querySelector('#next').disabled = true;
  }
  persist();
}

let previewTimer;
code.addEventListener('input', () => {
  clearTimeout(previewTimer);
  previewTimer = setTimeout(renderPreview, 180);
});
code.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') runTests();
  if (event.key === 'Tab') {
    event.preventDefault();
    const start = code.selectionStart;
    code.setRangeText('  ', start, code.selectionEnd, 'end');
    renderPreview();
  }
});
document.querySelector('#run-tests').addEventListener('click', runTests);
document.querySelector('#previous').addEventListener('click', () => { if (lesson > 0) { lesson--; renderLesson(); } });
document.querySelector('#next').addEventListener('click', () => { if (lesson < lessons.length - 1 && completed.includes(lesson)) { lesson++; renderLesson(); } });
document.querySelector('#reset').addEventListener('click', () => {
  if (!confirm('¿Restablecer el código y el progreso de los tres ejercicios?')) return;
  code.value = starter;
  lesson = 0;
  completed = [];
  renderPreview();
  renderLesson();
});
renderPreview();
renderLesson();
