import React, { useState } from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./../styles/Events.css";
import chatimeevent from "./../images/chatimeevent.png";
import pilatesevent from "./../images/pilatesevent.png";
import cmdfevent from "./../images/cmdfevent.png";
import workshopevent from "./../images/workshopevent.png";
import ubcevent from "./../images/ubcevent.png";
import contactevent from "./../images/contactevent.png";
import leftArrowWhite from "./../images/left-arrow-white.svg";
import rightArrowWhite from "./../images/right-arrow-white.svg";

export default function Events() {
  const eventImages = [
    chatimeevent,
    pilatesevent,
    cmdfevent,
    workshopevent,
    ubcevent,
    contactevent,
  ];

  const eventTitles = [
    "Upcoming Event",
    "A Pilates ParTEA",
    "Balancing Anything and",
    "Intro to Design Thinking",
    "STEAM Through College & Beyond",
    "",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? eventImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <Grid container spacing={2} className="events-container">
      <Grid item xs={12} sm={6}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "left",
            color: "#FFFFFF",
            fontFamily: "Josefin Sans",
            fontWeight: "bold",
          }}
        >
          EVENTS
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} className="events">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IconButton
            style={{ color: "#FFFFFF" }}
            aria-label="Previous"
            onClick={handlePrevClick}
            className="alice-carousel__prev-btn"
          >
            <img src={rightArrowWhite} alt="Previous" />
          </IconButton>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Josefin Sans",
              color: "#FFFFFF",
              textAlign: "left",
            }}
          >
            BACK
          </Typography>
        </div>
        <AliceCarousel
          items={eventImages.map((imgSrc, index) => (
            <div key={index} className="shadow-rectangle-events">
              <div className="events-photo-wrapper">
                <img
                  src={imgSrc}
                  alt={`Event ${index + 1}`}
                  className="photo"
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Josefin Sans",
                    color: "black",
                    marginTop: "15px",
                    marginLeft: "15px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  {eventTitles[index]}
                </Typography>
              </div>
            </div>
          ))}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            900: { items: 3 },
          }}
          animationDuration={500}
          disableDotsControls
          disableButtonsControls
          activeIndex={activeIndex}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IconButton
            style={{ color: "#FFFFFF" }}
            aria-label="Next"
            onClick={handleNextClick}
            className="alice-carousel__next-btn"
          >
            <img src={leftArrowWhite} alt="Next" />
          </IconButton>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Josefin Sans",
              color: "#FFFFFF",
              textAlign: "left",
            }}
          >
            NEXT
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
