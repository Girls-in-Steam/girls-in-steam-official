import "./../styles/Hero.css";
import { Button } from "@mui/material";
import "./../../fonts/JosefinSans-VariableFont_wght.ttf";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import pilates from './../images/pilates.jpg';
import facePainting from './../images/face_painting.jpg';
import cmdf from './../images/cmd-f.jpg';
import panel from './../images/panel.JPG';
import panel_2 from './../images/panel_2.jpeg';
import leftArrow from './../images/left-arrow.svg';
import rightArrow from './../images/right-arrow.svg';

export default function Hero() {
    return (
        <div className="Hero">
            <div className="row">
                <div className="info-column">
                    <h1 className="girls-in">girls in <br/></h1>
                    <h1 className="STEAM">STE<span style={{color: '#A6A8CE'}}>A</span>M</h1>
                    <h4 className="description">Supporting access to STEAM <br />education for girls, gender-diverse <br />people, and the LGBTQ+ community. </h4>
                    <Button className="get-involved" 
                                sx={{width: 200,
                                    backgroundColor: '#54547E',
                                    color: 'white',
                                    borderRadius: 4,
                                    fontFamily: 'Josefin Sans',
                                    fontSize: 18,
                                    }}
                                variant="contained">GET INVOLVED
                    </Button>
                </div>
                <div className="carousel-column">
                    <div className="hero-carousel">
                    <AliceCarousel autoPlay autoPlayInterval="3000" infinite="true" disableDotsControls="true"
                        renderNextButton={() => {
                        return <img className="left" src={leftArrow} alt="left-arrow" />
                      }}
                        renderPrevButton={() => {
                        return <img className="right" src={rightArrow} alt="right-arrow" />
                      }}>
                        <img className="slide-image" src={cmdf} alt="cmd-f"/>
                        <img className="slide-image" src={panel} alt="panel"/>
                        <img className="slide-image" src={pilates} alt="pilates"/>
                        <img className="slide-image" src={facePainting} alt="face painting"/>
                        <img className="slide-image" src={panel_2} alt="panel_2"/>
                    </AliceCarousel>
                    </div>
                </div>
            </div>
        </div>  
    );
}