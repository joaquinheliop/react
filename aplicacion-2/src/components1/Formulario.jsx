import { useState } from "react"

const Formulario = () => {

    /*usando el onchange en el form voy capturando los cambios en los inputs
    y con el set todo actualizo el objeto*/

    const [todo, setTodo] = useState({
        todoName: '',
        todoDescripcion: '',
        todoEstado: 'pendiente',
        todoCheck: false
    })


    const handleSubmit = e => e.preventDefault()


    const handleChange = e => {

        console.log(e.target.name) //muestra el nombre del input
        console.log(e.target.value) //muestra el contenido del input

        /*verico de que tipoes el input si es checkbox tengo que asignar la propiedad cheked si no es del tipo checkbox
        le asigno la propiedad value*/
        setTodo({ ...todo, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })
    }


    console.log(todo)

    return (
        <>
            <h1 className="mb-2">Formulario controlado</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="todoName"
                    placeholder="Ingrese Tarea"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.todoName}
                // onChange={e => setTodo({ ...todo, todoName: e.target.value })}
                />

                <textarea
                    name="todoDescripcion"
                    className="form-control mb-2"
                    placeholder="Ingrese Descripcion"
                    onChange={handleChange}
                    value={todo.todoDescripcion}
                />

                <select
                    name="todoEstado"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.todoEstado}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>

                <div className="form-check">
                    <input
                        name="todoCheck"
                        className="form-check-input"
                        id="flexCheckDefault"
                        type="checkbox"
                        onChange={handleChange}
                        checked={todo.Check}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Dar prioridad
                    </label>
                </div>

                <button className="btn btn-primary" type="submit">Agregar</button>

            </form>
        </>
    )

}

export default Formulario
