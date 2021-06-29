import { createStyles, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    gridBreak: {
      flexBasis: '100%',
      width: 0,
      height: 0
    }
  })
);

export default function GridBreak(): React.ReactElement {
  const classes = useStyles();

  return <Grid item className={classes.gridBreak} />;
}
