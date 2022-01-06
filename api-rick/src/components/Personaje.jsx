const Personaje = ({ personaje }) => {

    const { name, image, species } = personaje

    console.log(image)

    return (
        <div className="col-4 mb-2">
            <div className="card">
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