"use client"
import api from '@/utils/api';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import Product from '../home/Products/Product';


function Items({ currentItems }) {
  return (
    <div className="mt-9 grid grid-cols-3 gap-6">
      {currentItems &&
        currentItems.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [products, setProducts] = useState([])
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products?limit=100');
        setProducts(response?.data?.products);
      } catch (err) {
        console.log(err);
      }

    }
    if (products.length === 0) {
      fetchProducts()
    }
  }, [products.length])
  return (
    <div>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination