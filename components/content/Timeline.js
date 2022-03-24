import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => {
    return createStyles({
        timeline: {
            borderLeft: `8px solid ${theme.palette.primary.main}`,
            borderBottomRightRadius: 2,
            borderTopRightRadius: 2,
            boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
            color: "#333",
            margin: "50px auto",
            letterSpacing: 0.5,
            position: "relative",
            lineHeight: "1.4em",
            padding: 20,
            listStyle: "none",
            textAlign: "left"
        }
    })
});

const Timeline = ({...props}) => {

    const classes = useStyles();
    return (
        <div className="row">
            <div className="col s12 m12 l12">
                <ul className={classes.timeline}>
                    {props.children}
                </ul>
            </div>
        </div>
    );

}

export default Timeline;