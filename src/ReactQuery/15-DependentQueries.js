import { useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
// import { useProductdata } from '../ReactQuery/hook/11-usedata';

const RQSuperHeroes = () => {
    const id = 1;
    // const onSuccess = (data) => {
    //   console.log('perform side effect after data fetching', data);
    // }
    // const onError = (data) => {
    //   console.log('perform side effect after encounter error', data);
    // }

    // const { isLoading, isError, error, isFetching, data, refetch } = useProductdata(onSuccess, onError);
    const fetchPost = () => {
        return axios.get("https://fakestoreapi.com/products/1")
    }
    const fetchProduct = (id) => {
        return axios.get(`https://fakestoreapi.com/products/${id}`)
    }

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['todos', id],
        queryFn: () => fetchProduct(id),
        enabled: !!id,
    })
    console.log(data?.data.title);
    if (isLoading) {
        <div>loading......</div>
    }
    if (isError) {
        <div>{error}</div>
    }
    return (
        <div>
            <h2>React Query Super Heroes Page</h2>
            <h2>{data?.data.title}</h2>
        </div>
    );
};

export default RQSuperHeroes;



