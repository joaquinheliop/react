import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import Loading from "../components/Loading"

const Post = () => {

    //lo estoy recibiendo por la ruta mediante /:nombrevarialbe
    let params = useParams()
    const { id } = params

    const { data, error, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (loading) {
        return (<div className="d-flex w-100 mt-4 aling-items-center justify-content-center"><Loading /> </div>)
    }

    if (error !== '') {
        return <h2>{error}</h2>
    }

    return (
        <div className="container w-100">
            <div className="d-flex flex-row-reverse mt-4 mb-2">
                <Link to="/2" type="button" className="btn btn-outline-primary">  <h3>&larr; </h3> </Link>
            </div>
            <h1>{data.userId} - {data.title}</h1>
            <p>{data.body}</p>
        </div>
    )
}

export default Post
