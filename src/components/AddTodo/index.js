import { useCallback, useContext, memo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Context from "../../store/Context";
import getDateCurrent from "../Other/getdate";
import StateOfComponent from "./StateOfComponent";
import { addTodoFromFireStore } from "../../feature/crud";

function AddTodo() {
	const { folderId } = useParams();
	const navigate = useNavigate();
	const [folder, dispatch] = useContext(Context);
	const { register, handleSubmit, formState: { errors } } = useForm({
		mode: "onBlur", defaultValues: {
			date: getDateCurrent()
		}
	});
	const handleSubmitForm = useCallback((data) => {
		// dispatch(addTodoInFolder(folderId, data.note, data.date, data.priority, data.todo, data.complete));
		if (window.confirm("Please confirm you want to add ?")) {
			addTodoFromFireStore(folder[folderId].id, data.note, data.date, data.priority, data.todo, data.complete);
			navigate(-1)
		}
	}, []);

	return (
		<div className="add-update-page">
			<div className="gradient">
				<h1>Add Todo</h1>
			</div>
			<div className="content">
				<form onSubmit={handleSubmit(handleSubmitForm)}>
					<StateOfComponent
						register={register}
						errors={errors}
					/>
					<button>Thêm</button>
				</form>
			</div>
		</div>
	);
}

export default memo(AddTodo);