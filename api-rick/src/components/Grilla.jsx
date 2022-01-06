import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "./Loading";
import Personaje from "./Personaje";

const Grilla = ({ busqueda }) => {

    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading] = useState(false)


    //use efect para prestarle atencion a la busqueda
    useEffect(() => {
        consumirApi(busqueda)
    }, [busqueda])


    //Aca consumo datos de la api
    const consumirApi = async (busqueda) => {
        //activo el espiner cuando arrranca la solicitud de datos de la api
        setLoading(true)
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
            console.log(datos.results)
            setPersonajes(datos.results)

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className="row">
            {
                personajes.map(item => (
                    <Personaje key={item.id} personaje={item} />
                ))
            }
        </div>
    )
}

export default Grilla
