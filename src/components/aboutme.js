
import Img from '../imgs/images.png'

function AboutMe() {
    return (
        <div className="container container-padding">
            <div className="row">
                <div className="col-sm-6">
                    <img src={Img}/>
                </div>
                <div className="col-sm-6">
                    <h2>About Me</h2>
                    <p>
                        Hello, I’m .... web-developer based on Paris. I have rich experience in web site design & building and customization. Also I am good at
                    </p>
                    <a href="">Download CV</a>
                </div>
            </div>
        </div>
    );
  }
  
  export default AboutMe;