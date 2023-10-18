import { Box, Typography, Link } from "@mui/material";
import { RESOURCE_DATA } from './../data/ResourceData'
import "../styles/Resources.css";

function ResourceBox(resourceDescrption, link) {
    return(
        <div className = "resource-box">
            <Typography variant="body1" sx={{color: 'black'}}>
                {resourceDescrption}
            </Typography>
            <Typography variant="body2" sx={{color: 'black'}}>
                {link}
            </Typography>
        </div>
    )
}

function ResourceColumn(resourceData) {
    let resources = [];
    let columnTag = resourceData[0]; //gets hashtag from first element
    for(let i=1 ; i<resourceData.length ; i++){
        resources.push(
            ResourceBox(resourceData[i][0], resourceData[i][1])
        )
    }

    return(
        <div className = "resource-column">
            <div className="column-hastag">
                <Typography variant="body1">
                    {columnTag}
                </Typography>
            </div>
            {resources}
        </div>
    )
}

export default function Resources() {
    let resourceColumns = []
    for(let i=0 ; i<RESOURCE_DATA.length ; i++){
        resourceColumns.push(ResourceColumn(RESOURCE_DATA[i]))
    }

    return(
        <div className="resources-container">
            <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'row-reverse',
                    marginRight: '10px'
                }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                    }}
                >
                    RESOURCES
                </Typography>
            </Box>
            <div className = "columns-container">
                {resourceColumns}
            </div>
        </div>
    )
}
