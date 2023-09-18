import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
// import { useProductdata } from '../ReactQuery/hook/11-usedata';

const RQSuperHeroes = () => {
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
    const fetchProduct = () => {
        return axios.get("https://fakestoreapi.com/products")
    }

    const { data: post } = useQuery({ queryKey: ['posts'], queryFn: fetchPost })
    const { data: products } = useQuery({ queryKey: ['products'], queryFn: fetchProduct })


    return (
        <div>
            <h2>React Query Super Heroes Page</h2>
        </div>
    );
};

export default RQSuperHeroes;
