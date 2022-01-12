import { useState } from "react"

const Paginacion = ({ numPersonajes, numPagina, numPaginas, pagAnterior, pagSiguiente }) => {

    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item" onClick={() => pagAnterior()}>
                        <a className="page-link" role='button' aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {
                        numPersonajes.map((i, index) => {
                            for (index; index < numPaginas(); index++) {
                                return <li className="page-item" role='button' key={index} onClick={() => numPagina(index + 1)}>
                                    <a
                                        className="page-link"
                                    >
                                        {index + 1}
                                    </a>
                                </li>
                            }
                        }
                        )
                    }
                    <li className="page-item" onClick={() => pagSiguiente()}>
                        <a className="page-link" role='button' aria-label="Next">
                            <span aria-hidden="true" >&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Paginacion
