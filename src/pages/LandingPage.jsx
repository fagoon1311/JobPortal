import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import React from 'react'
import companies from '../data/companies.json'
import faq from '../data/faq.json'
import { Link } from 'react-router-dom'
import Autoplay from 'embla-carousel-autoplay'

const LandingPage = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
      <section className='text-center'>
        <h1 
        className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4'>
          Find your dream Job 
          <span className='flex items-center gap-2 sm:gap-6'> and get <img src='/logo.png' alt = 'Hirred logo' className='h-14 sm:h-24 lg:h-32'></img></span>
        </h1>
        <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>
          Explore thousands of job listings or find your perfect candidate
        </p>
      </section>
      <div className='flex gap-6 justify-center'>
        {/* button*/}
        <Link to='/jobs'>
          <Button variant='blue' size='xl'>Find Jobs</Button>
        </Link>
        <Link to='/post-job'>
          <Button variant='destructive' size='xl'>Post a Job</Button>
        </Link>
      </div>
      {/* Carousel */}
        <Carousel 
        className="w-full py-10"
        plugins={[Autoplay({delay: 2000})]}>
            <CarouselContent className="flex gap-5 sm:gap-20 items-center">
                {companies.map(({ name, id, path }) => (
                  <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
                    <img
                      src={path}
                      alt={name}
                      className="h-9 sm:h-14 object-contain"
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
      {/* banner */}
      <img src="/banner.jpeg"></img>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* cards */}
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Search and apply for jobs, track applications and more</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Post jobs, manage applications and find the best candidates.</p>
          </CardContent>
        </Card>
      </section>

      {/* accordion */}
      
      <Accordion type="single" collapsible>
        {faq.map((faq, index)=>{
          return(
            <AccordionItem key={index} value={`item-${index+1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
          </AccordionItem>
        )
      })}
        
      </Accordion>

    </main>
  )
}

export default LandingPage