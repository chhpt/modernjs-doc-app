import path from 'path';
// import appTools from '@modern-js/app-tools';
import docTools, { defineConfig } from '@modern-js/doc-tools';

export default defineConfig({
  doc: {
    root: path.join(__dirname, 'docs'),
  },
  // runtime: {
  //   router: true,
  // },
  // plugins: [appTools(), docTools()],
  plugins: [docTools()],
});
