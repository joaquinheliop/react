import { useState } from "react"

/*Hook para todos los formularios y no tener que usar el handleChange siempre
no funciona para los inputs tipo file*/

export const useFormulario = (initialState = {}) => {

    const [inputs, setInputs] = useState(initialState)

    const handleChange = (e) => {
        const { value, name, checked, type } = e.target

        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    const reset = () => {
        setInputs(initialState)
    }

    return [inputs, handleChange, reset]
}
