import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        { id: 1, text: 'Gas', amount: +3500 },
        { id: 2, text: 'Cleaning', amount: -150 },
        { id: 3, text: 'Shop', amount: +2420 },
        { id: 4, text: 'Staff', amount: -680 },
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction
        }}>
        {children}
    </GlobalContext.Provider>);
}