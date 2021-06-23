import { Box, IconButton, makeStyles } from '@material-ui/core';
import { AddSharp, RemoveSharp } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },
}));

ProductQuantity.propTypes = {
  item: PropTypes.object,
  onChange: PropTypes.func,
};

function ProductQuantity({ item = {}, onChange = null }) {
  const classes = useStyles();
  const [quantityTerm, setQuantityTerm] = useState(item.quantity);
  const typingTimeoutRef = useRef();

  const handleQuantity = (value) => {
    if (!onChange) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef);
    }

    // const formValue = {
    //   ...item,
    //   quantity: parseInt(value),
    // };

    // onChange(formValue);

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        ...item,
        quantity: parseInt(value),
      };

      onChange(formValue);
    }, 500);
  };

  const handleChangeQuantityInput = (e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    setQuantityTerm(value);
    handleQuantity(value);
  };

  const handleRemoveClick = () => {
    const value = parseInt(quantityTerm) - 1;
    setQuantityTerm(`${value}`);
    handleQuantity(value);
  };

  const handleAddClick = () => {
    const value = parseInt(quantityTerm) + 1;
    setQuantityTerm(`${value}`);
    handleQuantity(value);
  };

  return (
    <Box className={classes.root}>
      <IconButton onClick={handleRemoveClick} style={{ padding: 0 }}>
        <RemoveSharp />
      </IconButton>

      <input
        type="tel"
        value={quantityTerm}
        onChange={handleChangeQuantityInput}
        style={{ width: '30px', textAlign: 'center' }}
      />

      <IconButton onClick={handleAddClick} style={{ padding: 0 }}>
        <AddSharp />
      </IconButton>
    </Box>
  );
}

export default ProductQuantity;
