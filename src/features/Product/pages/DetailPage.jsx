import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '400px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },

  right: {
    padding: theme.spacing(1.5),
    flex: '1 1 0',
  },
}));

function DetailPage() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid className={classes.left} item>
              Thumbnail
            </Grid>
            <Grid className={classes.right} item>
              Product Detail
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
