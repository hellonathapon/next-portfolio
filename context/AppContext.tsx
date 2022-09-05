import React, { useState, ReactNode, useReducer } from "react";
import { MechanicsReducer } from "./mechanicsReducer";

export type AppMechanicsType = {
  sidebar: boolean;
  lang: {
    isOpen: boolean;
    selected: string;
  };
};

//* STATE(S)
type InitialStateType = {
  appMechanics: AppMechanicsType;
};

const initialState: InitialStateType = {
  appMechanics: {
    sidebar: false,
    lang: {
      isOpen: false,
      selected: "en",
    },
  },
};

const AppContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

//* reducers can scale up and maintain with root reducer, basically combind them together.
const mainReducer = (
  { appMechanics }: InitialStateType,
  action: any
): InitialStateType => ({
  appMechanics: MechanicsReducer(appMechanics, action),
});

interface Props {
  children: ReactNode;
}

const AppProvider = ({ children, ...props }: Props) => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState); //* useReducer(AType, AType) >> should return same type
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
