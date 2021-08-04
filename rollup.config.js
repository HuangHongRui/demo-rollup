import json from 'rollup-plugin-json';

export default {
  input: './src/main',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [ json() ]
};
