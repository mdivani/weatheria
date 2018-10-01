import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/layout/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/styles.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
