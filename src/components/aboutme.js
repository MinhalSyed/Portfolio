
import Img from '../imgs/images.png';
import Resume from '../assets/MinhalSyed-Resume.pdf';

function AboutMe() {
    return (
        <div className="container container-padding">
            <div className="row">
                <div className="col-sm-6">
                    <img src={Img}/>
                </div>
                <div className="col-sm-6 text-center vertical-center">
                    <h2>About Me</h2>
                    <p>
                        Hello my name is Minhal Syed and I am back end developer based in Toronto, Canada.
                        I love writing high performance code. I mainly work in C#.
                    </p>
                    <a href={Resume}>Download CV</a>
                </div>
            </div>
        </div>
    );
  }
  
  export default AboutMe;