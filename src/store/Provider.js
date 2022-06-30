import { onSnapshot } from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import { queryRef } from "../feature/crud";
import { loadData } from "./actions";
import Context from "./Context";
import reducer from "./reducer";
function Provider({ children }) {
    const [folder, dispatch] = useReducer(reducer, []);
    const [stateLoading, setStateLoading] = useState(false);
    useEffect(() => {
        const unsubscribe = onSnapshot(queryRef, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            dispatch(loadData(data));
            setStateLoading(true);
        })
        return () => {
            unsubscribe();
            setStateLoading(false);
        }
    }, []);

    return (
        <Context.Provider value={[folder, dispatch, stateLoading]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;