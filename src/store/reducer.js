const removeTodo = (listNote, folderId, indexId) => {
    return listNote[folderId].list.slice(0, indexId).concat(listNote[folderId].list.slice(indexId + 1));
}

const removeFolder = (folder, folderId) => {
    return folder.slice(0, folderId).concat(folder.slice(folderId + 1));
}

const reducer = (state, action) => {
    const { type, payload } = action;
    let newList;
    switch (type) {
        case "ADD_TODO":
            newList = [...state];
            newList[payload.folderId] = {
                ...state[payload.folderId],
                list: [
                    ...state[payload.folderId].list,
                    {
                        id: payload.id,
                        content: payload.content,
                        date: payload.date,
                        completed: payload.complete,
                        priority: payload.priority,
                        todo: payload.todo
                    }
                ]
            };
            break;
        case "DELETE_TODO":
            newList = [
                ...state
            ];
            newList[payload.folderId] = {
                ...state[payload.folderId],
                list: [
                    ...removeTodo(state, payload.folderId, payload.todoId)
                ]
            };
            break;
        case "EDIT_TODO":
            newList = [...state];
            newList[payload.folderId].list[payload.todoId] = {
                id: payload.id,
                content: payload.content,
                date: payload.date,
                completed: payload.complete,
                priority: payload.priority,
                todo: payload.todo
            };
            break;
        case "COMPLETE_TODO":
            newList = [...state];
            newList[payload.folderId].list[payload.todoId] = {
                ...state[payload.folderId].list[payload.todoId],
                completed: !payload.isCompleted
            };
            break;
        case "ADD_FOLDER":
            newList = [
                ...state,
                {
                    id: payload.id,
                    name: payload.name,
                    list: []
                }
            ]
            break;
        case "DELETE_FOLDER":
            newList = removeFolder(state, payload.folderId);
            break;
        case "EDIT_FOLDER":
            newList = [
                ...state
            ];
            newList[payload.folderId] = {
                ...state[payload.folderId],
                name: payload.name
            }
            break;
        case "LOAD_DATA":
            newList = [
                ...payload.data
            ];
            break;
        default:
            throw new Error("Invalid action");
    }
    return newList;
}
export default reducer;