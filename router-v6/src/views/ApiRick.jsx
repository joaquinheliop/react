import { useEffect, useState } from "react"
import Form from "../components/ApiRick/Form"
import Grilla from "../components/ApiRick/Grilla"

const App = () => {

    const [busqueda, setBusqueda] = useState('')

    return (
        <div className="container mt-5">
            <div class="clearfix"> </div>
            <div className="card text-center p-4 mb-3">
                <h1>Api Rick and Morty</h1>
            </div>
            <div className="card text-center p-4 mb-3">
                <Form setBusqueda={setBusqueda} />
            </div>
            <div className="card p-4 mb-3">
                <Grilla busqueda={busqueda} />
            </div>

        </div>
    )
}

export default App
