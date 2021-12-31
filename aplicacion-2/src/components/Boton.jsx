import { Fragment } from "react"

const Boton = (props) => {

    const funcionSaludo = () => {
        alert(props.mensaje)
    }



    return (
        <Fragment>
            <button
                className="btn btn-primary"
                onClick={funcionSaludo}

            >
                {props.mensaje}
            </button>

        </Fragment>
    )
}

export default Boton
