import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import One from './One';
import Two from './Two';
import NoMatch from './NoMatch';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';
ReactDOM.render(

	<BrowserRouter>
  <div>
    <Route path='/' component={App} />
    <Route path='/One' component={One} />
    <Route path='/Two' component={Two} />
    <Route path='*' component={NoMatch} />
  </div>
</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
