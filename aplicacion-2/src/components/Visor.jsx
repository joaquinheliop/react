import { Fragment } from "react"

const Visor = (props) => {

    const style = {
        textAlign: 'right',
        color: 'white'
    };


    return (
        <Fragment>

            <div className="card mb-2" >
                <div className="card-body">
                    <div className="container">
                        <div className="row">

                            <div className="col bg-primary mb-2" style={style} >
                                <h1>
                                    {props.dato}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Visor
