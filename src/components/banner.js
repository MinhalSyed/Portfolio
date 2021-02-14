
import Img from '../imgs/profile-photo (2).jpg';

function Banner() {
    return (
        <div className="container bg-light container-padding">
            <div className="row padding-home">
                <div className="col-sm-6 self-align-center text-center">
                    <h1>Minhal Syed</h1>
                    <p>Software Engineer</p>
                    <p>Mississauga, ON</p>
                </div>
                <div className="col-sm-6 self-align-center text-center">
                    <img src={Img} className="rounded-circle"/>
                </div>
            </div>
          
        </div>
    );
  }
  
  export default Banner;
  