import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import CustomDivider from './CustomDivider';
import TableIntro from './TableIntro';
import Icon from '@mdi/react'
import { mdiLinkedinBox, mdiInstagram, mdiGithubCircle, mdiTwitter } from '@mdi/js'
import AvatarImage from '../images/Profile_square.jpg';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      [theme.breakpoints.up(1200 + theme.spacing.unit * 2 * 2)]: {
        width: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
      }
    },
    floatingPaper: {
      marginTop: - theme.spacing.unit * 30,
      //marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 2,
      opacity: 0.99,
      borderRadius: 0,
      [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
        //marginTop: - theme.spacing.unit * 30,
        //marginBottom: theme.spacing.unit * 6,
        padding: theme.spacing.unit * 3
      }
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: 'none'
    },
    appBar: {
      top: 'auto',
      bottom: 0,
      position: 'relative'
    },
    toolbar: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    bigAvatar: {
      margin: 'auto',
      width: 230,
      height: 230,
      marginBottom: theme.spacing.unit * 2,
    },
    name: {
      fontWeight: 800,
      marginBottom: theme.spacing.unit,
      textTransform: 'uppercase',
      letterSpacing: 2
    },
    work: {
      fontWeight: 600,
      marginBottom: theme.spacing.unit,
      textTransform: 'uppercase',
      letterSpacing: 2
    },
    title: {
      fontWeight: 600,
      marginBottom: theme.spacing.unit * 0.5,
      letterSpacing: 2,
      textTransform: 'uppercase',
    },
    description: {
      marginBottom: theme.spacing.unit * 5 
    },
    icon: {
      fill: theme.palette.primary.contrastText,
      marginRight: 10,
      marginLeft: 10
    }
});

let id = 0;
function createData(name, link) {
  id += 1;
  return { id, name, link };
}

const text = ({
  name: "Alessandro Travi",
  workTitle: "Crazy Software Engineer",
  titles: {
    aboutMe: "About me"
  },
  description: "I’m a software engineer always willing to put myself out there and push myself beyond my limits.\nRight after high school diploma, while working as postman, I started challenging myself with both personal side-projects and freelance consulting.\nI'm not sure what being a 'self starter' means, but people tends to call me that.",
  icons: [
    createData(mdiLinkedinBox, "https://www.linkedin.com/in/alessandrotravi/?locale=en_US"),
    createData(mdiGithubCircle, "https://github.com/altrdev/"),
    createData(mdiInstagram, "https://www.instagram.com/alessandro.travi/"),
    createData(mdiTwitter, "https://twitter.com/altrdev")
  ]
});

class FloatingIntro extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.layout}>
                    <Paper className={classes.floatingPaper}>
                      <Grid container spacing={16}>
                        <Grid item xs={12} sm={6}>
                          <Paper className={classes.paper}>
                            <Avatar alt="Alessandro Travi" src={AvatarImage} className={classes.bigAvatar} />
                            <Typography component="h1" variant="h4" align="center" color="primary" className={classes.name}>
                              {text.name}
                            </Typography>
                            <Typography variant="subtitle1" align="center" color="textSecondary" className={classes.work}>
                              {text.workTitle}
                            </Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Paper className={classes.paper}>
                            <Typography variant="h6" align="left" color="textSecondary" className={classes.title}>
                              {text.titles.aboutMe}
                            </Typography>
                            <CustomDivider/>
                            <Typography variant="body1" align="left" className={classes.description}>
                              {text.description}
                            </Typography>
                            <TableIntro/>
                          </Paper>
                        </Grid>
                      </Grid>
                    </Paper>
                    <AppBar className={classes.appBar}>
                      <Toolbar className={classes.toolbar}>
                        <div style={{margin: 'auto'}}>
                          {text.icons.map(icon => (
                              <Link key={icon.id} href={icon.link} target="_blank" rel="noopener" color="inherit" className={classes.link}>
                                <Icon path={icon.name} size={1} className={classes.icon}/>
                              </Link>
                          ))}
                        </div>
                      </Toolbar>
                    </AppBar>
                </main>
            </React.Fragment>
        );
    }
}

FloatingIntro.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles) (FloatingIntro);