import './App.css'
import AppRouter from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import { AuthProvide } from './context/AuthContext'
function App() {
  return (
    <>
      <AuthProvide>
        <BrowserRouter>
          <ScrollToTop />
          <AppRouter />
        </BrowserRouter>
      </AuthProvide>
    </>
  )
}

export default App
