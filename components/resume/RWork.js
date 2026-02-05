import { Grid, Typography } from "@mui/material";
import Icon from "@mdi/react";
import {mdiCalendar} from '@mdi/js'

const RWork = ({...props}) => {
    const containerStyle = {
        paddingTop: 20,
    };

    const titleStyle = {
        fontWeight: 600,
    };

    const dateStyle = {
        fontWeight: 500,
        color: "#212529"
    };

    const boxDescStyle = {
        padding: "10px 0px"
    };

    const contrastTitleStyle = {
        borderRadius: ".25rem",
        backgroundColor: "#33333d",
        color: "#fff",
        padding: "5px 8px",
        lineHeight: 2
    };

    return (
        <div style={containerStyle}>
            <Grid container>
                <Grid item>
                    <Typography variant="h5" sx={titleStyle}>
                        <span style={contrastTitleStyle}>{props.title}</span> at {props.company}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center">
                <Grid item style={{ verticalAlign: "middle", display: "inline-flex"}}>
                    <Icon path={mdiCalendar} color="#212529" size={0.8} />
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" sx={dateStyle}>
                        {props.date}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="body1" align="left" sx={boxDescStyle} style={{whiteSpace: "pre-wrap"}}>
                {props.description}
            </Typography>
        </div>

    );

}

export default RWork;