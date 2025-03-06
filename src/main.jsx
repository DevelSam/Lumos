// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({defaultOptions:{
  queries:{
    staleTime:1000 * 60  * 60 * 60,
    cacheTime:1000 * 60 * 60 * 60,
    refetchOnWindowFocus:false,
  }
}})

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  // {/* </StrictMode>, */}
)
