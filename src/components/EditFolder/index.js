import { useCallback, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Context from "../../store/Context";
import { useForm } from "react-hook-form";
import { updateFolderFromFireStore } from "../../feature/crud";
import sgvBack from "../../sgv/sgvBack";

function EditFolder() {
    const { folderId } = useParams();
    const [folder, dispatch] = useContext(Context);
    const navigate = useNavigate();
    const { register, handleSubmit, setFocus, formState: { errors } } = useForm({
        mode: "onBlur",
        defaultValues: {
            name: folder[folderId]?.name
        }
    });

    const handleSubmitEdit = useCallback((data) => {
        // dispatch(editFolder(folderId, data.name));
        if (window.confirm("Please confirm you want to change ?")) {
            updateFolderFromFireStore(folder[folderId].id, data.name)
            navigate("/");
        }
    }, [])

    const backPage = useCallback(() => {
        navigate(-1);
    }, [])

    useEffect(() => {
        setFocus('name')
    }, [])

    return (
        <div className="edit-folder">
            <div className="gradient">
                <h1>Edit Folder</h1>
            </div>
            <h3>Name Folder</h3>
            <form onSubmit={handleSubmit(handleSubmitEdit)}>
                <div className="wrapper-edit">
                    <div className="edit">
                        <input type="text" {...register("name", {
                            required: "Please enter before pressing submit",
                            pattern: {
                                value: /^([^!@#$&%^()-_=+<>?;:'"{[}]\|.,`~*]|[a-zA-Z0-9 ])+$/,
                                message: "Please enter before pressing submit"
                            }
                        })} />
                    </div>
                    {errors.name?.type === 'required' && <p>{errors.name.message}</p>}
                    {errors.name?.type === 'pattern' && <p>{errors.name.message}</p>}
                </div>
                <button>Save</button>
            </form>
            <div className="back" onClick={backPage}>{sgvBack}</div>
        </div>
    );
}

export default EditFolder;