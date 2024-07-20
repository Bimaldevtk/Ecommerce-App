import React, { createContext, useReducer, useContext } from 'react';

// Data Layer
export const StateContext = createContext();

// Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Custom hook to use the StateContext
export const useStateValue = () => useContext(StateContext);
