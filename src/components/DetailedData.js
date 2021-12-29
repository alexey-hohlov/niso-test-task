import { useDispatch } from "react-redux";

function DetailedData({ details, setShown }) {
    const dispatch = useDispatch();

    return (
        <div className="card border-primary mb-3">
            <div className="card-header">Detailed info</div>
            <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">
                    {details.firstName} {details.lastName}
                </p>
                <h5 className="card-title">Contacts</h5>
                <p className="card-text">Email: {details.email}</p>
                <p className="card-text">Phone: {details.phone}</p>
                <h5 className="card-title">Address</h5>
                <p className="card-text">
                    {details.address.city}, {details.address.state}
                </p>
                <p className="card-text">
                    Street: {details.address.streetAddress}
                </p>
                <p className="card-text">Zip: {details.address.zip}</p>
                <h5 className="card-title">Description</h5>
                <p className="card-text">{details.description}</p>
            </div>
            <div className="card-footer d-flex flex-row-reverse">
                <button
                    className="btn btn-outline-primary"
                    onClick={() => {
                        dispatch(setShown(false));
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default DetailedData;
