import { Box, Typography } from "@mui/material";

export default function SupportUs() {
    return(
        <div id="resource-title">
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
        </div>
    )
}
