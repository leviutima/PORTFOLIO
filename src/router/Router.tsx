
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../router/Router.css'
import Home from '../pages/Home/Home'
import Header from '../components/Header/Header'
import Projetos from '../pages/Projects/Projects'
import Contato from '../pages/Contact/Contact'

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Projetos' element={<Projetos/>}/>
          <Route path='/Contato' element={<Contato/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
