// src/StateContext/StateContext.js
export const initialState = {
    basket: [],
    favorites: [],
    // other initial state properties
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      case "ADD_TO_FAVORITES":
        return {
          ...state,
          favorites: [...state.favorites, action.item],
        };
      // other cases
      default:
        return state;
    }
  };
  
  export default reducer;
  