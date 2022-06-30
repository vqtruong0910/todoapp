import { useState, useCallback, useContext, memo } from "react";
import { useParams } from "react-router-dom";
import { addTodoByIdFolder } from "../../store/actions";
import Context from "../../store/Context";
import DeleteElement from "../Other/DeleteElement";
import getDateCurrent from "../Other/getdate";
import StateOfComponent from "./StateOfComponent";

function AddTodo() {
    const { folderId } = useParams();
    const [inputNote, setInputNote] = useState("");
    const [inputDate, setInputDate] = useState(getDateCurrent());
    const [inputPriority, setInputPriority] = useState("2");
    const [inputTodo, setInputTodo] = useState([""]);
    const [stateComplete, setStateComplete] = useState(false);
    const [, dispatch] = useContext(Context);

    const handleChangeInput = useCallback((event) => {
        setInputNote(event.target.value);
    }, []);
    const handleChangeDate = useCallback((event) => {
        setInputDate(event.target.value);
    }, []);
    const handleChangePriority = useCallback((event) => {
        setInputPriority(event.target.value);
    }, []);
    const handleChangeCheckBox = useCallback((event) => {
        const id = event.target.value;
        if (event.target.checked === true) {
            setInputTodo([...inputTodo, id]);
        } else {
            let newTodo = DeleteElement(inputTodo, id);
            setInputTodo([...newTodo]);
        }
    }, [inputTodo]);
    const handleChangeComplete = useCallback(() => {
        setStateComplete(!stateComplete);
    }, [stateComplete]);
    const handleSubmitForm = useCallback((event) => {
        event.preventDefault();
        dispatch();
    }, []);

    return (
        <div className="App">
            <div className="container">
                <h1>Add Todo</h1>
                <div>
                    <form onSubmit={handleSubmitForm}>
                        <StateOfComponent
                            inputNote={inputNote}
                            inputDate={inputDate}
                            inputPriority={inputPriority}
                            inputTodo={inputTodo}
                            stateComplete={stateComplete}
                            handleChangeInput={handleChangeInput}
                            handleChangeDate={handleChangeDate}
                            handleChangePriority={handleChangePriority}
                            handleChangeCheckBox={handleChangeCheckBox}
                            handleChangeComplete={handleChangeComplete}
                        />
                        <button>Thêm</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default memo(AddTodo);