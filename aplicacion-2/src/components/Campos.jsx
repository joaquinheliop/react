import React, { useState } from 'react'

const Campos = () => {

    const initialState = {
        nombreCampo: '',
        nombreDuenio: ''
    }

    const [campo, setCampo] = useState('initialState')
    const [duenio, setDuenio] = useState([])

    const handleChange = (e) => {
        const { value, name, checked, type } = e.target

        setCampo((old) => ({
            ...old, [name]: value


        }))
        console.log(campo);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setDuenio([...duenio, campo.nombreDuenio])
        console.log(duenio);
    }


    return (
        <div className='container'>
            <div className="card mb-4 flex: 1 1 auto">
                <div className="card-container mb-4 ">
                    <h1 className="text-center">Agregar Campos</h1>

                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <div className="card" >
                        <div className="card-body">
                            <h2 className='text-center mb-2'>Nombre Establecimiento</h2>
                            <form >
                                <input
                                    type="text"
                                    name="nombreCampo"
                                    className='form-control'
                                    value={campo.nombreCampo}
                                    onChange={handleChange} />
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="card">
                        <div className="row">
                            <div className="card-body">
                                <h2 className='text-center mb-2'>Dueño/CUIG</h2>
                                <form className='row' onSubmit={handleSubmit} >
                                    <div className="col-9">
                                        <input
                                            type="text"
                                            name="nombreDuenio"
                                            className='form-control'
                                            value={campo.nombreDuenio}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-primary" type='submit'>Agregar</button>
                                    </div>

                                </form>
                                <div className="row">

                                    {duenio.map((item) => (

                                        <div className="card mt-3 me-3 col-3">
                                            <h5 className='block'>{item}</h5>
                                            <button type="button" className="btn-close" aria-label="Close"></button>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Campos
