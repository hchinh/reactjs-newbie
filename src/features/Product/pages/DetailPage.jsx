import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router';
import AddToCartForm from '../components/AddToCartForm';
import ProductInfo from '../components/ProductInfo';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';

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

  const {
    params: { productId },
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    <Box>Loading</Box>;
  }

  const handleAddToCartForm = (formValues) => {
    console.log('Form values: ', formValues);
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid className={classes.left} item>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid className={classes.right} item>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartForm} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
