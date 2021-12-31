import { Fragment } from "react"

const Frutas = (props) => {
    //const frutas = ["manzana", "frutilla", "banana"]

    return (
        <Fragment>
            <ul>
                {
                    props.frutas.map((item, index) => (
                        <li key={index}> {index + 1} - {item}</li>
                    ))
                }
            </ul>
        </Fragment>
    )
}

export default Frutas
