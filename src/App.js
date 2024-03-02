
import './App.css';
import { Hero, Navbar, Skills, WorkExperience, ContactMe,Footer } from './components'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
