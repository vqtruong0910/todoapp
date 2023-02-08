import { memo, useCallback, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { completeTodo, deleteTodoFromFireStore } from "../../feature/crud";
import Context from "../../store/Context";
import sgvAdd from "../../sgv/sgvAdd";
import sgvEdit from "../../sgv/sgvEdit";
import sgvDelete from "../../sgv/sgvDelete";
import sgvBack from "../../sgv/sgvBack";
import LoadingData from "../LoadingData";

function ListTodo() {
    const [params] = useSearchParams();
    const [folder, , stateLoading] = useContext(Context);
    const folderId = params.getAll("todo");
    const navigate = useNavigate();
    const [stateSearch, setStateSearch] = useState("");
    const [stateListTodo, setStateListTodo] = useState([]);

    const handleChangeSearch = useCallback((event) => {
        setStateSearch(event.target.value);
    }, [])
    const handleChangeInput = useCallback((event) => {
        const result = [];
        folder?.[folderId]?.list.forEach((element, index) => {
            if (element.content.indexOf(event.target.value) !== -1) {
                result.push({ ...element, index })
            }
        });
        setStateListTodo(result);
    }, [folder])
    const handleDeleteTodo = useCallback((index) => {
        if (global.confirm("Are you sure you want to delete it?"))
            deleteTodoFromFireStore(folder[folderId].list, folder[folderId].id, index)
    }, [folder]);
    const handleComplete = useCallback((item) => {
        completeTodo(folder[folderId].id, item.index, folder[folderId].list, item.completed)
    }, [folder]);
    const backPage = useCallback(() => {
        navigate(-1);
    }, [])
    const convertPriority = useCallback((priority) => {
        if (priority === "1") return "High"
        else if (priority === "2") return "Normal"
        return "Low"
    }, [folder])

    useEffect(() => {
        setStateListTodo(folder?.[folderId]?.list.map((item, index) => {
            return {
                ...item,
                index
            }
        }))
        if (stateSearch !== "") {
            const result = [];
            folder?.[folderId]?.list.forEach((element, index) => {
                if (element.content.indexOf(stateSearch) !== -1) {
                    result.push({ ...element, index })
                }
            });
            setStateListTodo(result);
        }
    }, [folder])

    return (
        <div className="my-task">
            <div className="header">
                <div className="gradient">
                    <h1>My Tasks</h1>
                </div>
                <h3>{folder?.[folderId]?.name}</h3>
                <div className="search">
                    <div className="bar-search">
                        <input type="text" value={stateSearch} onChange={handleChangeInput} onInput={handleChangeSearch} placeholder="Search..." />
                    </div>
                </div>
            </div>
            <div className="content">
                {!stateLoading && <LoadingData />}
                <ul>
                    {stateListTodo?.map((item, index) => (
                        <li key={index}>
                            {!item.completed ?
                                <div className="bar-todo">
                                    <div className="todo-content">
                                        <div className="checkbox-todo">
                                            <label className="custom-checkbox">
                                                <input type="checkbox" checked={item.completed} onChange={() => { handleComplete(item) }} />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="task-content">
                                            <p>{item.content}<span>{convertPriority(item.priority)}</span></p>
                                            <p>{item.date}</p>
                                        </div>
                                    </div>
                                    <div className="update-todo">
                                        <div className="edit">
                                            <Link to={`/edit-todo/${folderId}/${index}`}>{sgvEdit}</Link>
                                        </div>
                                        <div className="delete">
                                            <a onClick={() => { handleDeleteTodo(item.index) }}>{sgvDelete}</a>
                                        </div>
                                    </div>
                                </div> :
                                <div className="bar-todo checked">
                                    <div className="todo-content">
                                        <div className="checkbox-todo">
                                            <label className="custom-checkbox">
                                                <input type="checkbox" checked={item.completed} onChange={() => { handleComplete(item) }} />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="task-content">
                                            <p>{item.content}<span>{convertPriority(item.priority)}</span></p>
                                            <p>{item.date}</p>
                                        </div>
                                    </div>
                                    <div className="update-todo">
                                        <div className="edit">
                                            <Link to={`/edit-todo/${folderId}/${index}`}>{sgvEdit}</Link>
                                        </div>
                                        <div className="delete">
                                            <a onClick={() => { handleDeleteTodo(item.index) }}>{sgvDelete}</a>
                                        </div>
                                    </div>
                                </div>
                            }

                        </li>
                    ))}
                </ul>
            </div>
            <div className="back" onClick={backPage}>{sgvBack}</div>
            <div className="add-todo">
                <Link to={`/add-todo/${folderId}`}>{sgvAdd}</Link>
            </div>
        </div >
    );
}

export default memo(ListTodo);