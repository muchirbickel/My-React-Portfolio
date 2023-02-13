import { Button } from 'react-bootstrap';
import Typist from 'react-typist';
import './home.css'
import photo from './IMG_3095.jpg'


function Home() {

    return (
        <div className='container-fluid' id="home-div">
            <div className="home-container" > 
                <img src={photo} width={200} alt="My photo" id="home-img"/>  
                <br/>
                <Typist>
                    <h1>Hi! My name is Kouassi Kevin Kouadio,</h1>
                    <h1>I'am a Full Stack Web Developer </h1>
                    <h2>Feel free to contact me by clicking on the Button below...</h2>
                    <span><a className='btn btn-primary' href="#contact">Contact Me</a></span>
                </Typist>
            </div>
        </div>
    )
}
export default Home