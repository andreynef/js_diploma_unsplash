import React from 'react';//импорт реакт библиотеки для работы с этим файлом
import ReactDOM from 'react-dom';//импорт реактдом библиотеки для работы с этим файлом (только в том файле где находится строчка ReactDOM.render)
import App from './App.js';

ReactDOM.render (//отрендерить/отрисовать
  <App />,//что 
  document.querySelector("#root")//куда
);