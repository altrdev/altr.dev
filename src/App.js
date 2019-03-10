import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import FloatingIntro from './components/FloatingIntro';
import ParallaxBackground from './components/ParallaxBackground';
import ContentResume from './components/ContentResume';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: '#0EB57D',
      contrastText: '#ffffff'
    }
    // error: will use the default color
  },
});

class App extends Component {
  render() {
    //const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline/>
        <ParallaxBackground/>
        <FloatingIntro/>
        <ContentResume/>
      </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme) (App);
