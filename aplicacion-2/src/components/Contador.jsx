import { Fragment } from "react"
import { useState } from "react"

const Contador = () => {

    const [contador, setContador] = useState(0)


    //Funcion para aumentar el contador
    const aumentar = () => {
        setContador(contador + 1)
    }

    const disminuir = () => {
        setContador(contador - 1)
    }




    return (
        <Fragment>
            <h1>CONTADOR</h1>
            <h2>{contador}</h2>
            <button className="btn btn-dark"
                onClick={aumentar}
            >
                Aumentar</button>

            <button className="btn btn-dark"
                onClick={disminuir}
            >
                Disminuir</button>

        </Fragment>
    )
}

export default Contador
