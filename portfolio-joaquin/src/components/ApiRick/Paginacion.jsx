import { useState } from "react"

const Paginacion = ({ numPaginas, visitarPagina, visitarPaginaAnterior, visitarPaginaSiguiente }) => {

    const elementos = []

    for (let index = 0; index < numPaginas; index++) {
        elementos[index] =
            <li className="page-item" key={index}>
                <a
                    className="page-link"
                    onClick={() => visitarPagina(index + 1)}>
                    {index + 1}
                </a>
            </li>
    }

    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item" onClick={() => visitarPaginaAnterior()} role='button'>
                        <a className="page-link" aria-label="Previous">
                            <span aria-hidden="true" >&laquo;</span>
                        </a>
                    </li>
                    {
                        elementos.map(item => item)
                    }
                    <li className="page-item" onClick={() => visitarPaginaSiguiente()} role='button'>
                        <a className="page-link" aria-label="Next">
                            <span aria-hidden="true" >&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Paginacion
