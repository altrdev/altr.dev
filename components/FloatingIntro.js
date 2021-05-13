import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import CustomDivider from './CustomDivider';
import TableIntro from './TableIntro';
import Icon from '@mdi/react'
import AvatarImage from '../public/images/Profile_square.jpg';
import Typography from '@material-ui/core/Typography';
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => {
    return createStyles({
        layout: {
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            [theme.breakpoints.up(1200 + theme.spacing(4))]: {
                width: 1200,
                marginLeft: 'auto',
                marginRight: 'auto',
            }
        },
        floatingPaper: {
            marginTop: - theme.spacing(30),
            //marginBottom: theme.spacing.unit * 3,
            padding: theme.spacing(2),
            opacity: 0.99,
            borderRadius: 0,
            [theme.breakpoints.up(600 + theme.spacing(6))]: {
                //marginTop: - theme.spacing.unit * 30,
                //marginBottom: theme.spacing.unit * 6,
                padding: theme.spacing(3)
            }
        },
        paper: {
            padding: theme.spacing(2),
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
            marginBottom: theme.spacing(2),
        },
        name: {
            fontWeight: 800,
            marginBottom: theme.spacing(1),
            textTransform: 'uppercase',
            letterSpacing: 2
        },
        work: {
            fontWeight: 600,
            marginBottom: theme.spacing(1),
            textTransform: 'uppercase',
            letterSpacing: 2
        },
        title: {
            fontWeight: 600,
            marginBottom: theme.spacing(0.5),
            letterSpacing: 2,
            textTransform: 'uppercase',
        },
        description: {
            marginBottom: theme.spacing(5),
            height: '100%'
        },
        icon: {
            fill: theme.palette.primary.contrastText,
            marginRight: 20,
            marginLeft: 20
        }
    })
});

const FloatingIntro = ({...props}) =>  {
    const classes = useStyles();
    return (
        <main className={classes.layout}>
            <Paper className={classes.floatingPaper}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                    <Avatar alt="Alessandro Travi" src={AvatarImage} className={classes.bigAvatar} />
                    <Typography component="h1" variant="h4" align="center" color="primary" className={classes.name}>
                      {props.data.floatingIntro.name}
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" className={classes.work}>
                      {props.data.floatingIntro.workTitle}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                    <Typography variant="h6" align="left" color="textSecondary" className={classes.title}>
                      {props.data.titles.aboutMe}
                    </Typography>
                    <CustomDivider/>
                    <Typography variant="body1" align="left" className={classes.description}>
                      {props.data.floatingIntro.description}
                    </Typography>
                    <TableIntro {...props}/>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
            <AppBar className={classes.appBar}>
              <Toolbar className={classes.toolbar}>
                <div style={{margin: 'auto'}}>
                  {props.data.floatingIntro.icons.map(icon => (
                      <Link key={icon.id} href={icon.value} target="_blank" rel="noopener" color="inherit" className={classes.link}>
                        <Icon path={icon.label} size={1.2} className={classes.icon}/>
                      </Link>
                  ))}
                </div>
              </Toolbar>
            </AppBar>
        </main>
    );
}

export default FloatingIntro;
