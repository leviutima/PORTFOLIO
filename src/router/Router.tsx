
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../router/Router.css'
import Home from '../pages/Home/Home'
import Header from '../components/Header/Header'

function App() {
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
