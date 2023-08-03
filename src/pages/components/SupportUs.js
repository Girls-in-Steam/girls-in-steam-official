import { Grid, Typography } from "@mui/material";
import map1 from "./../images/map1.png";
import steambbt from "./../images/steambbt.png";
import "./../styles/AboutUs.css";
import "./../../fonts/JosefinSans-VariableFont_wght.ttf";
import "./../../fonts/Rastano.ttf";
import thermoPlaceHolder from "./../images/thermo.png";

export default function SupportUs() {
  return (
    <Grid container spacing={2} className="container" >
      <Grid item xs={12} sm={6}>
        <div style={{ maxWidth: 600}}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: "left",
              color: "#ffffff",
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
              marginBottom: "36px",

            }}
          >
            SUPPORT US
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              textAlign: "left",
              marginLeft: "24px",
              marginBottom: "36px",
              color: "#54547E",
              fontFamily: "Josefin Sans",
            }}
          >
            Girls in STEAM appreciates your support.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "left",
              color: "#54547E",
              fontFamily: "Josefin Sans",
              marginLeft: "24px",
              marginBottom: "70px",
            }}
          >
            Join us in our journey to support access to STEAM education 
            for girls, women, gender-diverse* people, and the LGBT+ 
            community across North America.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        {/*
        <div className="shadow-rectangle">
          <div className="photo-wrapper">
            <img src={steambbt} alt="Girls in STEAM Exec team" className="photo" />
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Rastano",
                color: "black",
                marginTop: "15px",
              }}
            >
              Hello from the team ;)
            </Typography>
          </div>
        </div>
        */}
        <div style={{
          minHeight: '400px',
          minWidth: '200px'
        }}>
          <img src={thermoPlaceHolder} alt="image not found" style={{maxWidth: "220px"}}/>
        </div>
        <div>
          <button style={{
            minWidth: "250px", 
            minHeight: '80px', 
            backgroundColor: '#54547E', 
            borderRadius: '10px', 
            border: 'none', 
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',}}
            onClick={() => {window.open('https://example.com', '_blank')}}>
            <div> 
              <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Josefin Sans",
                    color: "white",
                    marginTop: "8px",
                    fontWeight: "bold",
                    padding: '20px'
                  }}
                >
                DONATE
              </Typography>
            </div>
          </button>
        </div>
      </Grid>
      {/*
    <Grid item xs={12} sx={{ margin: "0 2", backgroundColor: "green" }}>
        <Typography
          variant="h6"
          gutterbottom
          sx={{
            textAlign: "center",
            color: "#5A4067",
            fontFamily: "Josefin Sans",
            fontWeight: "medium",
            marginTop: "70px",
          }}
        >
          The Girls in STEAM team is based all across the world!
        </Typography>
        <img src={map1} alt="Map" style={{ width: "70%", height: "auto" }} />
      </Grid>
            */}
      
    </Grid>
  );
}