//* take in state here and make some changes.

import { AppMechanicsType } from "./AppContext";
import { ActionMap } from "./actionMap";

enum Types {
  ToggleSidebar = "TOGGLE_SIDEBAR",
  CloseSidebar = "CLOSE_SIDEBAR",
  ToggleLang = "TOGGLE_LANG",
  CloseLang = "CLOSE_LANG",
  ChangeLang = "CHANGE_LANG",
}

export type AppMechanicsPayload = {
  [Types.ToggleSidebar]: boolean;
  [Types.CloseSidebar]: boolean;
  [Types.ToggleLang]: boolean;
  [Types.CloseLang]: boolean;
  [Types.ChangeLang]: string;
};

export type AppMechanicsActionType =
  ActionMap<AppMechanicsPayload>[keyof ActionMap<AppMechanicsPayload>];

export const MechanicsReducer = (
  state: AppMechanicsType,
  action: AppMechanicsActionType
): AppMechanicsType => {
  switch (action.type) {
    case Types.ToggleSidebar:
      return { ...state, sidebar: !state.sidebar };
    case Types.CloseSidebar:
      return { ...state, sidebar: false };
    case Types.ToggleLang:
      return { ...state, lang: { ...state.lang, isOpen: !state.lang.isOpen } };
    case Types.CloseLang:
      return { ...state, lang: { ...state.lang, isOpen: false } };
    case Types.ChangeLang:
      return { ...state, lang: { ...state.lang, selected: action.payload } };
    default:
      return state;
  }
};
