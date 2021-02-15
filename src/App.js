import logo from './logo.svg';
import Nav from './components/nav'
import Banner from './components/banner'
import AboutMe from './components/aboutme'
import WhatIDo from './components/whatIdo'
import FeaturedProjects from './components/featuredprojects'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav/>
        <Banner/>
        <AboutMe/>
        <WhatIDo/>
        <FeaturedProjects/>
      </div>
    </div>
  );
}

export default App;
