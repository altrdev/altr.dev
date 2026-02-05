import { Divider } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const CustomDivider = () => {
    const theme = useTheme();
    
    const dividerStyle = {
        backgroundColor: theme.palette.primary.main,
        width: 50,
        height: 3,
        marginBottom: theme.spacing(1)
    };

    return (
        <Divider variant="fullWidth" sx={dividerStyle}/>
    );

}

export default CustomDivider;
