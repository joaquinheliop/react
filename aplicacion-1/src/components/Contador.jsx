import React from "react";
import { useState, Fragment } from "react";

const Contador = () => {

    const [numero, setnumero] = useState(0);

    const aumentar = () => {
        setnumero(numero + 1)
    }

    return (
        <Fragment>

            <h3>Mi primer numero {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    );
}

export default Contador;