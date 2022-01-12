import { Fragment } from "react"
import Campos from "./components/Campos"
import MyComponent from "./components/Figma"


const App = () => {


    return (
        <Fragment>
            <div className="container">
                <Campos />
                <MyComponent />
            </div>
        </Fragment>
    )
}

export default App
