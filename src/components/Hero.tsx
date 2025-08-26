
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-start bg-cover bg-center"
        style={{
          backgroundImage: 'url("/BackRoof.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto max-w-5xl py-8 relative z-10 mt-20">
          <div className="max-w-2xl text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.7 }}
              className="text-5xl md:text-6xl font-manrope text-white mb-6 leading-tight"
            >
              Jimbo's Exterior Cleaning
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true, amount: 0.7 }}
              className="text-base text-white/90 mb-8 font-manrope max-w-md"
            >
              Transform your property’s appearance and protect its value with Ayrshire’s trusted exterior cleaning specialists. From roofs to driveways, we use safe, effective methods to deliver outstanding results—every time. Contact us today for a free, no-obligation quote!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal text-lg px-8 py-6 rounded-none"
              >
                Get a free quote
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before and After Slider Section */}
      <section className="py-20 bg-white" id="before-after">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-manrope text-gray-900 mb-8 font-normal text-center">Before & After</h2>
          <BeforeAfterSlider 
            beforeImg="/lovable-uploads/after1.jpg" 
            afterImg="/lovable-uploads/bef1.jpg" 
          />
        </div>
      </section>
    </>
  );
};

export default Hero;

// BeforeAfterSlider component for before/after image comparison
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImg, afterImg }) => {
  const [value, setValue] = useState([50]);

  return (
    <div className="relative w-full max-w-xl mx-auto aspect-video overflow-hidden rounded-lg shadow-lg">
      {/* Before image (always fully visible) */}
      <img
        src={beforeImg}
        alt="Before cleaning"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      />
      {/* After image (revealed from left to right) */}
      <img
        src={afterImg}
        alt="After cleaning"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          clipPath: `inset(0 ${100 - value[0]}% 0 0)`,
          zIndex: 2,
        }}
      />
      
      {/* BEFORE text overlay - top left */}
      <div className="absolute top-4 left-4 z-20">
        <div className="bg-black/70 text-white px-3 py-1 rounded font-manrope font-bold text-sm">
          BEFORE
        </div>
      </div>
      
      {/* AFTER text overlay - top right */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-black/70 text-white px-3 py-1 rounded font-manrope font-bold text-sm">
          AFTER
        </div>
      </div>
      
      {/* Slider handle */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        <div
          className="h-full border-l-4 border-[#526bb0]"
          style={{ left: `${value[0]}%`, position: "absolute" }}
        ></div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 px-8 z-10">
        <Slider
          min={0}
          max={100}
          step={1}
          value={value}
          onValueChange={setValue}
          aria-label="Before and after slider"
        />
      </div>
      
      {/* Drag instruction text */}
      <div className="absolute -bottom-8 left-0 right-0 text-center z-10">
        <p className="text-gray-600 font-manrope text-sm">
          Drag the slider to reveal
        </p>
      </div>
    </div>
  );
};
