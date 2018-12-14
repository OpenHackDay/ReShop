
// run build > npm run build:dev
// watch for server changes with > npm run watch
// watch for webpack changes > webpack --watch
// clean dist > npm run clean


import 'normalize.css/normalize.css';
import '../sass/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const template = <h1>Open Hack Day</h1>;

ReactDOM.render(template, document.querySelector('#root'));
