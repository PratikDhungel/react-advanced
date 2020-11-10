import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from './2-useFetch';

const url = 'https://course-api.netlify.app/api/javascript-store-products';

const Example = () => {
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  );
};

export default Example;
