import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    {/* animating card using gsap hook */}

    useGSAP(() =>{
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center", // ends the animation after moving 800px
                scrub: 0.5, // duration of the animation
                pin: true,
                pinSpacing: true,
            },
        });
        // apply the clip animation
        clipAnimation.to(".mask-clip-path", {
            width:"100vw",
            height: "100vh",
            borderRadius: 0,
        });
    });

  return (
    <div id="about" className="min-h-screen w-screen">
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            <h2 className="font-general text-sm uppercase md:text=[10px]">
                Welcome to CHRONOGAMES
            </h2>

            <AnimatedTitle
                title="DISC<b>O</b>VER THE world`s <br/> LARGEST SHARED <b>A</b>DVENTURE"
                containerClass="mt-5 !text-black text-center"
            />
            
            <div className="about-subtext">
                <p>
                    The Game of Games Begins -- your life, now an epic MMORPG   
                </p>
                <p className="text-gray-500">
                    We unites the every player from countless games and platforms, 
                    both digital and physical, inti a unified Play Economy
                </p>
            </div>
        </div>

        {/* display image */}
        <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path about-image">
                <img 
                    src="img/about.webp"
                    alt="Background"
                    className="absolute left-0 top-0 size-full object-cover"
                />
            </div>
        </div>
    </div>
  )
}

export default About