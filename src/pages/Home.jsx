import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import Header from '../Components/Home/Header'
import WhoIsThisFor from '../Components/Home/WhoIsThisFor'
import HowItWorks from '../Components/Home/HowItWorks'
import Testimonials from '../Components/Home/Testimonials'
import FAQ from '../Components/Home/FAQ'
import CTA from '../Components/Home/CTA'
import Footer from '../Components/Home/Footer'

export default function Home() {
  return (
    <> 
        
        <HeroSection />
        <WhoIsThisFor />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
    </>
  )
}
