/* eslint-disable react/prop-types */
import AnimatedTitle from "./AnimatedTitle";
import BentoTilt from "./BentoTilt";


const ImageClipBox = ({ src, clipClass})=>(
    <div className={clipClass}>
        <img src={src} />
    </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
        
        <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
            <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                <BentoTilt>
                <ImageClipBox
                    src="/img/contact-1.webp"
                    clipClass="contact-clip-path-1"
                />
                
                <ImageClipBox
                    src="/img/contact-2.webp"
                    clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
                  />
                  </BentoTilt>

            </div>

            
            <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
            
                <BentoTilt>
                <ImageClipBox
                    src="/img/swordman-partial.webp"
                    clipClass="absolute md:scale-125"
                />
                <ImageClipBox
                    src="/img/swordman.webp"
                    clipClass="sword-man-clip-path md:scale-125"
                />
                </BentoTilt>
            </div>
            

            <div className=" flex flex-col items-center text-center">
                <p className="mb-10 font-general text-[10px] uppercase">Join CHRONOGAMES</p>
            </div>
            <AnimatedTitle 
                 title="let&#39;s b<b>u</b>ild the <br/> new era of <br/> g<b>a</b>ming t<b>o</b>gether."
                 className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
            />

        </div>
        
    </div>
  )
}

export default Contact