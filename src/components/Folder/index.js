import { useCallback, memo, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Context from "../../store/Context";
import FolderItem from "../FolderItem";
import { addFolderFromFireStore, deleteFolderFromFireStore } from "../../feature/crud";
import { Link, useNavigate } from "react-router-dom";
import LoadingData from "../LoadingData";

function Folder() {
    const [folder, dispatch, stateLoading] = useContext(Context);
    const [state, setState] = useState(false);
    const { register, handleSubmit, setValue, setFocus, formState: { errors } } = useForm({ mode: "onBlur" });
    const navigate = useNavigate();

    const handleChangeInput = useCallback((data) => {
        // dispatch(addFolder(data.inputfolder));
        addFolderFromFireStore(data.inputfolder)
        setValue('inputfolder', '', { shouldDirty: true });
        setFocus('inputfolder');
    }, []);
    // const handleReLoad = () => {
    //     getDataFromFireStore(dispatch);
    // }
    const handleClickEditFolder = useCallback((index) => {
        navigate(`/edit-folder/${index}`);
    }, [])
    const handleClickDeleteFolder = useCallback((index) => {
        if (global.confirm("Are you sure you want to delete it?"))
            // dispatch(deleteFolder(index));
            deleteFolderFromFireStore(index);
    }, [])

    return (
        <div className="wrapper">
            <div className="header">
                <div className="gradient">
                    <h1>Tasks Lists</h1>
                </div>
                <p>A list of files</p>
                {/* <button onClick={handleReLoad}>Reload</button> */}
                <form onSubmit={handleSubmit(handleChangeInput)}>
                    <div className="bar-add-folder">
                        <div className="bar-input">
                            <input type="text" placeholder="Add your new folder..." {...register("inputfolder", {
                                required: "Please enter before pressing submit",
                                pattern: {
                                    value: /^([^!@#$&%^()-_=+<>?;:'"{[}]\|.,`~*]|[a-zA-Z0-9 ])+$/g,
                                    message: "Do not enter special characters"
                                }
                            })} />
                            {errors.inputfolder?.type === 'required' && <p>{errors.inputfolder.message}</p>}
                            {errors.inputfolder?.type === 'pattern' && <p>{errors.inputfolder.message}</p>}
                        </div>
                        <div className="submit-add">
                            <button>Add folder</button>
                        </div>
                        <br />
                    </div>
                </form>
            </div>
            <div className="folder">
                {!stateLoading && <LoadingData />}
                <ul className="list">
                    {folder.map((item, index) => (
                        <li key={index}>
                            <Link to={`/folder?todo=${index}`}>{item.name}</Link>
                            <FolderItem
                                handleClickEditFolder={() => { handleClickEditFolder(index) }}
                                handleClickDeleteFolder={() => { handleClickDeleteFolder(item.id) }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default memo(Folder);