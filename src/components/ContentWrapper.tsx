import {
  AppBar,
  createStyles,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  isWidthDown,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
  withWidth,
  WithWidthProps
} from '@material-ui/core';
import { ArrowBack, Assignment, Brightness3, BrightnessHigh, Dashboard } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemLink from 'components/ListItemLink';
import ProjectsView from 'components/views/ProjectsView';
import Hide from 'components/visibility/Hide';
import Show from 'components/visibility/Show';
import React, { useEffect, useState } from 'react';
import { Route, Switch as RouterSwitch, useLocation } from 'react-router-dom';
import themes from 'themes';

import ResumeView from './views/ResumeView';

const drawerWidth = 240;
const useStyles = makeStyles((theme) =>
  createStyles({
    offset: theme.mixins.toolbar,
    root: {
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    menuButton: {
      marginRight: theme.spacing(1)
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerContainer: {
      overflow: 'auto'
    },
    drawerDivider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    closeButton: {
      marginBottom: theme.spacing(1)
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

function _ContentWrapper(props: WithWidthProps): React.ReactElement {
  const classes = useStyles();
  const location = useLocation();
  const isMobileSize = isWidthDown('sm', props.width || 'xs');
  const [useLightTheme, setUseLightTheme] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(true);
  const [drawerVariant, setDrawerVariant] = useState<'permanent' | 'temporary'>('permanent');

  useEffect(() => {
    setDrawerVariant(isMobileSize ? 'temporary' : 'permanent');
    setDrawerIsOpen(!isMobileSize);
  }, [isMobileSize]);

  useEffect(() => {
    if (isMobileSize) {
      setDrawerIsOpen(false);
    }
  }, [location]);

  function toggleDrawer(): void {
    setDrawerIsOpen(!drawerIsOpen);
  }

  return (
    <ThemeProvider theme={themes.getTheme(useLightTheme ? 'light' : 'dark')}>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Show when={isMobileSize}>
              <IconButton className={classes.menuButton} color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </Show>
            <Typography variant="h6" component="h2">
              Josh Raker
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant={drawerVariant}
          open={drawerIsOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={toggleDrawer}
        >
          <Hide when={isMobileSize}>
            <div className={classes.offset} />
          </Hide>
          <div className={classes.drawerContainer}>
            <List>
              <Show when={isMobileSize}>
                <ListItem button className={classes.closeButton} onClick={toggleDrawer}>
                  <ListItemIcon>
                    <ArrowBack />
                  </ListItemIcon>
                  <ListItemText primary="Close" />
                </ListItem>
              </Show>
              <ListItemLink to="/" exact>
                <ListItemIcon>
                  <Assignment />
                </ListItemIcon>
                <ListItemText primary="Resume" />
              </ListItemLink>
              <ListItemLink to="/projects">
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemLink>

              <Divider className={classes.drawerDivider} />

              <ListItem>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <Typography variant="body1">Theme</Typography>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item>
                        <Brightness3 />
                      </Grid>
                      <Grid item>
                        <Switch color="primary" onChange={(e) => setUseLightTheme(e.target.checked)} />
                      </Grid>
                      <Grid item>
                        <BrightnessHigh />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.offset} />
          <RouterSwitch>
            <Route exact path="/">
              <ResumeView />
            </Route>
            <Route path="/projects">
              <ProjectsView />
            </Route>
          </RouterSwitch>
        </main>
      </div>
    </ThemeProvider>
  );
}

const ContentWrapper = withWidth()(_ContentWrapper);
export default ContentWrapper;
