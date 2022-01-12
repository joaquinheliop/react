import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { usePaginacion } from "../hooks/usePaginacion";
import Loading from "./Loading";
import Paginacion from "./Paginacion";
import Personaje from "./Personaje";
import PersonajeGrande from "./PersonajeGrande";

const Grilla = ({ busqueda }) => {

    const [personajes, setPersonajes] = useState([])

    const [loading, setLoading] = useState(false)

    const [personaje, setPersonaje] = useState({})

    const [detalle, setDetalle] = useState(false)

    const [pagina, numPaginas, visitarPagina, visitarPaginaAnterior, visitarPaginaSiguiente, elementosPorPagina] = usePaginacion(personajes, 6)


    //use efect para prestarle atencion a la busqueda
    useEffect(() => {
        consumirApi(busqueda)
        visitarPagina(1)
    }, [busqueda])


    //Aca consumo datos de la api
    const consumirApi = async (busqueda) => {

        //activo el espiner cuando arrranca la solicitud de datos de la api
        setLoading(true)
        setDetalle(false)

        try {
            const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)

            if (!respuesta.ok) {
                return (Swal.fire({
                    icon: 'error',
                    title: 'Error! ',
                    text: 'No existe ese personaje',
                }))
            }

            const datos = await respuesta.json()
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


    if (loading) {
        return <Loading />
    }

    if (detalle) {
        return <PersonajeGrande personaje={personaje} cerrarDetalle={cerrarDetalle} />
    }

    return (
        <>
            <div className="row">
                <Paginacion
                    numPaginas={numPaginas}
                    visitarPagina={visitarPagina}
                    visitarPaginaAnterior={visitarPaginaAnterior}
                    visitarPaginaSiguiente={visitarPaginaSiguiente} />
            </div>
            <div className="row justify-content-center mb-4">
                Pagina {pagina} de {numPaginas}
            </div>
            <div className="row">
                {
                    personajes.map((item, index) => {
                        let inicial = (pagina - 1) * elementosPorPagina

                        if (inicial <= index && index < pagina * elementosPorPagina) {
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
