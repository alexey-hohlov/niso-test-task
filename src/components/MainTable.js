function MainTable({ data, handleDetails }) {
    return (
        <table className="table table-striped me-3">
            <thead>
                <tr className="table-primary">
                    <th scope="col">id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr
                        key={index}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            handleDetails(item);
                        }}
                    >
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MainTable;
