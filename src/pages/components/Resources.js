import { Typography } from "@mui/material";
import { resourceData} from '../data/resourceData'
import "../styles/Resources.css";

function ResourceLittleBox(contentTitle, link) {
    return(
        <div className = "resource-box" 
            onClick={(e) => {
                e.preventDefault();
                window.location.href= link;
            }}>
            <Typography variant="body1" sx={{color: '#54547E', textDecoration: 'underline'}}>
                {contentTitle + '→'} 
            </Typography>
        </div>
    )
}

function ResourceTallBox(columnData) {
    let resources = [];
    let columnTag = columnData.title; //gets hashtag from first element
    for(let i=0 ; i<columnData.content.length ; i++){
        resources.push(
            ResourceLittleBox(columnData.content[i].title, columnData.content[i].link)
        )
    }

    return(
        <div className = "resource-column">
            <div className="column-hashtag" style={{backgroundColor: columnData.titleColour}}>
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
    for(let i=0 ; i<resourceData.length ; i++){
        resourceColumns.push(ResourceTallBox(resourceData[i]))
    }

    return(
        <>
            <div className="resource-title-container">
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                    }}
                >
                    RESOURCES
                </Typography>
            </div>
                
            <div className = "columns-container">
                {resourceColumns}
            </div>
        </>
    )
}
