const Tarea = ({ tarea, eliminarTarea, actualizarTarea }) => {

    const { id, nombre, descripcion, estado, prioridad } = tarea

    return (
        <>


            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">
                        {nombre}
                    </div>
                    <p>
                        {descripcion}
                    </p>
                    <div>
                        <button className="btn btn-danger me-2" onClick={() => eliminarTarea(id)}>Eliminar</button>
                        <button className="btn btn-warning" onClick={() => actualizarTarea(id)}>Editar</button>
                    </div>
                </div>
                <span className="badge bg-primary rounded-pill">
                    {estado ? 'Finalizada' : 'Pendiente'}
                </span>
                <span className="badge bg-primary rounded-pill">
                    {prioridad && 'Prioritario'}
                </span>
            </li>
        </>
    )
}

export default Tarea
