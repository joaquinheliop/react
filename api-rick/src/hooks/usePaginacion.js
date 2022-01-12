import { useState } from "react"

export const usePaginacion = (elementos, elementosPorPagina) => {

    const [pagina, setPagina] = useState(1)

    const numPaginas = () => {
        if ((elementos.length / elementosPorPagina - Math.round(elementos.length / elementosPorPagina)) < 0.5) {

            return Math.round(personajes.length / elementosPorPagina) + 1
        }
        return Math.round(personajes.length / elementosPorPagina)
    }

    const visitarPagina = (num) => {
        setPagina(num)
    }

    const visitarPaginaAnterior = () => {
        if (pagina <= 1) {
            return
        }
        setPagina(pagina - 1)
    }
    const visitarPaginaSiguiente = () => {
        if (pagina >= numPaginas) {
            return
        }
        setPagina(pagina + 1)
    }


    return [numPaginas, visitarPagina, visitarPaginaAnterior, visitarPaginaSiguiente]
}
