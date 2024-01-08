import React, { ReactNode, createContext, useReducer } from "react";

export const TodoContext = createContext<
  { state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

type TodoProviderProps = {
  children: ReactNode;
};

export type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TAction = {
  type: string;
  payload: TTodo;
};

const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case "addTodo":
      return [...currentState, action.payload];

    default:
      return currentState;
  }
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const values = {
    state,
    dispatch,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
