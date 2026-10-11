const { existsSync } = require('node:fs');
const { join } = require('node:path');
const { spawnSync } = require('node:child_process');

const targets = {
  'linux-x64': 'x86_64-unknown-linux-gnu',
  'darwin-x64': 'x86_64-apple-darwin',
  'darwin-arm64': 'aarch64-apple-darwin'
};
const target = targets[`${process.platform}-${process.arch}`];

if (!target) {
  console.error(`freeCodeCampOS 4.0.0 no incluye un servidor para ${process.platform}-${process.arch}.`);
  process.exit(1);
}

const server = join(__dirname, '..', 'node_modules', '@freecodecamp', 'freecodecamp-os', 'bin', `freecodecamp-server-${target}`);
if (!existsSync(server)) {
  console.error(`No se encontró ${server}. Ejecuta npm install dentro de WSL.`);
  process.exit(1);
}

const result = spawnSync(server, process.argv.slice(2), { stdio: 'inherit' });
if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}
process.exit(result.status ?? 1);
