import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function useApp() {
    const context = useContext(AppContext)
    if (!context) throw new Error('Context not found')
    return context
}

export function AppContextProvider({ children }) {

    const [user, setUser] = useState({})

  return (
    <AppContext.Provider value={{
        user,
        setUser
    }}>
        { children }
    </AppContext.Provider>
  )
}