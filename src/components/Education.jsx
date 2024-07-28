import React from 'react'

function Education() {
    
    const education = [
        {
            name: "Master of Science in Agronomy",
            institution: "The Neotia University",
            address: "South 24 Parganas, West Bengal, India",
            duration: "2024-2026",
            marks: "CGPA- 0"
        },
        {
            name: "Bachelor of Science in Agriculture",
            institution: "The Neotia University",
            address: "South 24 Parganas, West Bengal, India",
            duration: "2020-2024",
            marks: "CGPA- 8.50"
        },
        {
            name: "Higher Secondary Education",
            institution: "Paramanandapur Jagannath Institution",
            address: "Purba Medinipur, West Bengal, India",
            duration: "2018-2020",
            marks: "Percentage- 88.20%"
        },
        {
            name: "Secondary Education",
            institution: "Gutinagori Aloketirtha Vidyaniketan",
            address: "Howrah, West Bengal, India",
            duration: "2012-2018",
            marks: "Percentage- 77.14%"
        }
    ]

  return (
    <div className=' w-full flex flex-col md:flex-row items-center md:justify-between   h-full  md:px-20 px-10 md:py-6 py-3 md:my-20 my-12 ' id='education'>
        <h1 className='md:text-4xl text-2xl text-center font-bold mb-4 md:w-1/4 w-full'><span className='underline'>Educational</span> <span className='text-cyan-500'>Background</span></h1>
        <div className='md:w-3/4 w-full'>
            {education.map((edu, index) => (
                <div className='md:p-4 p-2 mb-2 rounded-xl shadow-style hover:translate-x-2 hover:cursor-pointer' key={index}>
                    <h2 className='md:text-2xl text-xl'>{edu.name} <span className='underline'>({edu.duration})</span></h2>
                    <h3 className='md:text-xl text-lg'>{edu.institution}</h3>
                    <h3 className='md:text-lg text-sm'>{edu.address}</h3>
                    <p className='md:text-lg text-sm md:my-3 my-2 font-semibold'>{edu.marks}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Education
