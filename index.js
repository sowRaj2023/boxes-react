const Boxes = (props) => {
    const { className, message } = props
    return (
        <div className={`box ${className}`}>
            <p>{message}</p>

        </div>
    )


}


const element = (
    <div className="bg-container">
        <h1>Boxes</h1>
        <div className="boxes-container">
            <Boxes
                className="small-box"
                message="Small"
            />
            <Boxes
                className="medium-box"
                message="Medium"
            />
            <Boxes
                className="large-box"
                message="Large"
            />

        </div>

    </div>
)
ReactDOM.render(element, document.getElementById("root"));