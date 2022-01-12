import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "../Loading";
import Paginacion from "../ApiRick/Paginacion";
import Personaje from "../ApiRick/Personaje";
import PersonajeGrande from "../ApiRick/PersonajeGrande";

const Grilla = ({ busqueda }) => {

    const [personajes, setPersonajes] = useState([])

    const [loading, setLoading] = useState(false)

    const [personaje, setPersonaje] = useState({})

    const [detalle, setDetalle] = useState(false)

    const [paginacion, setPaginacion] = useState(1)

    const numPaginas = () => {
        if ((personajes.length / 6 - Math.round(personajes.length / 6)) <= 0.5) {

            return Math.round(personajes.length / 6) + 1

        } else {
            return Math.round(personajes.length / 6)
        }
    }


    //use efect para prestarle atencion a la busqueda
    useEffect(() => {
        consumirApi(busqueda)
        setPaginacion(1)
    }, [busqueda])


    //Aca consumo datos de la api
    const consumirApi = async (busqueda) => {

        //activo el espiner cuando arrranca la solicitud de datos de la api
        setLoading(true)
        setDetalle(false)

        try {
            const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
            console.log(respuesta);

            if (!respuesta.ok) {
                return (Swal.fire({
                    icon: 'error',
                    title: 'Error! ',
                    text: 'No existe ese personaje',
                }))
            }

            const datos = await respuesta.json()
            console.log(datos.results)
            setPersonajes(datos.results)

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const getPersonaje = (datos, estado) => {
        setPersonaje(datos)
        setDetalle(estado)
    }

    //Se llama desde el elemento personajegrande
    const cerrarDetalle = () => {
        setDetalle(false)
    }

    //Se llama desde el elemento paginacion
    const numPagina = (e) => {
        setPaginacion(e)
    }

    const pagAnterior = () => {
        if (paginacion <= 1) {
            return
        }
        setPaginacion(paginacion - 1)
    }
    const pagSiguiente = () => {
        if (paginacion >= personajes.length / 6) {
            return
        }
        setPaginacion(paginacion + 1)
    }

    if (loading) {
        return <Loading />
    }

    if (detalle) {
        return <PersonajeGrande personaje={personaje} cerrarDetalle={cerrarDetalle} />
    }

    return (
        <>
            <div className="row">
                <Paginacion numPersonajes={personajes} numPagina={numPagina} numPaginas={numPaginas} pagAnterior={pagAnterior} pagSiguiente={pagSiguiente} />
            </div>
            <div className="row justify-content-center mb-4">
                Pagina {paginacion} de {numPaginas()}
            </div>
            <div className="row">
                {
                    personajes.map((item, index) => {
                        let inicial = (paginacion - 1) * 6

                        if (inicial <= index && index < paginacion * 6) {
                            return <Personaje key={item.id} personaje={item} getPersonaje={getPersonaje} />
                        }

                    }
                    )
                }
            </div>
        </>
    )
}

export default Grilla
