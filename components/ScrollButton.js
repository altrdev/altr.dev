import Up from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from "@mui/material";

const ScrollButton = ({...props}) => {

    let scrollAnimationId = null;

    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;

        if (c > 10) {
            scrollAnimationId = window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / props.delayInMs);
        } else {
            window.scrollTo(0, 0);
            if (scrollAnimationId) {
                window.cancelAnimationFrame(scrollAnimationId);
                scrollAnimationId = null;
            }
        }
    };

    const fabButtonStyle = {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    };
        
    return (
        <Fab color="primary" onClick={()=>scrollToTop()} aria-label="Go to top" sx={fabButtonStyle}>
            <Up />
        </Fab>
    );

}

export default ScrollButton;