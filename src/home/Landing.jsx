import useMouse from "@/hooks/useMouse";
import GridColumn from "@/layout/GridColumn";
import Section from "@/layout/Section";
import { useTransform,motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";

// import Scene from "../../home/Scene";
const Scene = dynamic(() => import("../home/Scene"), {
  ssr: false,
});

function Landing() {
  const {x,y}=  useMouse()
const newX= useTransform(x,x=>x+14)
const newY= useTransform(y,x=>x+14)
const [isMouseActiv,setIsMouseActiv]=useState(false)
  return (
 <div onMouseEnter={()=>{setIsMouseActiv(true)}} onMouseLeave={()=>{setIsMouseActiv(false)}}
      className={`relative overflow-hidden h-svh`}
    >
      <motion.div animate={{scale:isMouseActiv?1:0}} style={{x:newX,y:newY}}
       className='fixed pointer-events-none cursor-none flex items-center
        justify-center z-[999] top-0 left-0 w-[7em] 
        roundedfull h-[50px] bg-brand-accent text-brand-white capitalize text-[1em] font-body'>
scroll down
       </motion.div>
    <Scene className='absolute top-0 left-0 w-full h-full' />
    <Section className="h-svh mix-blenddifference  relative w-full">
      <GridColumn  className={'h-full '}>
        <div className="lg:col-span-12 col-span-full bg-red700 flex flex-col items-start justify-end">
          <h2 className="text-heading1 font-custom capitalize text-brand-white leading-[.8] font-mediu">
            make<span className="text-brand-accent">.</span>
            </h2><h2 className="text-heading1 ml[.82em] font-custom capitalize text-brand-white leading-[.8] font-mediu">
            your car
            <span className="text-brand-accent">.</span>
            </h2><h2 className="text-heading1 ml[1.4em] font-custom capitalize text-brand-white leading-[.8] font-mediu">
            better<span className="text-brand-accent">.</span>
            </h2>
        </div>
        {/* <div className="lg:col-span-4 col-span-full mix-blend-normal  bg-red700 flex items-start">      
              <p className="text-para  font-body text-brand-white">the ultimate way to retain your car beauty the ultimate way to retain your car beauty the ultimate way to retain your car beauty</p>
</div> */}
      </GridColumn>
    </Section>
      </div>
  )
}

export default Landing