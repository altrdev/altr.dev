import Up from '@material-ui/icons/KeyboardArrowUp';
import {createStyles, makeStyles, Fab} from "@material-ui/core";

const useStyles = makeStyles(theme => {
    return createStyles({
        fabButton: {
            position: 'absolute',
            zIndex: 1,
            top: -30,
            left: 0,
            right: 0,
            margin: '0 auto',
        }
    })
});

const ScrollButton = ({...props}) => {

    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;

        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / props.delayInMs);
        }
    };

    const classes  = useStyles(props);
        
    return (
        <Fab color="primary" onClick={()=>scrollToTop()} aria-label="Go to top" className={classes.fabButton}>
            <Up />
        </Fab>
    );

}

export default ScrollButton;