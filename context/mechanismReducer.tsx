//* basically take in state here and make some changes.

import { AppMechanismType } from "./AppContext";

export interface IMechanism {
  type: "toggle" | "close";
}

export const MechanismReducer = (
  state: AppMechanismType,
  action: IMechanism
): AppMechanismType => {
  switch (action.type) {
    case "toggle":
      return { ...state, sidebar: !state.sidebar };
    case "close":
      return { ...state, sidebar: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
