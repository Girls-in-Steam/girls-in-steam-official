import { Grid, Typography, IconButton } from "@mui/material";
import "./../styles/Events.css";
import "./../../fonts/JosefinSans-VariableFont_wght.ttf";
import "./../../fonts/Rastano.ttf";
import chatimeevent from "./../images/chatimeevent.png";
import pilatesevent from "./../images/pilatesevent.png";
import workshopevent from "./../images/workshopevent.png";
import cmdfevent from "./../images/cmdfevent.png";
import ubcevent from "./../images/ubcevent.png";
import { ArrowForward } from "@mui/icons-material";
import rightarrow from "./../images/rightarrow.png";

export default function Events() {
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
        <div className="shadow-rectangle-events">
          <div className="events-photo-wrapper">
            <img
              src={chatimeevent}
              alt="Girls in STEAM Exec team"
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
              Upcoming Event:
            </Typography>
          </div>
        </div>
        <div className="shadow-rectangle-events">
          <div className="events-photo-wrapper">
            <img
              src={pilatesevent}
              alt="Girls in STEAM Exec team"
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
              A Pilates ParTEA:
            </Typography>
          </div>
        </div>
        <div className="shadow-rectangle-events">
          <div className="events-photo-wrapper">
            <img
              src={cmdfevent}
              alt="Girls in STEAM Exec team"
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
              Intro to Design:
            </Typography>
          </div>
        </div>
        <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IconButton color="#FFFFFF" aria-label="More">
              <img src={rightarrow} alt="next" />
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
