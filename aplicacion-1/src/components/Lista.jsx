import React from "react";
import { useState, Fragment } from "react";

const Lista = () => {

    const [lista, setlista] = useState([1, 2, 3, 4, 5]);

    const agregarElemento = () => {
        setlista(
            [...lista, lista.length + 1]
        )
    }


    return (
        <Fragment>
            <h2>Lista</h2>
            <button onClick={agregarElemento}>Agregar</button>
            {
                lista.map((item, index) =>
                    <div key={index}>{item} - {index}</div>
                )
            }
        </Fragment>
    );
}

export default Lista;