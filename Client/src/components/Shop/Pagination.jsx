"use client"
import api from '@/utils/api';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import Product from '../home/Products/Product';
import useViewProductStore from '@/ZustandStore/ViewProduct.store';
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"



function Items({ currentItems, view, isLoading, itemsPerPage }) {

  const skeletonArray = Array(itemsPerPage).fill(null);

  return (
    <div className={`mt-9 grid grid-cols-${view ? view : "3"} gap-6`}>

      {isLoading
        ? skeletonArray.map((_, index) => (
          <Card className="w-full max-w-xs border-0" key={index}>
              <CardContent>
              <Skeleton className="aspect-video w-full" />
            </CardContent>
            <CardHeader>
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
          
          </Card>
        ))

        : currentItems?.map((product) => (
          <Product
            product={product}
            key={product?.id}
          />
        ))
      }

    </div>
  );
}

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isPageChanging, setIsPageChanging] = useState(false);

  const { view } = useViewProductStore();

  const itemsPerPage = (Number(view) || 3) ** 2;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    setIsPageChanging(true);
    const newOffset =
      (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);

  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products?limit=100');
        setProducts(response?.data?.products);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setItemOffset(0);
  }, [view]);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      setIsPageChanging(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [itemOffset, view]);


  return (
    <div>
      <Items
        currentItems={currentItems}
        view={view}
        isLoading={isLoading}
        itemsPerPage={itemsPerPage}
      />

      <ReactPaginate
        breakLabel="..."
        nextLabel="NEXT >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< PREV"
        renderOnZeroPageCount={null}
        className="flex justify-center relative mt-13.75 text-primary font-jost font-semibold text-6 gap-7.5"
        previousClassName="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer"
        nextClassName="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
        pageClassName="cursor-pointer after:bg-primary relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-3/5"
        activeClassName="after:w-3/5"
      />
    </div>
  )

}
export default Pagination