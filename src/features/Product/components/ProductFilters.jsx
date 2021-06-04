import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FilterByCategory from './Filters/FilterByCategory';

ProductFilters.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

ProductFilters.defaultProps = {
  filters: {},
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      'category.id': newCategoryId,
    };
    onChange(newFilters);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
    </Box>
  );
}

export default ProductFilters;
