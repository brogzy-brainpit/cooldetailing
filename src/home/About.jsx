import CustomBtn from '@/components/CustomBtn'
import GridColumn from '@/layout/GridColumn'
import Section from '@/layout/Section'
import React from 'react'
import {motion} from 'framer-motion'
import {
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import PixelImage from './PixelImage'

function About() {
  return (
    <div>
        <Section>
            <GridColumn>
                <div className='lg:col-span-4 col-span-3 lg:col-start-1'>
                    <motion.div style={{rotate:-10}} className=' rounded-xl overflow-clip shadow-md drop-shadow-2xl shadow-brand-accent/55' >
                    <PixelImage className='h-[42vw] lg:h-[32vw] md:h-[32vw] w-full'>
                       <img src="https://images.unsplash.com/photo-1723553495282-5fecd038e9c6?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="work" className="w-full aspect-[7/5] h-full object-cover" />
                   </PixelImage>
                    </motion.div>
                </div>
                <div className='col-span-3 lg:col-span-7 lg:col-start-6'>
                    <h2 className='text-heading3 leading-[1.2] font-custom text-brand-secondary mb-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui ad labore necessitatibus alias veritatis, eveniet magnam consectetur quidem mollitia.
                    </h2>
                    <CustomBtn
        dotClassName="text-brand-accent  bg-brand-secondary font-custom "
        Icon={TrendingUp}
        size="default"
      >
        Explore
      </CustomBtn>
                </div>
            </GridColumn>
        </Section>
    </div>
  )
}

export default About