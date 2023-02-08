import { addDoc, arrayUnion, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase/firebase";
import { loadData } from "../store/actions";


const usersCollectionRef = collection(db, "todos");
const queryRef = query(usersCollectionRef, orderBy("name"));
const removeTodo = (list, indexId) => {
    return list.slice(0, indexId).concat(list.slice(indexId + 1));
}

const getDataFromFireStore = async (dispatch) => {
    const data = await getDocs(queryRef);
    dispatch(loadData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
}

const addFolderFromFireStore = (name) => {
    const docRef = addDoc(usersCollectionRef, {
        name,
        list: []
    })
    docRef
        .then(() => {
            console.log("Add success");
        })
        .catch((err) => {
            console.log(err);
        })
}

const deleteFolderFromFireStore = (docId) => {
    const docToUpdate = doc(db, "todos", docId);
    deleteDoc(docToUpdate)
        .then(() => {
            console.log("Xoa thanh cong");
        })
        .catch((err) => {
            console.log(err);
        })
}

const updateFolderFromFireStore = (docId, name) => {
    const docToUpdate = doc(db, "todos", docId);
    updateDoc(docToUpdate, {
        name
    })
        .then(() => {
            console.log("Cap nhat thanh cong");
        })
        .catch((err) => {
            console.log(err);
        })
}

const addTodoFromFireStore = (docId, content, date, priority, todo, completed) => {
    const docToUpdate = doc(db, "todos", docId);
    updateDoc(docToUpdate, {
        list: arrayUnion({
            id: uuidv4(),
            content,
            date,
            priority,
            todo,
            completed
        })
    })
        .then(() => {
            console.log("Them thanh cong");
        })
        .catch((err) => {
            console.log(err);
        })
}

const updateTodoFromFireStore = (docId, todoId, list, content, date, priority, todo, completed) => {
    const docToUpdate = doc(db, "todos", docId);
    const newList = [...list];
    newList[todoId] = {
        ...newList[todoId],
        content: content,
        date: date,
        completed: completed,
        priority: priority,
        todo: todo
    };
    updateDoc(docToUpdate, {
        list: [
            ...newList
        ]
    })
        .then(() => {
            console.log("Cap nhat thanh cong");
        })
        .catch((err) => {
            console.log(err);
        })
}

const deleteTodoFromFireStore = (list, docId, indexId) => {
    const docToUpdate = doc(db, "todos", docId);
    updateDoc(docToUpdate, {
        list: [
            ...removeTodo(list, indexId)
        ]
    })
        .then(() => {
            console.log("Xoa thanh cong");
        })
        .catch((err) => {
            console.log(err);
        })
}

const completeTodo = (docId, todoId, list, completed) => {
    const docToUpdate = doc(db, "todos", docId);
    const newList = [...list];
    newList[todoId] = {
        ...newList[todoId],
        completed: !completed,
    };
    updateDoc(docToUpdate, {
        list: [
            ...newList
        ]
    })
        .then(() => {
            console.log("Cap nhat thanh cong");
        })
        .catch((err) => {
            console.log(err);
        })
}

export {
    usersCollectionRef,
    queryRef,
    getDataFromFireStore,
    addFolderFromFireStore,
    deleteFolderFromFireStore,
    updateFolderFromFireStore,
    addTodoFromFireStore,
    updateTodoFromFireStore,
    deleteTodoFromFireStore,
    completeTodo
};
