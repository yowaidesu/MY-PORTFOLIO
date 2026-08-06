// PORTFOLIO COMPLETED!
import { AppState, AppAction } from '../types';

export const initialState: AppState = {
  theme: 'light',
  menuOpen: false,
  activeSection: 'home',
  hoveredProject: null,
};

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'TOGGLE_MENU':
      return { ...state, menuOpen: !state.menuOpen };
    case 'CLOSE_MENU':
      return { ...state, menuOpen: false };
    case 'SET_ACTIVE_SECTION':
      return { ...state, activeSection: action.payload };
    case 'SET_HOVERED_PROJECT':
      return { ...state, hoveredProject: action.payload };
    default:
      return state;
  }
}
