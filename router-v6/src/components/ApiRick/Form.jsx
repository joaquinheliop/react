import { useFormulario } from "../../hooks/useFormulario"
import Swal from 'sweetalert2'

const Form = ({ setBusqueda }) => {

    const initialState = {
        busqueda: ''
    }

    const [inputs, handleChange, reset] = useFormulario(initialState)

    const { busqueda } = inputs


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!busqueda.trim()) {

            return (Swal.fire({
                icon: 'error',
                title: 'Error! ',
                text: 'Complete el campo de busqueda',
            }))

        }

        setBusqueda(busqueda.trim().toLowerCase())

        reset()
    }

    const resetBusqueda = () => {
        setBusqueda(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    name="busqueda"
                    placeholder="Buscar..."
                    className="form-control"
                    value={busqueda}
                    onChange={handleChange} />

                <button
                    type="submit"
                    className="btn btn-primary ">
                    Buscar
                </button>
            </div>

        </form >

    )
}

export default Form
