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
      </div>
    </div>
  )
}

export default App