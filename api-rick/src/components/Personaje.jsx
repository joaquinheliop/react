import { useState } from "react"

const Personaje = ({ personaje, getPersonaje }) => {


    const { name, image, species } = personaje

    //estylo dinamico
    const [color, setColor] = useState('black')
    const [pointer, setpointer] = useState('default')
    const tituloStyle = {
        color: `${color}`,
        cursor: `${pointer}`
    }


    return (
        <div
            className="col-sm-6 col-md-4 mb-2"
            style={tituloStyle}
            onMouseEnter={() => { setColor('green'); setpointer('pointer') }}
            onMouseLeave={() => setColor('black')}
            onClick={() => getPersonaje(personaje, true)}>
            <div className="card" >
                <img src={image} className="card-img-top" />
                <div className="card-body text-center">
                    <h4>{name}</h4>
                    <p>{species}</p>
                </div>
            </div>
        </div>
    )
}
export default Personaje