import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import CategorySkeletonList from './Filters/CategorySkeletonList';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
  loading: PropTypes.bool,
};

function ProductFilters({ filters, onChange, loading }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      'category.id': newCategoryId,
    };
    onChange(newFilters);
  };

  const handleChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };

  return (
    <Box>
      {loading ? <CategorySkeletonList length={6} /> : <FilterByCategory onChange={handleCategoryChange} />}
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilters;
