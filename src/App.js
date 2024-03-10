
import './App.css';
import { Hero, Navbar, Skills, WorkExperience, ContactMe, Footer, Projects } from './components'


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
       
        <WorkExperience />
        <Projects />
      
        <ContactMe />
        <Footer />
        
      </div>
    </>
  );
}

export default App;
