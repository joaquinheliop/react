import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'
import { useFormulario } from "../../hooks/useFormulario"


//
const Formulario = ({ agregarTarea }) => {

    //estado inicial de todo
    const initialState = {
        nombre: '',
        descripcion: '',
        estado: 'pendiente',
        prioridad: false
    }

    //Mi handle change ya es un hook que yo cree
    const [inputs, handleChange, reset] = useFormulario(initialState)

    //Destructuracion de inputs para escribir los nombres de la variables sin hacer inputs.nombre
    const { nombre, descripcion, estado, prioridad } = inputs


    const handleSubmit = (e) => {
        e.preventDefault()

        //pop-up nombre
        if (!nombre.trim()) {
            e.target[0].focus()
            Swal.fire({
                customClass: {
                    confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
                icon: 'error',
                title: '¡Error!',
                text: 'No dejar el nombre en blanco'
            })
            return
        }

        //pop-up descripcion
        if (!descripcion.trim()) {
            e.target[1].focus()
            Swal.fire({
                customClass: {
                    confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
                icon: 'error',
                title: '¡Error!',
                text: 'No dejar la descripcion en blanco'
            })
            return
        }

        //pop-up exito
        Swal.fire({
            customClass: {
                confirmButton: 'btn btn-primary',
            },
            buttonsStyling: false,
            icon: 'success',
            title: '¡Exito!',
            text: 'Tarea Agregada'
        })

        /* agregarTarea() Es un funcion que esta escrita en el componente padre y que recibe como parametro un objeto.
        El objeto que yo le mando es basicamente "todo". Pero como quiero mantarle estado como true o false hago lo siguiente*/

        agregarTarea(
            //todo
            {
                nombre: nombre,
                descripcion: descripcion,
                estado: estado === 'pendiente' ? false : true,
                prioridad: prioridad,
                //id: Date.now() //es una forma de generar un id unico hay librerias para hacerlo esto es provisorio
                id: uuidv4()
            }
        )

        reset()

        return

    }


    return (
        <>


            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-2"
                    name="nombre"
                    value={nombre}
                    placeholder="Nombre de la Tarea"
                    onChange={handleChange}
                />

                <textarea
                    name="descripcion"
                    value={descripcion}
                    className="form-control mb-2"
                    placeholder="Descripcion"
                    onChange={handleChange}
                />

                <select
                    name="estado"
                    value={estado}
                    onChange={handleChange}
                    className="form-control mb-3"
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>


                <div className="form-check mb-3 ">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="prioridad"
                        onChange={handleChange}
                        checked={prioridad}
                        id="flexCheckDefault" />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault">
                        Dar prioridad
                    </label>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    AGREGAR
                </button>

            </form>
        </>
    )
}

export default Formulario
