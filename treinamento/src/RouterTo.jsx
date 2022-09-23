import { Route, Routes} from 'react-router-dom'

import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Aula from './pages/Aula';

export default function RouterTo() {
    return (
        <>
         <Routes>
        <Route exact path='/'
          element = {<Home/>}>
        </Route>
        <Route path='/empresa'
          element = {<Empresa/>}>
        </Route>
        <Route path='/contato'
          element = {<Contato/>}>
        </Route>
        <Route path='/aula'
          element = {<Aula/>}>
        </Route>
      </Routes>
        </>
    )
}