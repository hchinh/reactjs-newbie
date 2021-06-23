import { Box, Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import { cartTotalSelector } from '../selectors';

TotalCost.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),

    fontSize: '24px',
    fontWeight: '500',
  },
}));

function TotalCost() {
  const classes = useStyles();
  const cartTotal = useSelector(cartTotalSelector);

  return (
    <Box>
      <Grid container className={classes.root}>{`Tổng cộng: ${
        !isNaN(cartTotal) ? formatPrice(cartTotal) : formatPrice(0)
      }`}</Grid>
      <Button variant="contained" color="secondary" size="large" fullWidth>
        Thanh toán
      </Button>
    </Box>
  );
}

export default TotalCost;
