import './App.css'
import AppRouter from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import { AuthProvide } from './context/AuthContext'
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvide>
          <AppRouter />
        </AuthProvide>
      </BrowserRouter>
    </>
  )
}

export default App
