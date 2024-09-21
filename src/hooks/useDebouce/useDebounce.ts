import { useCallback, useRef } from 'react';

export default function useDebounce<C extends (...params: Array<any>) => unknown>(
  callback: C,
  wait: number,
): (...params: Parameters<C>) => void {
  const timeout = useRef<NodeJS.Timeout>();

  return useCallback(
    (...params) => {
      clearInterval(timeout.current);
      timeout.current = setTimeout(() => callback(...params), wait);
    },
    [callback, wait],
  );
}
