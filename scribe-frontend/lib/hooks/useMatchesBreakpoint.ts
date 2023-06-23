import { useEffect, useState } from "react";
export const useMatchesBreakpoint = (targetBreakpoint: 'sm' | 'md' | 'lg') => {
  const [matchesTargetBreakpoint, setMatchesTargetBreakpoint] = useState(false);
  let mediaQuery;

  // Note: these media queries were taken from the tailwind css defaults (but max-width instead)
  // https://tailwindcss.com/docs/screens
  switch (targetBreakpoint) {
    case ('lg'):
      mediaQuery = '(max-width: 1024px)'
    case ('md'):
      mediaQuery = '(max-width: 768px)'
    default:
      mediaQuery = '(max-width: 640px)'
  }

  const mediaMatch = window.matchMedia(mediaQuery)

  useEffect(() => {
    setMatchesTargetBreakpoint(mediaMatch.matches);

    const handler = (e: any) => setMatchesTargetBreakpoint(e.matches)
    mediaMatch.addEventListener('change', handler)
    return () => mediaMatch.removeEventListener('change', handler);
  }, [])

  return matchesTargetBreakpoint;
}