import logo from './logo.svg';
import Nav from './components/nav'
import Banner from './components/banner'
import AboutMe from './components/aboutme'
import WhatIDo from './components/whatIdo'


function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav/>
        <Banner/>
        <AboutMe/>
        <WhatIDo/>
      </div>
    </div>
  );
}

export default App;
