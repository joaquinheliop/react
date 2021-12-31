/*Este es un formulario con todo lo basico de java escript con vlaidaciones a pata
sirve para cuando no queremos usar una libreria*/

import { useRef } from "react"

const FormNoControlado = () => {

    const formulario = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const datos = new FormData(formulario.current)


        const objetoDatos = Object.fromEntries([...datos.entries()])

        console.log(objetoDatos)

        var { todoName, todoDescripcion, todoEstado } = objetoDatos //destructuracion de los datos

        //validaciones de datos antes de enviar al back
        if (!todoDescripcion.trim()) {
            console.log("no esta completo")
            return
        }

    }

    return (
        <>
            <h1 className="mb-2">Formulario no controlado</h1>
            <form ref={formulario} onSubmit={handleSubmit}>
                <input
                    name="todoName"
                    placeholder="Ingrese Tarea"
                    type="text"
                    className="form-control mb-2"
                />

                <textarea
                    name="todoDescripcion"
                    className="form-control mb-2"
                    placeholder="Ingrese Descripcion"
                />

                <select name="todoEstado" className="form-control mb-2">
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>

                <button className="btn btn-primary">Agregar</button>

            </form>
        </>
    )
}

export default FormNoControlado
