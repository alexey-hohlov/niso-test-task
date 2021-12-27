import "./App.css";
import { InputForm } from "./components";

function App() {
    return (
        <div className="App">
            <button type="button" className="btn btn-success m-3 d-flex">
                Add new row
            </button>
            <table className="table me-3">
                <thead>
                    <tr className="table-primary">
                        <th scope="col">id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default App;
