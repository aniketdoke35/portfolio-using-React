import React from 'react'
import img6 from '../images/image 1.png';

const about = () => {
  return (
    <div className='about' id='about'>
      <div className='main'>
        <div className='avtar'>
       <img src={img6} alt="" />
        </div>
        <div className='about-me'>
        <h5>About Me</h5>
        <p> I'm Aniket Doke, a proficient web developer with over 2 years of experience. Specializing in HTML, CSS, JavaScript, and React, I craft dynamic, user-friendly websites. My focus on responsive design ensures seamless experiences on all devices. </p>
        <p>I thrive on understanding project intricacies, delivering tailored solutions. From e-commerce platforms to interactive blogs, I've honed my skills in diverse projects. My dedication to staying updated with industry trends reflects in every creation. </p>
        <p>Explore my portfolio to witness my commitment to functional, visually appealing web development. Let's collaborate and turn your ideas into exceptional online experiences.</p>
        <p>when I'm not coding, I enjoy spending time with my father at my Barbershop styling different hairstyles.</p>

        </div>
      </div>
    </div>
  )
}

export default about
