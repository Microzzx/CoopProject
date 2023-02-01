import React, {createContext, useReducer} from 'react';

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
  };

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
        case "LOGIN":
          //localStorage.setItem("user", JSON.stringify(action.payload.user));
          localStorage.setItem("token", JSON.stringify(action.payload.token));
          return {
            ...state,
            isAuthenticated: true,
            user: action.payload.user,
            token: action.payload.token,
          };
        case "LOGOUT":
          localStorage.clear();
          return {
            ...state,
            isAuthenticated: false,
            user: null,
          };
        default:
          return state;
      }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }