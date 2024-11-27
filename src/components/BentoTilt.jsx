/* eslint-disable react/prop-types */
import { useState , useRef } from 'react'

const BentoTilt = ( {children, className = "" }) => {

    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);

    const handleMouseMove =(e) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left ) / width;
        const relativeY = (e.clientY - top ) / height;

        const tiltX = (relativeY - 1)* 5;
        const tiltY = (relativeX - 1)* -5;

        const newTransform =`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
    };

    const handleMOuseLeave = () => {
        setTransformStyle("");
    }

  return (
    <div
        ref={itemRef}
        className={className}
        onMouseMove= {handleMouseMove}
        onMouseLeave={handleMOuseLeave}
        style={{ transform: transformStyle}}
    >{children}</div>
  );
};

export default BentoTilt