import App from './App';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"

import Inicio from './views/Inicio';
import ApiRick from './views/ApiRick';
import TodoApp from './views/TodoApp'
import Blog from './views/Blog';
import Post from './views/Post';
import Contacto from './views/Contacto';
import E404 from './views/E404';

import UserProvider from './context/UserProvider';
import Protegida from './views/Protegida';
import VerificarUsuario from './components/VerificarUsuario';

ReactDOM.render(

  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Inicio />} />
          <Route path='apirick' element={<ApiRick />} />
          <Route path='todoapp' element={<TodoApp />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<Post />} />{/*meto en la ruta una variable por ejemplo :id*/}

          <Route path='protegida' element={
            <VerificarUsuario>
              <Protegida />
            </VerificarUsuario>
          } />{/*voy a proteger esta ruta para que el usuario la vea solo sie sta conectado*/}

          <Route path='*' element={<E404 />} />
        </Route>
      </Routes>
    </UserProvider>
  </BrowserRouter>,

  document.getElementById('root')
);

