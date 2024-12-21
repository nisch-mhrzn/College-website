import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt='' className='about-img' />
        <img src={play_icon} alt='' className='play-icon' />
      </div>
      <div className='about-right'>
        <h3>About University</h3>
        <h2>Nurturing Tomorrow&apos; Leaders Today</h2>
        <p>
          The university is dedicated to fostering an environment that nurtures
          the leaders of tomorrow. With a commitment to academic excellence and
          innovative research, we provide students with the tools and knowledge
          necessary to thrive in an ever-evolving world.
        </p>
        <p>
          Our diverse community encourages collaboration and creativity,
          allowing students to explore their passions and develop critical
          thinking skills.
        </p>
        <p>
          Through a comprehensive curriculum and a range of extracurricular
          activities, we prepare our graduates to make meaningful contributions
          to society and excel in their chosen fields. Join us in our mission to
          shape the future and empower the next generation of leaders.
        </p>
      </div>
    </div>
  )
}

export default About
