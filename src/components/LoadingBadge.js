import {loading} from "../assets/index";

function LoadingBadge() {
    return (
        <div className="row justify-content-center text-center mt-4">
            <div className="col-8">
                <h3>Data is loading, please wait...</h3>
                <img src={loading}></img>
            </div>
        </div>
    );
}

export default LoadingBadge;
