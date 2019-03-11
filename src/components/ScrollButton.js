import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import Up from '@material-ui/icons/KeyboardArrowUp';

const styles = theme => ({
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    }
});

class ScrollButton extends Component {
    constructor() {
        super();
    
        this.state = {
            intervalId: 0
        };
      }
      
      scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
      }
      
      scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
      }

    render() {
        const { classes } = this.props;
        
        return (
            <React.Fragment>
                <CssBaseline />
                <Fab color="primary" onClick={()=>this.scrollToTop()} aria-label="Go to top" className={classes.fabButton}>
                    <Up />
                </Fab>
            </React.Fragment>
        );
    } 
}

ScrollButton.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles) (ScrollButton);