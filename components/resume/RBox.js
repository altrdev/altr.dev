import { Grid, Typography } from "@mui/material";
import Icon from "@mdi/react";

const RBox = ({icon,text,children}) => {
    const spacerStyle = {
        paddingBottom: 50
    };

    const titleStyle = {
        fontWeight: 600,
    };

    const boxDescStyle = {
        padding: 5
    };

    return (
        <div style={spacerStyle}>
            <Grid container alignItems="flex-end" spacing={2}>
                <Grid item>
                    <Icon path={icon} color="secondary" size={1.2} />
                </Grid>
                <Grid item>
                    <Typography variant="h4" sx={titleStyle}>
                        {text}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="body1" align="left" sx={boxDescStyle} component="div">
                {children}
            </Typography>
        </div>

    );

}

export default RBox;