import { type } from '@testing-library/user-event/dist/type';
import { v4 as uuidv4 } from 'uuid';

const addTodoInFolder = (folderId, content, date, priority, todo, complete) => {
    return {
        type: "ADD_TODO",
        payload: {
            folderId,
            id: uuidv4(),
            content,
            date,
            priority,
            todo,
            complete
        }
    }
}

const editNoteInFolder = (folderId, todoId, content, date, priority, todo, complete) => {
    return {
        type: "EDIT_TODO",
        payload: {
            folderId,
            todoId,
            content,
            date,
            priority,
            todo,
            complete
        }
    }
}

const deleteNoteInFolder = (folderId, todoId) => {
    return {
        type: "DELETE_TODO",
        payload: {
            folderId,
            todoId
        }
    }
}

const completeNote = (folderId, isCompleted, todoId) => {
    return {
        type: "COMPLETE_TODO",
        payload: {
            folderId,
            isCompleted,
            todoId
        }
    }
}

const addFolder = (name) => {
    return {
        type: "ADD_FOLDER",
        payload: {
            id: uuidv4(),
            name
        }
    }
}

const deleteFolder = (folderId) => {
    return {
        type: "DELETE_FOLDER",
        payload: {
            folderId
        }
    }
}

const editFolder = (folderId, name) => {
    return {
        type: "EDIT_FOLDER",
        payload: {
            folderId,
            name
        }
    }
}

const loadData = (data) => {
    return {
        type: "LOAD_DATA",
        payload: {
            data
        }
    }
}

export {
    addTodoInFolder,
    editNoteInFolder,
    deleteNoteInFolder,
    completeNote,
    addFolder,
    deleteFolder,
    editFolder,
    loadData
};