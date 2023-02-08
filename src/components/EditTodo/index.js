import { useCallback, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Context from "../../store/Context";
import StateOfComponent from "../AddTodo/StateOfComponent";
import { useForm } from "react-hook-form";
import { updateTodoFromFireStore } from "../../feature/crud";

function EditTodo() {
    const { folderId, todoId } = useParams();
    const [folder] = useContext(Context);
    const editTodo = folder?.[folderId]?.list[todoId];
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur", defaultValues: {
            note: editTodo?.content,
            date: editTodo?.date,
            priority: editTodo?.priority,
            todo: editTodo?.todo,
            complete: editTodo?.completed
        }
    });
    const handleSubmitForm = useCallback((data) => {
        // dispatch(editNoteInFolder(folderId, todoId, data.note, data.date, data.priority, data.todo, data.complete));
        if (window.confirm("Please confirm you want to change ?")) {
            updateTodoFromFireStore(folder[folderId].id, todoId, folder[folderId].list, data.note, data.date, data.priority, data.todo, data.complete)
            navigate(-1);
        }
    }, []);

    return (
        <div className="add-update-page">
            <div className="gradient">
                <h1>Edit Note</h1>
            </div>
            <div className="content">
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <StateOfComponent
                        register={register}
                        errors={errors}
                    />
                    <button>Lưu</button>
                </form>
            </div>
        </div>
    );
}

export default EditTodo;