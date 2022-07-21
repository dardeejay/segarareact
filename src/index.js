import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/styles/style.scss';
import 'jquery/dist/jquery.min.js';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome, fas } from '@fortawesome/free-solid-svg-icons'
import {fab, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
library.add(fab, faFontAwesome, fas, faFacebook, faInstagram)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
