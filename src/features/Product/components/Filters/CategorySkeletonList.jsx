import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

CategorySkeletonList.propTypes = {
  length: PropTypes.number,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

function CategorySkeletonList({ length = 6 }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>

      <Grid container>
        {Array.from(new Array(length)).map((index) => (
          <Grid item key={index} lg={12}>
            <Box mt={1}>
              <Skeleton width="50%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CategorySkeletonList;
