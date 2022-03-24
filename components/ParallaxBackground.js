import Background from '../public/images/background_image.jpg';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => {
    return createStyles({
        parallax: {
            /* The image used */
            backgroundImage: `url(${Background.src})`,
            minHeight: 400,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: 0.7,
            filter: 'alpha(opacity=50)'
        }
    })
});

const ParallaxBackground = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.parallax}></div>
        </div>
    );

}

export default ParallaxBackground;