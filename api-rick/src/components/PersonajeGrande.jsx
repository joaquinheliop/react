import { useState } from "react"

const PersonajeGrande = ({ personaje, cerrarDetalle }) => {


    const { name, image, species } = personaje

    return (
        <>
            <div className="row aling-items-center">
                <div className="col-3"></div>
                <div
                    className="col-sm-12 col-md-6 mb-2 ">
                    <div className="card" >
                        <button type="button" className="btn-close" aria-label="Close" onClick={cerrarDetalle}></button>
                        <img src={image} className="card-img-top" />
                        <div className="card-body text-center">
                            <h4>{name}</h4>
                            <p>{species}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default PersonajeGrande