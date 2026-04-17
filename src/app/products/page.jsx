import React from 'react'
import dynamic from "next/dynamic";

import heroBg from "../../../public/shutterstock/Products/productHero.png"
const HeroSection = dynamic(() => import("@/components/HeroSection"));
const ProductsSection = dynamic(() => import("./ProductsSection"));
 
export const metadata = {
  title: "Products",
  description:
    "Explore our products built to simplify workforce planning, optimize performance, and deliver actionable insights",
  keywords:['legal practice management software',
	'law firm management system',
 'legal tech platform India',
 'digital tools for lawyers',
 '•	skills inventory platform',
 'workforce capability intelligence',
 'talent gap analysis software',
 'skill assessment platform',
 'sports auction platform',
 'AI sports analytics platform',
'player auction management software',
'preventive oncology screening platform',
'digital health screening solutions',
'cancer prevention technology',
'AI code security platform',
'LLM-based code analysis',
'vulnerability detection software',
'secure code review tool',
'document AI platform',
 'multilingual document processing',
'AI document understanding',
'intelligent document analysis',
'satellite imagery analysis',
'GIS change detection platform',
'remote sensing analytics',
'geospatial intelligence solutions'
]
}
const page = () => {
  return (
    <div>
     <HeroSection
             pageName="Products"
             headline={
               <>
                 Products Built for  <br className="hidden sm:block" />
                 Real-World Impact.
               </>
             }
             subHeadline="Purpose-driven platforms designed to solve complex operational challenges and scale with your organization."
             primaryCta={{ label: "Explore Products", href: "/products#Products" }}
             secondaryCta={{label:"Request Demo" , href:"/contact#form"}}
            //  heroBgImage="https://images.pexels.com/photos/7653780/pexels-photo-7653780.jpeg"
             heroBgImage={heroBg}
           />
      <ProductsSection  />

    </div>
  )
}

export default page
