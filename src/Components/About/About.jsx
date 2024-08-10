import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.png'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile} alt=''/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am a dedicated and skilled front-end developer with hands-on experience in a variety of technologies. Throughout my internships and personal projects, I have gained extensive experience with modern JavaScript frameworks and libraries, including React.js, Next.js, and Node.js.</p>
                    <p>My expertise also extends to both relational and non-relational databases. I hold a BS in Computer Science from The Islamia University of Bahawalpur and have developed several full-stack web applications, enhancing my skills in full-stack web development.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Html & CSS</p> <hr style={{width : '70%'}}/> </div>
                    <div className="about-skill"><p>Tailwind CSs</p> <hr style={{width : '50%'}}/> </div>
                    <div className="about-skill"><p>React Js</p> <hr style={{width : '60%'}}/> </div>
                    <div className="about-skill"><p>NOde JS</p> <hr style={{width : '50%'}}/> </div>
                </div>
            </div>
        </div>
        {/* <div className="about-achievements">
            <div className="about-achievement">
                <h1>200+</h1>
                <p>Projects Completed</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>100+</h1>
                <p>Happy Clients</p>
                </div>
            <hr/>
            <div className="about-achievement">
                <h1>100+</h1>
                <p>Happy Clients</p>
                </div>
            
        </div> */}
      
    </div>
  )
}

export default About
