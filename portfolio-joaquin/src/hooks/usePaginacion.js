import { useState } from "react"

export const usePaginacion = (elementos, elementosPorPagina) => {

    const [pagina, setPagina] = useState(1)

    let numPaginas
    let aux = (elementos.length / elementosPorPagina - Math.round(elementos.length / elementosPorPagina))

    if (aux < 0.5 && aux > 0) {

        numPaginas = Math.round(elementos.length / elementosPorPagina) + 1

    } else {

        numPaginas = Math.round(elementos.length / elementosPorPagina)
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


    return [pagina, numPaginas, visitarPagina, visitarPaginaAnterior, visitarPaginaSiguiente, elementosPorPagina]
}
