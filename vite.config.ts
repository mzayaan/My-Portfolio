import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

declare const process: { env: Record<string, string | undefined> };

// GitHub Pages serves project repos from https://<user>.github.io/<repo>/,
// so the build needs a base path. The deploy workflow sets VITE_BASE.
// Locally and on a <user>.github.io repo it stays '/'.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
});
