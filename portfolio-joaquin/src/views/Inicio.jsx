import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const Inicio = () => {

    const { user, iniciarSesion, cerrarSesion } = useContext(UserContext)

    return (
        <div>
            <h1>Inicio</h1>
            <h2>{user ? "Conectado" : "Desconectado"}</h2>
            {user ?
                (
                    <>
                        <button
                            className="btn btn-secondary me-2"
                            onClick={cerrarSesion}>
                            Cerrar Sesion
                        </button>
                        <Link to='/protegida' className="btn btn-warning">Ruta protegida</Link>
                    </>

                )
                :
                (<button
                    className="btn btn-primary"
                    onClick={iniciarSesion}>
                    Iniciar Sesion
                </button>)
            }
        </div>
    )
}

export default Inicio
