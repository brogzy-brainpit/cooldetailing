import React, { useEffect, useRef } from 'react'
import { motion} from 'framer-motion'
import RubberSection from '@/effects/RubberSection';
import StaggerText from '@/effects/StaggerText';
import Section from '@/layout/Section';
import GridColumn from '@/layout/GridColumn';


function Services() {
   const ref = useRef(null);  
  const texts=
  [{text:'Individual Coaching',
      url:'#',img:'/images/service01.png',y:-20,initialY:0
    }, {text:'Group Coaching',
      url:'#',img:'/images/service02.png',y:-100,initialY:0
    }, {text:'Corporate Group Coaching',
      url:'#',img:'/images/service03.png',y:-180,initialY:0
    }]
  return (
    <div ref={ref} className='bgwhite w-full min-h-[60vh]'>
        <Section>
            <GridColumn>
                <div className='lg:col-span-5 lg:col-start-1'>
                     <StaggerText color={'#1a3526'} initialColor={'#1a3526'}
       once={false} className=' text-brand-secondary  text-heading2 font-custom  max-w-[80vw] gap-[5px] leading-none'
        text={'Recent Work'.split('')}/>
                </div>
                <div className='lg:col-span-7 lg:col-start-6'>
                                    <h2 className='text-heading3 leading-[1.2] font-custom text-brand-secondary mb-10'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui ad labore necessitatibus alias veritatis, eveniet magnam consectetur quidem mollitia.
                                    </h2>
                                  
                </div>
        
            </GridColumn>
          
        </Section>
        <Section>
              <GridColumn>
                  <div className="grid grid-cols-1 col-span-full md:grid-cols-3 gap-6  w-full">
  {/* Left side - stacked items */}
  {texts.map(({text,url,img,y,initialY},index)=>{

     return (
   <RubberSection key={index} defaultStart={["start 0.89", "0.7 start"]} defaultY={[initialY, y]} >
        <div className="cursor-pointer overflow-hidden relative w-full py-10 px-2 h-[350px] rounded-xl items-start justify-end flex gap-4 flex-col">
  {/* Background image */}
  <motion.img
    src={img}
    className="absolute inset-0 object-cover w-full h-full z-0"
  />

</div>
   </RubberSection>

    )
   
  })}
         
          
  </div>
            </GridColumn>
        </Section>
    
    </div>
  )
}

export default Services