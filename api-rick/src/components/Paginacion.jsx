import { useState } from "react"

const Paginacion = ({ numPersonajes, numPagina, pagAnterior, pagSiguiente }) => {

    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true" onClick={() => pagAnterior()}>&laquo;</span>
                        </a>
                    </li>
                    {
                        numPersonajes.map((i, index) => {
                            for (index; index < numPersonajes.length / 6; index++) {
                                return <li className="page-item" key={index} href=''>
                                    <a
                                        className="page-link"
                                        onClick={() => numPagina(index + 1)}>

                                        {index + 1}
                                    </a>
                                </li>
                            }
                        }
                        )
                    }
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true" onClick={() => pagSiguiente()}>&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Paginacion
