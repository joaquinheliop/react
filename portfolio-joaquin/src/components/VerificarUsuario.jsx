import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const VerificarUsuario = ({ children }) => {

    const { user } = useContext(UserContext)

    if (!user) {
        return <Navigate to='/inicio' /> // empuja al usuarioa a una ruta que yo quiera
    }

    return children
}

export default VerificarUsuario
