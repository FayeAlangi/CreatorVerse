const Creator = (props) => {
    return (
        <div className="creator">
                <h1>{props.name}</h1>
                <h2>{props.url}</h2>
                <h3>{props.description}</h3>
        </div>
    )
}
export default Creator