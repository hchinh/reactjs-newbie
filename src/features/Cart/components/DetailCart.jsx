import { Box, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { STATIC_HOST } from 'constants/index';
import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils';

DetailCart.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '12px 0 0',
    listStyleType: 'none',
    padding: theme.spacing(1.5),

    '&>li': {
      margin: '12px 0',
      paddingBottom: theme.spacing(1.5),
    },
  },

  thumbnail: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },

  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function DetailCart(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const classes = useStyles();

  return (
    <Box>
      <Paper elevation={0}>
        <ul className={classes.root}>
          {cartItems.map((item) => (
            <li key={item.product.id}>
              <Grid container>
                <Grid item lg={8} className={classes.thumbnail}>
                  <img src={`${STATIC_HOST}${item.product.thumbnail?.url}`} alt={item.product.name} width="75px" />
                  <Typography style={{ paddingLeft: '24px' }}>{item.product.name}</Typography>
                </Grid>
                <Grid item lg={2} className={classes.center}>
                  {formatPrice(item.product.salePrice)}
                </Grid>
                <Grid item lg={2} className={classes.center}>
                  {item.quantity}
                </Grid>
              </Grid>
            </li>
          ))}
        </ul>
      </Paper>
    </Box>
  );
}

export default DetailCart;
