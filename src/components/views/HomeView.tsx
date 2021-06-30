import { Grid, Link, Typography } from '@material-ui/core';
import { Assignment, Dashboard, GitHub, LinkedIn } from '@material-ui/icons';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function HomeView(): React.ReactElement {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justify="center">
        <Grid item>
          <Typography variant="h3" display="inline">
            Josh Raker - Software Engineer
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h4">
          <Grid container spacing={1} justify="space-around">
            {[
              {
                icon: <GitHub />,
                content: (
                  <Link href="https://github.com/joshraker" color="textSecondary">
                    GitHub
                  </Link>
                )
              },
              {
                icon: <LinkedIn />,
                content: (
                  <Link href="https://www.linkedin.com/in/josh-raker-56652689/" color="textSecondary">
                    LinkedIn
                  </Link>
                )
              },
              {
                icon: <Dashboard />,
                content: (
                  <Link component={RouterLink} to="/projects" color="textSecondary">
                    Projects
                  </Link>
                )
              },
              {
                icon: <Assignment />,
                content: (
                  <Link component={RouterLink} to="/resume" color="textSecondary">
                    Resume
                  </Link>
                )
              }
            ].map(({ icon, content }, index) => (
              <Grid key={index} item xs={12} sm="auto">
                <Grid container spacing={1}>
                  <Grid item>{icon}</Grid>
                  <Grid item>{content}</Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Typography>
      </Grid>
    </Grid>
  );
}
