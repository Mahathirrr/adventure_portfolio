import { useEffect } from 'react';

export function useCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-4 h-4 rounded-full bg-amber-600 pointer-events-none z-50 transition-transform duration-100 ease-out';
    document.body.appendChild(cursor);

    const cursorRing = document.createElement('div');
    cursorRing.className = 'fixed w-8 h-8 rounded-full border-2 border-amber-600 pointer-events-none z-50 transition-transform duration-300 ease-out';
    document.body.appendChild(cursorRing);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
      cursorRing.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorRing);
    };
  }, []);
}