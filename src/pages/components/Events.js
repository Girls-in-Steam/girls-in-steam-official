import React, { useState } from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./../styles/Events.css";
import { eventData } from "../data/eventData";
import leftArrowWhite from "./../images/left-arrow-white.svg";
import rightArrowWhite from "./../images/right-arrow-white.svg";

// Event Card component
function EventCard({ event, onClick }) {
  return (
    <div className="photo-border-events">
      <div className="event-card">
        <img
          src={event.imgSrc}
          alt={`Event`}
          className="event-image"
          onClick={() => onClick(event.instagramLink)}
        />
      </div>
      <div className="event-card-description">
        <Typography variant="body" className="event-title">
          {event.title}
        </Typography>
        <Typography variant="body" className="event-details">
          {event.description}
        </Typography>
      </div>
    </div>
  );
}

// Events component
export default function Events() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showBackButton, setShowBackButton] = useState(false);

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < eventData.length - 3 ? prevIndex + 3 : prevIndex
    );
    setShowBackButton(activeIndex !== 1);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex >= 3 ? prevIndex - 3 : 0));
  };

  const handleCardClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="events-container">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={5}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: "left",
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
            }}
          >
            EVENTS
          </Typography>
        </Grid>
        <Grid item xs={6} sm={12} className="events">
          <div className="button-container">
            {activeIndex > 0 && (
              <IconButton
                style={{ color: "#FFFFFF" }}
                aria-label="Previous"
                onClick={handlePrevClick}
                className="alice-carousel__prev-btn"
              >
                <div className="button-content">
                  <img src={rightArrowWhite} alt="Previous" />
                  <Typography>BACK</Typography>
                </div>
              </IconButton>
            )}
          </div>
          <AliceCarousel
            items={eventData
              .slice(activeIndex, activeIndex + 3)
              .map((event, index) => (
                <EventCard
                  key={index}
                  event={event}
                  onClick={handleCardClick}
                />
              ))}
            responsive={{
              0: { items: 1 },
              600: { items: 2 },
              900: { items: 3 },
            }}
            disableDotsControls
            disableButtonsControls
            activeIndex={0}
          />
          <div className="button-container" style={{ marginLeft: "20px" }}>
            {activeIndex < eventData.length - 3 && (
              <IconButton
                style={{ color: "#FFFFFF" }}
                aria-label="Next"
                onClick={handleNextClick}
                className="alice-carousel__next-btn"
              >
                <div className="button-content">
                  <img src={leftArrowWhite} alt="Next" />
                  <Typography>NEXT</Typography>
                </div>
              </IconButton>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}