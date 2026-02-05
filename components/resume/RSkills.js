import { Box, Typography, Paper } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Icon from "@mdi/react";
import {mdiStar} from "@mdi/js";

const RSkills = ({textProficient,textComfortable,textFamiliar}) => {
    const theme = useTheme();

    const starsStyle = {
        verticalAlign: "text-top",
        paddingRight: "5px",
        color: theme.palette.primary.main
    };

    const skillBoxStyle = {
        flex: { xs: '0 0 100%', sm: '0 0 100%', md: 'calc(50% - 8px)', lg: 'calc(33.333% - 11px)' },
        paddingBottom: "10px",
        textAlign: 'center'
    };

    const contentStyle = {
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        wordBreak: 'break-word'
    };

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: theme.spacing(2)
        }}>
            <Box sx={skillBoxStyle}>
                <Typography variant="h6">
                    <span style={starsStyle}>
                        <Icon path={mdiStar} size="1.5rem"/>
                        <Icon path={mdiStar} size="1.5rem" style={{opacity: ".75"}}/>
                        <Icon path={mdiStar} size="1.5rem" style={{opacity: ".5"}}/>
                    </span>
                    Proficient
                </Typography>
                <div style={contentStyle}>
                    {textProficient}
                </div>
            </Box>
            <Box sx={skillBoxStyle}>
                <Typography variant="h6">
                    <span style={starsStyle}>
                        <Icon path={mdiStar} size="1.5rem" style={{opacity: ".75"}}/>
                        <Icon path={mdiStar} size="1.5rem" style={{opacity: ".5"}}/>
                    </span>
                    Comfortable
                </Typography>
                <div style={contentStyle}>
                    {textComfortable}
                </div>
            </Box>
            <Box sx={skillBoxStyle}>
                <Typography variant="h6">
                    <span style={starsStyle}>
                        <Icon path={mdiStar} size="1.5rem" style={{opacity: ".5"}}/>
                    </span>
                    Familiar
                </Typography>
                <div style={contentStyle}>
                    {textFamiliar}
                </div>
            </Box>
        </Box>
    );

}

export default RSkills;