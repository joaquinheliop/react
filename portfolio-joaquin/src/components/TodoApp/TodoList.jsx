import Formulario from "../TodoApp/Formulario"
import Tarea from "../TodoApp/Tarea"
import { useState } from "react"
import { useEffect } from "react"

const TodoList = () => {

    const [tareas, setTareas] = useState([])

    //Se ejecuta 1 sola vez cuando se renderiaza el componente
    useEffect(() => {
        if (localStorage.getItem('tareas')) {
            //con JSON.parse() transformo el JSON que se guarda en local Storage a un objeto JS
            setTareas(JSON.parse(localStorage.getItem('tareas')))
        }
    }, [])

    //Se ejecuta cada vez que hay un cambio en tareas en este caso esta guardando las tareas en el localStorage
    useEffect(() => {
        //con JSON.stringfy() transformo el objeto tareas a formato JSON para guardarlo en el local storage
        localStorage.setItem('tareas', JSON.stringify(tareas))
    }, [tareas])


    const agregarTarea = (tarea) => {
        setTareas((old) => [...old, tarea])

    }

    const eliminarTarea = (id) => {

        //filtro inversamente con .filter() devuelvo un array de id que no coinciden con el id que recibo
        setTareas(old => old.filter(item => item.id !== id))
    }

    const actualizarTarea = (id) => {
        //Busca en el array por el id y me devuelve el mismo array pero con el objeto del id con el estado cambiado
        const actualizarTareas = tareas.map(item => (
            item.id === id ? { ...item, estado: !item.estado } : item
        ))
        setTareas(actualizarTareas)
    }

    return (
        <>
            <div className="card text-center p-4 mb-3 mt-5">
                <h1>App ToDo</h1>
            </div>
            <div className="card mb-3 px-3 pb-3">
                <div className="card-body">
                    <Formulario agregarTarea={agregarTarea} />
                </div>
            </div>

            <div className="card p-3">
                <div className="card-body">
                    <h3 className="mb-4 ">LISTA</h3>
                    <ul className="list-group list-group-numbered">
                        {
                            tareas.map(item => (
                                <Tarea key={item.id} tarea={item} eliminarTarea={eliminarTarea} actualizarTarea={actualizarTarea} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TodoList
