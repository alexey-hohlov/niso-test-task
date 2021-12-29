function Buttons({ handleBigData, handleSmallData, handleForm }) {
    return (
        <div className="m-3">
            <button
                type="button"
                className="btn btn-success m-2"
                onClick={() => {
                    handleForm();
                }}
            >
                Add new row
            </button>
            <button
                type="button"
                className="btn btn-warning m-2"
                onClick={() => {
                    handleSmallData();
                }}
            >
                Get small data
            </button>
            <button
                type="button"
                className="btn btn-danger m-2"
                onClick={() => {
                    handleBigData();
                }}
            >
                Get big data
            </button>
        </div>
    );
}

export default Buttons;
