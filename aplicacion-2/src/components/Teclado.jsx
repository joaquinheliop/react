import { Fragment } from "react"
import { useState } from "react"
import Botones from "./Botones"
import Visor from "./Visor"

const Teclado = () => {

    const [dato, setdato] = useState(['0'])
    const [operacion, setoperacion] = useState("vacio")

    let var1 = 0
    let var2 = 0
    let solucion = 0
    let operando = ''

    let falag = 0

    const borrarDatos = () => {
        dato.length = 1
        setdato(dato[0] = "0")
        return
    }

    const recibirDato = (e) => {


        dato[0] === '0' && setdato(dato.shift())
        //funcionalidad tecla clear
        if (e === 'cl') {
            borrarDatos()
            return
        }

        if (e === '=') {
            dato.join()
            var2 = parseInt(dato, 10)


            if (operando === '+') {
                let solucion = var1 + var2
                setdato(dato = solucion)
                return
            }

            if (operando === '-') {
                let solucion = var1 - var2
                setdato(dato = solucion)
                return
            }

            if (operando === '/') {

                let solucion = var1 / var2
                setdato(dato = solucion)
                return
            }

            if (operando === 'x') {
                let solucion = var1 * var2
                setdato(dato = solucion)
                return
            }
        }

        if (e === '+' || e === '-' || e === '/' || e === 'x') {

            operando = e
            dato.join()
            var1 = parseInt(dato, 10)
            borrarDatos()
            return

        }
        //cantidad maxima de datos
        if (dato.length === 10) {
            return
        }
        setdato([...dato, e])




        console.log(dato);

    }

    const style = {

    }


    return (
        <Fragment>
            <Visor dato={dato} operacion={operacion} />


            <div className="card" >
                <div className="card-body" style={style}>
                    <div className="container ">
                        <div className="row">
                            <div className="col-sm-3">
                                <div class="d-grid gap-2">
                                    <Botones texto={"1"} clikeado={recibirDato} />
                                    <Botones texto={"4"} clikeado={recibirDato} />
                                    <Botones texto={"7"} clikeado={recibirDato} />
                                    <Botones texto={"0"} clikeado={recibirDato} />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="d-grid gap-2">
                                    <Botones texto={"2"} clikeado={recibirDato} />
                                    <Botones texto={"5"} clikeado={recibirDato} />
                                    <Botones texto={"8"} clikeado={recibirDato} />
                                    <Botones texto={"="} clikeado={recibirDato} />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="d-grid gap-2">
                                    <Botones texto={"3"} clikeado={recibirDato} />
                                    <Botones texto={"6"} clikeado={recibirDato} />
                                    <Botones texto={"9"} clikeado={recibirDato} />
                                    <Botones texto={"cl"} clikeado={recibirDato} />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div class="d-grid gap-2">
                                    <Botones texto={"+"} clikeado={recibirDato} />
                                    <Botones texto={"-"} clikeado={recibirDato} />
                                    <Botones texto={"x"} clikeado={recibirDato} />
                                    <Botones texto={"/"} clikeado={recibirDato} />
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
