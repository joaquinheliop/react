import App from './App';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"

import Contacto from './views/Contacto';
import Blog from './views/Blog';
import Post from './views/Post';
import ApiRick from './views/ApiRick';
import TodoApp from './views/TodoApp'
import E404 from './views/E404';

ReactDOM.render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<ApiRick />} />
        <Route path='todoapp' element={<TodoApp />} />
        <Route path='contacto' element={<Contacto />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<Post />} />{/*meto en la ruta una variable por ejemplo :id*/}
        <Route path='*' element={<E404 />} />
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);

