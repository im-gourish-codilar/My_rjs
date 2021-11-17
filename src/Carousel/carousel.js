import React  from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

import  Image from '../files/mercar.jpeg';
import  Image1  from '../files/mercar1.jpeg';
import  Image2  from '../files/mercar2.jpeg';
import  Image3  from '../files/mercar3.jpeg';
import  Image4  from '../files/mercar4.jpeg';
import  Image5  from '../files/mercar5.jpeg';



const Carouselcontainer =()=> {
    return (
        <Carousel fade>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image1}
      alt="Second slide" />

    <Carousel.Caption className="first">
      <h1>The EQE</h1>
      <button className="btn1"><p className="btntxt1"> Learn more about the EQE</p></button>
      <p>EQE 350 vorläufige Angaben WLTP:
         Stromverbrauch kombiniert: 19,3–15,7 kWh/100 km;
       CO₂-Emissionen kombiniert: 0 g/km.</p>
       <p>Angaben zum Stromverbrauch und zur Reichweite sind vorläufig 
         und wurden intern nach Maßgabe der Zertifizierungsmethode „WLTP-Prüfverfahren“ ermittelt. 
         Es liegen bislang weder bestätigte Werte vom TÜV noch eine EG-Typgenehmigung noch eine 
         Konformitätsbescheinigung mit amtlichen Werten vor. 
         Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich. </p>
    </Carousel.Caption >
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image4}
      alt="Second slide"/>

    <Carousel.Caption className="second">
      <h3>The Concept EQG.</h3>
     <button className="btn2"><p className="btntxt1"> Learn more about the EQG</p></button>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image2}
      alt="Third slide" />

    <Carousel.Caption className="third">
      <h3>The Concept Mercedes-Maybach EQS.</h3>
      <button className="btn3"> <p className="btntxt1"> Learn more about the Concept Mercedes-Maybach EQS</p></button>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image3}
      alt="Fourth slide" />

    <Carousel.Caption className="fourth">
      <h3>The New EQB</h3>
      <button className="btn4"><p className="btntxt1"> Learn more about the EQB</p></button>
    </Carousel.Caption>
  </Carousel.Item>

  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image}
      alt="First slide"/>
    <Carousel.Caption className="fifth">
      <h3> IAA MOBILITY 2021. </h3>
     <button className="btn5"><p className="btntxt1"> Learn more about the EQE</p></button>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image5}
      alt="Sixth slide"/>

    <Carousel.Caption className="sixth">
      <h3>The new EQS. This is for you, world.</h3>
      <button className="btn6"><p className="btntxt1"> Learn more about the EQS</p></button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )    
}
export default Carouselcontainer;