import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Calculator from './Components/Tab1';

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
