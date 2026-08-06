// PORTFOLIO COMPLETED!
import { useEffect, useRef } from 'react';
import { AppAction } from '../types';

export function useIntersectionSpy(
  sectionIds: string[],
  dispatch: React.Dispatch<AppAction>
) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dispatch({ type: 'SET_ACTIVE_SECTION', payload: entry.target.id });
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [sectionIds, dispatch]);
}
