import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import DetailCart from './components/DetailCart';
import ProductTotal from './components/ProductTotal';
import TotalCost from './components/TotalCost';

CartFeature.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(3),
  },
  left: {
    width: '900px',
    paddingRight: theme.spacing(1.5),
  },
  right: {
    width: '330px',
    padding: theme.spacing(1.5),
  },
}));

function CartFeature() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Typography component="h1" variant="h4" style={{ marginBottom: '12px' }}>
          GIỎ HÀNG
        </Typography>
        <Grid container>
          <Grid item className={classes.left}>
            <ProductTotal />
            <DetailCart />
          </Grid>
          <Paper elevation={0}>
            <Grid item className={classes.right}>
              <TotalCost />
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
}

export default CartFeature;
