import { Fragment } from "react"

const Botones = (props) => {

    const { clikeado } = props

    return (
        <Fragment>
            <button className="btn btn-primary "
                onClick={() => clikeado(props.texto)}
            >{props.texto}
            </button>
        </Fragment>
    )
}

export default Botones
