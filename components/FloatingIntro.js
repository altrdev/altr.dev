import CustomDivider from './CustomDivider';
import TableIntro from './TableIntro';
import Icon from '@mdi/react'
import AvatarImage from '../public/images/Profile_square.jpg';
import { Toolbar, Avatar, Grid, Link, AppBar, Paper, Typography, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const FloatingIntro = ({...props}) =>  {
    const theme = useTheme();
    
    return (
        <Box component="main">
            <Box sx={{
                width: 'auto',
                maxWidth: '1200px',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
            }}>
            <Paper sx={{
                marginTop: '-' + theme.spacing(30),
                padding: theme.spacing(2),
                opacity: 0.99,
                borderRadius: 0,
                [theme.breakpoints.up('sm')]: {
                    padding: theme.spacing(3)
                }
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: theme.spacing(3)
              }}>
                <Box sx={{
                  flex: { xs: '0 0 100%', sm: '0 0 50%' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <Paper sx={{
                        padding: theme.spacing(2),
                        textAlign: 'center',
                        color: theme.palette.text.secondary,
                        boxShadow: 'none',
                        width: '100%'
                    }}>
                    <Avatar alt={props.floatingIntro.name} src={AvatarImage.src} sx={{
                        margin: 'auto',
                        width: 230,
                        height: 230,
                        marginBottom: theme.spacing(2),
                    }} />
                    <Typography component="h1" variant="h4" align="center" color="primary" sx={{
                        fontWeight: 800,
                        marginBottom: theme.spacing(1),
                        textTransform: 'uppercase',
                        letterSpacing: 2
                    }}>
                      {props.floatingIntro.name}
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" sx={{
                        fontWeight: 600,
                        marginBottom: theme.spacing(1),
                        textTransform: 'uppercase',
                        letterSpacing: 2
                    }}>
                      {props.floatingIntro.workTitle}
                    </Typography>
                  </Paper>
                </Box>
                <Box sx={{
                  flex: { xs: '0 0 100%', sm: '0 0 50%' },
                  display: 'flex',
                  flexDirection: 'column',
                  minWidth: 0
                }}>
                  <Paper sx={{
                        padding: theme.spacing(2),
                        textAlign: 'center',
                        color: theme.palette.text.secondary,
                        boxShadow: 'none',
                        width: '100%'
                    }}>
                    <Typography variant="h6" align="left" color="textSecondary" sx={{
                        fontWeight: 600,
                        marginBottom: theme.spacing(0.5),
                        letterSpacing: 2,
                        textTransform: 'uppercase',
                    }}>
                      {props.titles.aboutMe}
                    </Typography>
                    <CustomDivider/>
                    <Typography variant="body1" align="left" sx={{
                        marginBottom: theme.spacing(2),
                    }}>
                      {props.floatingIntro.description}
                    </Typography>
                    <Box sx={{ maxWidth: '100%', width: '100%' }}>
                      <TableIntro {...props}/>
                    </Box>
                  </Paper>
                </Box>
              </Box>
            </Paper>
            <AppBar sx={{
                top: 'auto',
                bottom: 0,
                position: 'relative'
            }}>
              <Toolbar sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <div style={{margin: 'auto'}}>
                  {props.floatingIntro.icons.map(icon => (
                      <Link key={icon.id} href={icon.value} target="_blank" rel="noopener" color="inherit">
                        <Icon path={icon.label} size={1.0} style={{
                            fill: theme.palette.primary.contrastText,
                            marginRight: 20,
                            marginLeft: 20
                        }}/>
                      </Link>
                  ))}
                </div>
              </Toolbar>
            </AppBar>
            </Box>
        </Box>
    );
}

export default FloatingIntro;
