import path from 'path';
import docTools, { defineConfig } from '@modern-js/doc-tools';

export default defineConfig({
  doc: {
    root: path.join(__dirname, 'docs'),
  },
  plugins: [docTools()],
});
