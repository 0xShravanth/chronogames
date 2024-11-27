import gsap from "gsap";
import { useState,useEffect, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import Button from "./Button";

{/* enabling scroll trigger plugin*/}

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedViedos, setLoadedViedos] = useState(0);

  const totalViedos = 4;
  const nextVideodRef = useRef(null);

  const handleViedoLoad = () => {
    setLoadedViedos((prev) => prev + 1);
  };

   {
    /* checking the loading of data*/
  }

  useEffect(() => {
    if (loadedViedos === totalViedos - 1) {
      setIsLoading(false);
    }
  }, [loadedViedos]);

 {
    /* using modulo operator (%) to get a reminder  
    
    */
  }
const upCommingViedoIndex = (currentIndex % totalViedos) + 1; 

  const handleMiniVdClicked = () => {
    setHasClicked(true);
    setCurrentIndex(upCommingViedoIndex);
  };
  {
    /* using gsap hook for animation  1:inout animation */
  }

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideodRef.current.play(),
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex],
     revertOnUpdate: true, 
     }
  );

  {
    /* using gsap hook for animation  2:collaps reactangle */
  }

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%",
      borderRadius: "0%,0%,40%,10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getViedoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    /* dvh - dynamic view port unite
     */
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/*  setting the loading feature*/}
      {isLoading && (
        <div className="relative h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          {/* adding mini viedo */}
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClicked}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:opacity-100 "
            >
              <video
                ref={nextVideodRef}
                src={getViedoSrc(upCommingViedoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150  object-cover object-center"
                onLoadedData={handleViedoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideodRef}
            src={getViedoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleViedoLoad}
          />
          {/* adding zoom in effect using another viedo player */}
          <video
            src={getViedoSrc(
              currentIndex === totalViedos - 1 ? 1 : currentIndex
            )}
            // autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleViedoLoad}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>A</b>MING
        </h1>
        {/* for text redefine  */}

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              REDEFI<b>N</b>E
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5  text-black">
        G<b>A</b>MING
      </h1>
    </div>
  );
};

export default Hero;
