import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.body.classList.add('custom-cursor-enabled');

    const onMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      }
    };
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor bg-[rgba(112,141,169,0.58)]"
    ></div>
  );
};

export default CustomCursor;
