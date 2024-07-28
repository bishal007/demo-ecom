import React from 'react';
import Product from './Product';
import data from './data.json';

const ProductList = () => {
  return (
    <div className="product-list">
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
