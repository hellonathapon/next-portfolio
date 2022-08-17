//* take in state here and make some changes.

import { AppMechanismType } from "./AppContext";
import { ActionMap } from "./actionMap";

enum Types {
  Toggle = "TOGGLE_SIDEBAR",
  Close = "CLOSE_SIDEBAR",
}

export type AppMechanismPayload = {
  [Types.Toggle]: boolean;
  [Types.Close]: boolean;
};

export type AppMechanismActionType =
  ActionMap<AppMechanismPayload>[keyof ActionMap<AppMechanismPayload>];

export const MechanismReducer = (
  state: AppMechanismType,
  action: AppMechanismActionType
): AppMechanismType => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebar: !state.sidebar };
    case "CLOSE_SIDEBAR":
      return { ...state, sidebar: false };
    default:
      return state;
  }
};
