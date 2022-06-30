import sgvEdit from "../../sgv/sgvEdit";
import sgvDelete from "../../sgv/sgvDelete";

function FolderItem({ handleClickEditFolder, handleClickDeleteFolder }) {
    return (
        <div className="edit-and-delete">
            <span className="svg-edit" onClick={handleClickEditFolder}>{sgvEdit}</span>
            <span className="svg-delete" onClick={handleClickDeleteFolder}>{sgvDelete}</span>
        </div>
    );
}

export default FolderItem;