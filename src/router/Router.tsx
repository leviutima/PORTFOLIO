
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../router/Router.css'
import Home from '../pages/Home/Home'
import Header from '../components/Header/Header'
import Projetos from '../pages/Projects/Projects'
import Footer from '../components/Footer/Footer'
import Sobre from '../pages/Sobre/Sobre'
import Movelt from '../pages/ProjetosPages/MOVELT/MOVELT'
import Oceania from '../pages/ProjetosPages/Oceania/Oceania'

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Projetos' element={<Projetos/>}/>
          <Route path='/Sobre' element={<Sobre/>}/>
          <Route path='/MOVELT' element={<Movelt/>}/>
          <Route path='/Oceânia' element={<Oceania/>}/>
          <Route path='*'/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
