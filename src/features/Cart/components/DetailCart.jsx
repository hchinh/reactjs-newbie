import { Box, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import ProductQuantity from './ProductQuantity';

DetailCart.propTypes = {
  onRemove: PropTypes.func,
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    listStyleType: 'none',
    fontSize: '14px',

    paddingTop: theme.spacing(1.5),
    paddingLeft: theme.spacing(2),
    marginBottom: 0,

    '&>li': {
      paddingBottom: theme.spacing(1.5),
    },
  },

  thumbnail: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },

  name: {
    paddingLeft: theme.spacing(2.5),
    fontSize: '14px',
  },

  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  salePrice: {
    fontWeight: 'bold',
  },

  originalPrice: {
    marginLeft: theme.spacing(1),
    textDecoration: 'line-through',
  },
}));

function DetailCart({ onRemove = null, onChange = null }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const classes = useStyles();

  const handleRemoveItem = (productId) => {
    if (!onRemove) return;
    onRemove(productId);
  };

  const handleChangeQuantity = (product) => {
    if (!onChange) return;
    onChange(product);
  };

  return (
    <Box>
      <Paper elevation={0}>
        <ul className={classes.root}>
          {cartItems.map((item) => (
            <li key={item.id}>
              <Grid container>
                <Grid item lg={5} className={classes.thumbnail}>
                  <img
                    src={
                      item.product.thumbnail ? `${STATIC_HOST}${item.product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER
                    }
                    alt={item.product.name}
                    width="75px"
                  />

                  <Typography className={classes.name}>{item.product.name}</Typography>
                </Grid>
                <Grid item lg={2} className={classes.center}>
                  <Box component="span" className={classes.salePrice}>
                    {formatPrice(item.product.salePrice)}
                  </Box>
                  {item.product.promotionPercent > 0 && (
                    <>
                      <Box component="span" className={classes.originalPrice}>
                        {formatPrice(item.product.originalPrice)}
                      </Box>
                    </>
                  )}
                </Grid>
                <Grid item lg={2} className={classes.center}>
                  <ProductQuantity item={item} onChange={handleChangeQuantity} />
                </Grid>
                <Grid item lg={2} className={classes.center}>
                  {!isNaN(item.quantity) ? formatPrice(item.product.salePrice * item.quantity) : formatPrice(0)}
                </Grid>
                <Grid item lg={1} className={classes.center}>
                  <IconButton onClick={() => handleRemoveItem(item.id)}>
                    <DeleteOutlined />
                  </IconButton>
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
