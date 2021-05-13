import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

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
    },
});

class TimelineItem extends Component {
    render() {
        const { classes, title, company, description, date } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <li className={classes.event}>
                    <Typography variant="subtitle1" className={classes.company}>{company}</Typography>
                    <Typography variant="h5" className={classes.title}>
                        {title}
                        <Typography variant="subtitle1" component="span" className={classes.date}>{date}</Typography>
                    </Typography>
                    <Typography variant="body1" style={{whiteSpace: "pre-wrap"}}>{description}</Typography>
                </li>
            </React.Fragment>
        );
    }
}



TimelineItem.propTypes = {
    classes: PropTypes.object.isRequired,
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default withStyles(styles) (TimelineItem);
















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
