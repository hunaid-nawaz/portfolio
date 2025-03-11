import React from 'react'
import { motion } from "motion/react"
import { animate } from 'motion';

const Companies = () => {
  const companies = [
    "Microsoft",
    "Google",
    "Oracle Corporation",
    "SAP",
    "Adobe Systems",
    "Salesforce",
    "IBM",
    "VMware",
    "Atlassian",
    "ServiceNow"
  ];

  const companiesList = [...companies, ...companies]

  const scrollVariant1 = {
    animate: {
      x: [0, -2000],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear"
      }
    }
  }

  const scrollVariant2 = {
    animate: {
      x: [-2000, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear"
      }
    }
  }

  return (
    <div className='text-white py-16'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8'>Companies I've worked with</h2>
        <div className='overflow-hidden relative w-full'>
          <motion.div
            variants={scrollVariant1}
            animate = 'animate'
            className='whitespace-nowrap flex space-x-10'>
            { companiesList.map((company, index) => (
                <div key={index}
                className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'>{company} </div>
            ))}
          </motion.div>
        </div>
        <div className='overflow-hidden relative w-full mt-5'>
          <motion.div
            variants={scrollVariant2}
            animate = 'animate'
            className='whitespace-nowrap flex space-x-10'>
            { companiesList.map((company, index) => (
                <div key={index}
                className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'>{company} </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Companies
