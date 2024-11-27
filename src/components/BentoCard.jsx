import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoCard = ( {src , title , description, isComingSoon } ) => {

    const [cursorPosition , setCursorPosition] =useState( { x:0 , y: 0});
    const [hoverOpacity , setHoverOpacity] = useState(0);

    const hoverButtonRef = useRef(null);

    const handleMouseMove = (e) => {
        if(!hoverButtonRef.current) return;
        const rect = hoverButtonRef.current.getBoundingClientRect()

        setCursorPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseEntry = () => setHoverOpacity(1);
    const handleMOuseExit = () => setHoverOpacity(0);

  return (
    <div className="relative size-full ">
        <video
            src={ src}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"        
        />
        <div className='relative z-10  flex size-full flex-col justify-between p-5 text-blue-50'>
            <div>
                <h1 className="bento-title special-font">
                    {title}
                </h1>
                {description && (
                    <p className="mt-3 max-w-64 text-xs md:test-base">
                    {description}
                </p>
                )}
            </div>

            {/* is coming */}
            { isComingSoon && ( 
                <div
                    ref={hoverButtonRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEntry}
                    onMouseLeave={handleMOuseExit}
                    className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
                >
                    {/* Radial gradient hover effect */}
                    <div 
                        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                        style={
                            {opacity: hoverOpacity,
                                background : ` radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px,  #656fe288, #00000026)`,
                            }}
                    />
                    <TiLocationArrow className="relative z-20"/>
                    <p className="relative z-20">
                        Coming Soon
                    </p>

                    

                </div>
            )}
        </div>
    </div>
  );
};

export default BentoCard