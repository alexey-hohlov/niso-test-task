function Buttons({ handleBigData, handleSmallData }) {
    return (
        <div className="m-3">
            <button type="button" className="btn btn-success m-2" disabled>
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
                disabled
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