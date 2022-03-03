import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>    
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// app.listen(process.env.PORT ||3000);
