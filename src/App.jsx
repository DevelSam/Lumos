
import './App.css'
import ActorPage from './pages/ActorPage';
import CollectionsPage from './pages/CollectionsPage';
import MainPage from './pages/MainPage'
import MoviePage from './pages/MoviePage';
import { BrowserRouter, Routes, Route,} from "react-router-dom";

 

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/film/:id' element={<MoviePage />}/>
      <Route path='/actor/:id' element={<ActorPage />} />
      <Route path='/movies/:list' element={<CollectionsPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
