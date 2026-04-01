'use client';
import React from 'react';
import Section from "@/components/layouts/Section";
import Leftside from './Leftsideimg';
import{ content1 ,content2,content3,content4,content5,content6}from '@/constants/constserviceitem';
import Heading from '@/components/Heading';
import Rightside from './Rightsideimg'
const Newservice = () => {  
  return (
    <Section id="NewServices" className="w-full bg-white overflow-hidden py-12 lg:py-20">
        <div className="container text-primary  mx-auto text-center px-4 mb-12 md:mb-16">
                <Heading
                 className='text-base'
                 maxWidth='max-w-[800px]'
                  headline="Service Offerings"
                />
              </div>
        <Leftside
            title='Scale with Confidence'
            heading=' Strategic Consulting'
            subheading='We identify structural, operational, and technological gaps and deliver tailored strategies that enable organizations to scale sustainably — whether at national or global levels.'
            items={content1}
        />
        <Rightside
         title='Intelligent Innovation'
            heading='Digital & AI Transformation'
            subheading='We modernize businesses with intelligent, data-driven solutions.'
            items={content2}
        />
        <Leftside
            title='Government Excellence'
            heading='Public Sector & Event Consulting'
            subheading='We specialize in supporting State & Central Govt. bodies with large-scale public initiatives.'
            items={content3}
        />
         <Rightside
         title='Expert Talent On-Demand'
            heading='Advanced Skill Development'
            subheading='We bridge the talent gap by delivering structured innovation programs focused on emerging technologies.'
            items={content4}
        />
        <Leftside
            title='Reliable Foundation'
            heading=' IT Infrastructure & Operations'
            subheading='We design, build and stabilize core IT foundations to ensure reliability and security. '
            items={content5}
        />
         <Rightside
         title='Intelligent Innovation'
            heading='IT Staff Augmentation'
            subheading='We provide on-demand access to specialized IT talent.'
            items={content6}
        />

    </Section>

  )
}
export default Newservice