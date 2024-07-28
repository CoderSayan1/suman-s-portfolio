import React from 'react'

function Works() {
    const exp = [
        {
            id: 1,
            name: "Experimental learning program",
            institute: "School of Agriculture and Allied Sciences",
            address: "TNU South 24 Parganas, West Bengal, India",
            date: "Jan-2024 to Jun-2024"
        },
        {
            id: 2,
            name: "Agricultural Industrial Attachment",
            institute: "Rallis India Ltd. (A TATA Enterprise), Internship Trainee",
            address: "Barasat, West Bengal, India",
            date: "Nov-2023 to Dec-2023"
        },
        {
            id: 3,
            name: "ATC Internship",
            institute: "Agricultural Training Centre, Internship Trainee",
            address: "Chinsurah, West Bengal, India",
            date: "Sep-2023 to Nov-2023"
        },
        {
            id: 4,
            name: "Rural Agricultural Work Experience",
            institute: "School of Agriculture and Allied Sciences",
            address: "TNU South 24 Parganas, West Bengal, India",
            date: "July-2023 to Sep-2023"
        }
    ]
  return (
    <div className=' w-full flex flex-col md:flex-row items-center md:justify-between md:h-screen h-full  md:px-20 px-10 md:py-6 py-3 md:my-0 my-12' id='work'>
        <h1 className='md:text-4xl text-2xl text-center  font-bold mb-4 md:w-1/4 w-full'><span className='underline'>Work</span> <span className='text-cyan-500'>Experience</span></h1>
        <div className='md:w-3/4 w-full'>
            {exp.map((experience) => (
                <div className='md:p-4 p-2 mb-2 rounded-xl shadow-style hover:translate-x-2 hover:cursor-pointer' key={experience.id}>
                    <h2 className='md:text-2xl text-xl'>{experience.name}</h2>
                    <h3>{experience.date}</h3>
                    <p className='md:text-lg text-sm md:mt-3 mt-1'>{experience.institute}</p>
                    <p>{experience.address}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Works
