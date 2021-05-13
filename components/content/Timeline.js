import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';


const styles = theme => ({

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

});

class Timeline extends Component {
    render() {
        const { classes, children } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <div className="row">
                    <div className="col s12 m12 l12">
                        <ul className={classes.timeline}>
                            {children}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    } 
}

/*
<li className={classes.event}>
                                <h3>Management and Entreprenurship (MSc)</h3>
                                <p>
                                    This September 2015 I will begin an MSc in Management and Entrepreneurship at University of Sussex, to broaden my knowledge and gain skills necessary for my future in business and management.
                                </p>
                            </li>

*/

Timeline.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles) (Timeline);
















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