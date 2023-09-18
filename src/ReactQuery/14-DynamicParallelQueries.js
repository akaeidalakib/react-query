import { useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
// import { useProductdata } from '../ReactQuery/hook/11-usedata';

const RQSuperHeroes = () => {
  const ids = [1, 2];
  // const onSuccess = (data) => {
  //   console.log('perform side effect after data fetching', data);
  // }
  // const onError = (data) => {
  //   console.log('perform side effect after encounter error', data);
  // }

  // const { isLoading, isError, error, isFetching, data, refetch } = useProductdata(onSuccess, onError);
  const fetchPost = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
  }
  const fetchProduct = (id) => {
    return axios.get(`https://fakestoreapi.com/products/${id}`)
  }

  const userQueries = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ['product', id],
        queryFn: () => fetchProduct(id),
      }
    }),
  })
  console.log(userQueries);
  return (
    <div>
      <h2>React Query Super Heroes Page</h2>
    </div>
  );
};

export default RQSuperHeroes;



