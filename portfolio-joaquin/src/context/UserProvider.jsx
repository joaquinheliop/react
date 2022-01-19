import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(false)

    const iniciarSesion = () => setUser(true)

    const cerrarSesion = () => setUser(false)


    return (
        <UserContext.Provider value={{ user, iniciarSesion, cerrarSesion }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
