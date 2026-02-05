import { Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const ContentTitle = ({...props}) => {
    const theme = useTheme();

    const titleStyle = {
        fontWeight: 600,
        margin: theme.spacing(6),
        letterSpacing: 2,
        textTransform: 'uppercase',
        textAlign: 'center'
    };

    return (
        <Typography variant="h5" align="left" color="textSecondary" sx={titleStyle}>
            {props.value}
        </Typography>
    );

}

export default ContentTitle;
