import { Box, Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import { cartTotalSelector } from '../selectors';

TotalCost.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),

    fontSize: '24px',
    fontWeight: 'bold',
  },
}));

function TotalCost() {
  const classes = useStyles();
  const cartTotal = useSelector(cartTotalSelector);

  return (
    <Box>
      <Grid container className={classes.root}>{`Tổng cộng: ${formatPrice(cartTotal)}`}</Grid>
      <Button variant="contained" color="secondary" size="large" fullWidth>
        Thanh toán
      </Button>
    </Box>
  );
}

export default TotalCost;
