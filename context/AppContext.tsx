import React, { useState, ReactNode, useReducer } from "react";
import { MechanismReducer, IMechanism } from "./mechanismReducer";

export type AppMechanismType = {
  sidebar: boolean;
};

//* STATE(S)
type InitialStateType = {
  appMechanism: AppMechanismType;
};

const initialState: InitialStateType = {
  appMechanism: {
    sidebar: false,
  },
};

const AppContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

//* reducers can scale up and maintain with root reducer, basically combind them together.
const mainReducer = (
  { appMechanism }: InitialStateType,
  action: IMechanism
): InitialStateType => ({
  appMechanism: MechanismReducer(appMechanism, action),
});

interface Props {
  children: ReactNode;
}

const AppProvider = ({ children, ...props }: Props) => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState); //* useReducer(AType, AType) >> should be the same type
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
