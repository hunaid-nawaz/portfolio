import React from 'react'
import aboutImg from "../assets/about1.avif"
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer'

const About = () => {

  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  return (
    <div className='text-white py-16'>
      <div className='container mx-auto px-4 text-center'>
        <motion.h2
          ref = {ref}
          initial = {{opacity: 0, y:100 }}
          animate = { inView ? {opacity: 1, y:0 } : {} }
          transition={{
            delay: 0.3,
            duration: 0.5
          }}
          className='text-3xl md:text-4xl font-bold mb-8 underline'>About Me</motion.h2>
        <motion.p
          ref = {ref}
          initial = {{opacity: 0, y:100 }}
          animate = { inView ? {opacity: 1, y:0 } : {} }
          transition={{
            delay: 0.5,
            duration: 0.5
          }}
          className='mb-12 text-gray-400 text-center'>
          At appDevAce, we specialize in delivering cutting-edge software solutions using a modern technology stack
          that includes React, Ruby on Rails, Tailwind CSS, and Next.js, seamlessly integrated with the power and scalability
          of AWS cloud services. Our team is dedicated to building high-performance web applications that are fast, secure,
          and user-friendly. Whether it's a dynamic front-end interface, robust back-end architecture, or end-to-end deployment,
          we bring innovation and efficiency to every project. With a focus on scalability and modern UI/UX design,
          appDevAce empowers businesses to thrive in the digital age.
        </motion.p>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <motion.div
            ref = {ref}
            initial = {{opacity: 0, x:-100 }}
            animate = { inView ? {opacity: 1, x:0 } : {} }
            transition={{
              delay: 0.6,
              duration: 0.5
            }}
            className='mb-8 md:mb-0 md:mr-8 flex justify-center'>
            <img
              src={aboutImg}
              className='w-2/3 sm:w-1/2 md:w-10/12'
            />
          </motion.div>
          <motion.p
            ref = {ref}
            initial = {{opacity: 0, x:100 }}
            animate = { inView ? {opacity: 1, x:0 } : {} }
            transition={{
              delay: 0.6,
              duration: 0.5
            }}
            className='md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl'>
            Hey, I'm a Software Engineer with 5 years of experience, passionate about building efficient and scalable
            web applications. I specialize in working with modern stacks like React, Ruby on Rails, Tailwind CSS, Next.js, and AWS.
            I'm not only dedicated to writing clean, maintainable code but also thrive in collaborative environments,
            working effectively with cross-functional teams to deliver high-quality solutions. I take pride in my ability to
            adapt, communicate clearly, and contribute positively to both product development and team dynamics.
          </motion.p>
        </div>

        <div className='flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0'>
          <motion.div
            ref = {ref}
            initial = {{opacity: 0 }}
            animate = { inView ? {opacity: 1} : {} }
            transition={{
              delay: 1.2,
              duration: 0.3
            }}
            className='text-center'>
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>5+</h3>
            <motion.p
              ref = {ref}
              initial = {{opacity: 0, y:100 }}
              animate = { inView ? {opacity: 1, y:0 } : {} }
              transition={{
                delay: 1.7,
                duration: 0.5
              }}
              className='text-sm sm:text-base text-gray-300'>Years of Development Expeirence</motion.p>
          </motion.div>

          <motion.div
            ref = {ref}
            initial = {{opacity: 0 }}
            animate = { inView ? {opacity: 1} : {} }
            transition={{
              delay: 1.2,
              duration: 0.3
            }}
            >
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>50+</h3>
            <motion.p
              ref = {ref}
              initial = {{opacity: 0, y:100 }}
              animate = { inView ? {opacity: 1, y:0 } : {} }
              transition={{
                delay: 1.7,
                duration: 0.5
              }}
              className='text-sm sm:text-base text-gray-300'>overall Global Customers</motion.p>
          </motion.div>

          <motion.div
            ref = {ref}
            initial = {{opacity: 0 }}
            animate = { inView ? {opacity: 1} : {} }
            transition={{
              delay: 1.2,
              duration: 0.3
            }}
          >
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>90+</h3>
            <motion.p
              ref = {ref}
              initial = {{opacity: 0, y:100 }}
              animate = { inView ? {opacity: 1, y:0 } : {} }
              transition={{
                delay: 1.7,
                duration: 0.5
              }}
              className='text-sm sm:text-base text-gray-300'>Projects I have Made</motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
