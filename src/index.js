import React from 'react';
import ReactDom from 'react-dom';// рендер приложения
import App from './App';

import "uimini"
import "./assets/scss/main.scss"


ReactDom.render(
<React.StrictMode>
    <App />
</React.StrictMode>,
document.getElementById("app")
);
