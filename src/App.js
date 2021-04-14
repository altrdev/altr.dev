import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import FloatingIntro from './components/FloatingIntro';
import ParallaxBackground from './components/ParallaxBackground';
import ContentResume from './components/content/ContentResume';
import Footer from './components/Footer';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './animate.css';


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

const styles = theme => ({
  progress: {
    display: "block",
    justifyContent: "center",
    margin: "auto"
  },
  containerDiv: {
    height: 200,
    position: "absolute",
    margin: "auto",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    letterSpacing: 2,
    textTransform: 'uppercase'
  },
  loading: {
    marginTop: theme.spacing(1)
  }
});

class App extends Component {
  constructor(props){
      super(props);

      this.state = {loading: true}
  }

  componentDidMount(){

      this.setState({loading: false})

  }

  render() {
    const { classes } = this.props;

    if(this.state.loading){
      console.log("Loading...");
      return(
        <MuiThemeProvider theme={theme}>
          <React.Fragment>
            <div style={{width: "100%", height: "100vh"}}>
              <div className={classes.containerDiv}>
                <CircularProgress className={classes.progress} />
                <Typography variant="subtitle1" align="center" color="textSecondary" className={classes.loading}>
                  Loading Resume ...
                </Typography>
              </div>
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      );
    }

    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <div className="animateLoading">
            <CssBaseline/>
            <ParallaxBackground/>
            <FloatingIntro/>
            <ContentResume/>
            <Footer/>
            <script id="CookieDeclaration" src="https://consent.cookiebot.com/800b48d7-e6d0-4aac-b9ac-94d622bdac24/cd.js" type="text/javascript" async></script>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (App);
