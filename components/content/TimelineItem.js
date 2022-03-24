import { Typography } from "@mui/material";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => {
    return createStyles({
        event: {
            borderBottom: "1px solid rgba(160, 160, 160, 0.2)",
            paddingBottom: 15,
            marginBottom: 20,
            position: "relative",
            '&:before': {
                position: "absolute",
                display: "block",
                top: 0
            },
            '&:after': {
                boxShadow: `0 0 0 8px ${theme.palette.primary.main}`,
                left: -30,
                background: "#fff",
                borderRadius: "50%",
                height: 11,
                width: 11,
                content: "close-quote",
                top: 5,
                position: "absolute",
                display: "block"
            },
            '&:last-of-type': {
                paddingBottom: 0,
                marginBottom: 0,
                border: "none"
            }
        },
        company: {
            fontWeight: 600,
            color: theme.palette.text.secondary
        },
        title: {
            fontWeight: 600,
            marginBottom: theme.spacing(1)
        },
        date: {
            fontWeight: 400,
            color: theme.palette.text.secondary,
            float: 'right',
            textAlign: 'right'
        }
    })
});

const TimelineItem = ({...props}) => {

    const classes = useStyles();

    return (

        <li className={classes.event}>
            <Typography variant="subtitle1" className={classes.company}>{props.company}</Typography>
            <Typography variant="h5" className={classes.title}>
                {props.title}
                <Typography variant="subtitle1" component="span" className={classes.date}>{props.date}</Typography>
            </Typography>
            <Typography variant="body1" style={{whiteSpace: "pre-wrap"}}>{props.description}</Typography>
        </li>

    );

}

export default TimelineItem;
















/*

<div class="row">
        <div class="col s12 m12 l12">
          <ul class="timeline">
            <li class="event">
              <h3>Management and Entreprenurship (MSc)</h3>
              <p>
                This September 2015 I will begin an MSc in Management and Entrepreneurship at University of Sussex, to broaden my knowledge and gain skills necessary for my future in business and management.
              </p>
            </li>
          </ul>
        </div>
      </div>

 */
