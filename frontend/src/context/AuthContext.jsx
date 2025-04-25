import { createContext, useState } from 'react'
const AuthContext = createContext()

export function AuthProvide({ children }) {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState('')
  const contextData = {
    isAuth,
    user,
    setIsAuth,
    setUser,
  }
  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
}

export default AuthContext
