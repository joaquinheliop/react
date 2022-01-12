import { useState } from "react"

const Personaje = ({ personaje, getPersonaje }) => {


    const { name, image, species } = personaje

    //estylo dinamico
    const [color, setColor] = useState('black')
    const [pointer, setpointer] = useState('default')
    const [scale, setScale] = useState('')
    const tituloStyle = {
        color: `${color}`,
        cursor: `${pointer}`,
        transform: `${scale}`
    }


    return (
        <div
            className="col-sm-6 col-md-4 mb-2"
            style={tituloStyle}
            onMouseEnter={() => { setColor('#0D6EFD'); setpointer('pointer'); setScale('scale(1.02, 1.02)') }}
            onMouseLeave={() => { setColor('black'); setScale('') }}
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