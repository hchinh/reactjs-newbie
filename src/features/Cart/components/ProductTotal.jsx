import { Box, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector } from '../selectors';

ProductTotal.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1.5),
  },

  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function ProductTotal() {
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const classes = useStyles();

  return (
    <Box>
      <Paper elevation={0} className={classes.root}>
        <Grid container>
          <Grid item lg={8}>
            {`Tất cả (${cartItemsCount}) sản phẩm`}
          </Grid>
          <Grid item lg={2} className={classes.center}>
            Đơn giá
          </Grid>
          <Grid item lg={2} className={classes.center}>
            Số lượng
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default ProductTotal;
