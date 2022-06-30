import { memo } from "react";
import { Link } from "react-router-dom";

function TodoItem({ item, index, folderId, handleComplete, handleDeleteTodo }) {
    return (
        <>
            <label>
                <input type="checkbox" checked={item.completed} onChange={handleComplete} />
                {item.content}
            </label>
            <Link to={`/edit-todo/${folderId}/${index}`}> Edit </Link>
            <a onClick={handleDeleteTodo}> X </a>
        </>
    );
}

export default memo(TodoItem);