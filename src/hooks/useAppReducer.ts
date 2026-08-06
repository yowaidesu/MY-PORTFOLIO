import { useReducer, useEffect } from 'react';
import { appReducer, initialState } from '../reducers/appReducer';
import { AppState, AppAction } from '../types';

export function useAppReducer(): [AppState, React.Dispatch<AppAction>] {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        dispatch({ type: 'CLOSE_MENU' });
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return [state, dispatch];
}
