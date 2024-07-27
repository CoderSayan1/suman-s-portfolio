import React from 'react'

function Skills() {
    const skillSet = [
        {
            id: 1,
            name: "Agriculture Practices",
            subSkill: ["Crop Management", "Oyster Mushroom", "Spawn Production", "Sustainable Farming"]
        }, 
        {
            id: 2,
            name: "Technical Proficiency",
            subSkill: ["MS Word", "MS Excel", "MS Powerpoint"]
        },
        {
            id: 3,
            name: "Soft Skills",
            subSkill: ["Problem Solving", "Teamwork", "Communication"]
        },
        {
            id: 4,
            name: "Language Proficiency",
            subSkill: ["Bengali", "Hindi", "English"]
        }
    ]
  return (
    <div className='md:px-20 px-10 md:py-6 py-3 flex flex-col items-center md:justify-center md:h-screen h-full ' id='skill'>
      <h1 className='md:text-4xl text-2xl text-center  font-bold mb-4'><span className='underline'>My</span> <span className='text-cyan-500'>Skills</span></h1>
      <div className='grid md:grid-cols-4 grid-cols-1 w-full'>
      {skillSet.map((skill) => (
            <div className='md:my-6 my-2 md:mx-2 mx-1 md:p-8 p-2 rounded-xl shadow-style hover:translate-y-2 hover:cursor-pointer' key={skill.id}>
                <h1 className='md:text-2xl text-xl font-bold md:mb-4 mb-2'>{skill.name}</h1>
                <div>
                    {skill.subSkill.map((sub, index) => (
                        <li key={index}  className="md:text-xl text-lg hover:text-[#081b29] hover:bg-[#0ef] hover:shadow-lg md:p-2 p-1 md:mb-2 mb-1 rounded transition duration-300">{sub}</li>
                    ))}
                </div>
            </div>
      ))}
      </div>
    </div>
  )
}

export default Skills
