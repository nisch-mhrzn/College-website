import About from "./components/ABout/About"
import Campus from "./components/Campus/Campus"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Programs from "./components/Programs/Programs"
import Title from "./components/Title/Title"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
    <Title subTitle ='Our Programs' title='What we offer'/>
      <Programs/>
      <About/>
      <Title subTitle ='Gallery' title='Campus Photos'/>
      <Campus/>
      </div>
    </div>
  )
}

export default App