// /workspaces/Semana-da-comp-2026/create/next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Define a raiz do projeto como o diretório pai, onde está o package-lock.json principal
    root: path.join(__dirname, '..'),
  },
};

module.exports = nextConfig;