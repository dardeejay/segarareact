import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/styles/style.scss';
import 'jquery/dist/jquery.min.js';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome, fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faFontAwesome);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
