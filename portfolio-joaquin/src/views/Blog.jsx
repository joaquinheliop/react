import { useFetch } from "../hooks/useFetch"
import Loading from '../components/Loading'
import { Link, useSearchParams } from "react-router-dom"
import { useEffect } from "react"

const Blog = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')

    // le los datos qeu van cambiando en el input y los pasa por la url mediante una vartialbe llamada filtro
    const handleChange = (e) => {
        let filter = e.target.value
        if (filter) {
            setSearchParams({ filter })
        } else {
            setSearchParams({})
        }
    }

    /* if (loading) {
        return <Loading />
    } */

    if (error !== '') {
        return <h2>{error}</h2>
    }

    return (
        <div>
            <div className="card text-center p-4 mb-3 ">
                <h1>Blog</h1>
            </div>

            <div className="card text-center p-4 mb-3">
                <input
                    type="text"
                    value={searchParams.get('filter') || ""}
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Buscar..." />

            </div>

            <div className="card mb-3 px-3 py-3">
                <div className="card-body">
                    {
                        loading && <Loading />
                    }
                    {

                        //recorre el array y crea uno nuevo con los elementos que cumplen la condicion
                        data.filter((item) => {
                            let filter = searchParams.get('filter')
                            if (!filter) return true //devuelve todos los datos cuando el input esta vacio

                            let title = item.title.toLowerCase()
                            return title.startsWith(filter)//devuelve datos que empiecen con lo que yo busco
                        })
                            .map((item) => {
                                const { userId, id, title } = item
                                return (
                                    <Link key={id} to={`/2/${id}`}>
                                        <h3 >{id} - {title}</h3>
                                    </Link>
                                )
                            })
                    }

                </div>
            </div>

        </div>
    )
}

export default Blog
