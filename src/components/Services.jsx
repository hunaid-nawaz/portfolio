import React from 'react'
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer'
import { FaAppStore } from 'react-icons/fa'

const Services = () => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const servicesData = [
    {
      title: "App Design",
      description: "A powerful software application designed to streamline and enhance business operation"
    },
    {
      title: "App Design",
      description: "A powerful software application designed to streamline and enhance business operation"
    },
    {
      title: "App Design",
      description: "A powerful software application designed to streamline and enhance business operation"
    },
    {
      title: "App Design",
      description: "A powerful software application designed to streamline and enhance business operation"
    },
    {
      title: "App Design",
      description: "A powerful software application designed to streamline and enhance business operation"
    },
    {
      title: "App Design",
      description: "A powerful software application designed to streamline and enhance business operation"
    }
  ]

  return (
    <div id="services" className='text-white py-16'>
      <motion.div
        ref = {ref}
        initial = {{opacity: 0, y:50 }}
        animate = { inView ? {opacity: 1, y:0 } : {} }
        transition={{ duration: 0.5 }}
        className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8 underline'>Services</h2>
        <p
          className='mb-12 text-gray-400 text-center'>
          Software Engineer specializing in enterprise solutions and scalable business services.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {servicesData.map((service, index) => (
            <motion.div
              ref = {ref}
              initial = {{opacity: 0, scale: 0.8 }}
              animate = { inView ? {opacity: 1, scale: 1 } : {opacity: 0, scale: 0.8 } }
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
              className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300'>
              <FaAppStore className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto'/>
              <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-sm sm:text-base lg:text-lg text-gray-400'>{service.description }</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Services
