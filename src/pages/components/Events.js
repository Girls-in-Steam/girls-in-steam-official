import { Grid, Typography } from "@mui/material";
import "./../styles/Events.css";
import "./../../fonts/JosefinSans-VariableFont_wght.ttf";
import "./../../fonts/Rastano.ttf";
import chatimeevent from "./../images/chatimeevent.png";

export default function Events() {
  return (
    <Grid container spacing={2} className="events">
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
      <Grid item xs={12} sm={12} className="events-container">  
        <div className="shadow-rectangle-events">
          <div className="photo-wrapper">
            <img src={chatimeevent} alt="Girls in STEAM Exec team" className="photo" />
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
              Upcoming Event:
            </Typography>
          </div>
        </div>
        <div className="shadow-rectangle-events">
          <div className="photo-wrapper">
            <img src={chatimeevent} alt="Girls in STEAM Exec team" className="photo" />
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
              Upcoming Event:
            </Typography>
          </div>
        </div>
        <div className="shadow-rectangle-events">
          <div className="photo-wrapper">
            <img src={chatimeevent} alt="Girls in STEAM Exec team" className="photo" />
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
              Upcoming Event:
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}