import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
        cursorDotRef.current.style.left = e.clientX + "px";
        cursorDotRef.current.style.top = e.clientY + "px";
      }
    };

    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "translate(-50%, -50%) scale(0.8)";
        cursorRef.current.style.backgroundColor = "rgba(176, 38, 255, 0.2)";
      }
    };

    const handleMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        cursorRef.current.style.backgroundColor = "transparent";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const hoverables = document.querySelectorAll("a, button, .cursor-pointer");
    const onMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "translate(-50%, -50%) scale(2.5)";
        cursorRef.current.style.borderColor = "#00f3ff";
        cursorRef.current.style.mixBlendMode = "unset";
      }
    };
    const onMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        cursorRef.current.style.borderColor = "#b026ff";
        cursorRef.current.style.mixBlendMode = "difference";
      }
    };

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-dot" ref={cursorDotRef}></div>
    </>
  );
};

export default CustomCursor;
