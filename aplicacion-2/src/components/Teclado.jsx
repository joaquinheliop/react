import { Fragment } from "react"
import { useState } from "react"
import Botones from "./Botones"
import Visor from "./Visor"

const Teclado = () => {

    const [dato, setdato] = useState(0)

    const recibirDato = (dato) => {
        let acum = dato
        setdato(acum)
    }

    const style = {

    }


    return (
        <Fragment>
            <Visor dato={dato} />

            <div className="card" >
                <div className="card-body" style={style}>
                    <div className="container ">
                        <div className="row">
                            <div className="col-sm-3">
                                <div class="d-grid gap-2">
                                    <Botones texto={"1"} clikeado={(dato) => recibirDato(dato)} />
                                    <Botones texto={"4"} clikeado={(dato) => recibirDato(dato)} />
                                    <Botones texto={"7"} clikeado={(dato) => recibirDato(dato)} />
                                    <Botones texto={"0"} clikeado={(dato) => recibirDato(dato)} />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="d-grid gap-2">
                                    <Botones texto={"2"} clikeado={(dato) => recibirDato(dato)} />
                                    <Botones texto={"5"} clikeado={(dato) => recibirDato(dato)} />
                                    <Botones texto={"8"} clikeado={(dato) => recibirDato(dato)} />
                                    <Botones texto={"="} clikeado={(dato) => recibirDato(dato)} />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="d-grid gap-2">
                                    <Botones texto={"3"} clikeado={(dato) => recibirDato(dato)} />
                                    <Botones texto={"6"} clikeado={(dato) => recibirDato(dato)} />
                                    <Botones texto={"9"} clikeado={(dato) => recibirDato(dato)} />
                                    <Botones texto={"cl"} clikeado={(dato) => recibirDato(dato)} />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="d-grid gap-2">
                                    <Botones texto={"+"} clikeado={(dato) => recibirDato(dato)} />
                                    <Botones texto={"-"} clikeado={(dato) => recibirDato(dato)} />
                                    <Botones texto={"x"} clikeado={(dato) => recibirDato(dato)} />
                                    <Botones texto={"/"} clikeado={(dato) => recibirDato(dato)} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </Fragment >
    )
}

export default Teclado
