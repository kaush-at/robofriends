import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));
//we will add <div> tag here because we need to return single component
serviceWorker.unregister();