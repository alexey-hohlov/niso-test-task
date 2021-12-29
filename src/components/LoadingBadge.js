
function LoadingBadge() {
    return (
        <div className="row justify-content-center text-center mt-4">
            <div className="col-8">
                <h3>Data is loading, please wait...</h3>
                <div className="spinner-border text-dark">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        </div>
    );
}

export default LoadingBadge;
