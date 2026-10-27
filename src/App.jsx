import{BrowserRouter, Routes, Route} from 'react-router'
import Home from './pages/Home'
import Bmr from './pages/Bmr'
import Car from './pages/Car'
import Bmi from "./pages/Bmi"

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bmi' element={<Bmi/>}/>
        <Route path='/bmr' element={<Bmr/>}/>
        <Route path='/car' element={<Car/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}