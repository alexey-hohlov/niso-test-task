import "./style.css";
import ReactDOM from "react-dom";

//Custom styles to adapt bootstrap modal
const contentStyles = {
    width: "700px",
};

//creating portal to place modal over other components in DOM
function InputForm() {
    return ReactDOM.createPortal(
        <div className="modal__overlay">
            <div className="modal-content" style={contentStyles}>
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">Footer</div>
            </div>
        </div>,

        document.querySelector("#root")
    );
}

export default InputForm;
