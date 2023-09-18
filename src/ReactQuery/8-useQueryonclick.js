import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const useQueryonclick = () => {
    const dataFetch = () => {
        return axios.get("example.com/data")
    };
    const { isLoading, isError, error, isFetching, data, refetch } = useQuery("data", dataFetch, {
        enabled: false,
    })
    return (
        <div>
            <button onClick={refetch} >data fetch</button>
        </div>
    );
};
/**
 * আমরা  যদি চাই কোন বাটনে ক্লিক করার পর ডাটা ফেচ হোক তাহলে enabled: false করে
 * একটি বাটনের মধ্যে অনক্লিক এ refetch ফানশনটি দিতে পারি। তাহলে ক্লিক করার পর ডাটা ফেচ হবে।
 * এটি আমরা ম্যানুয়ালি ডাটা ফেচ হিসেবে ব্যবহার করতে পারি, যতবার ক্লিক করব ততবার নতুন করে ডাটা ফেচ করে আনবে।
 */
export default useQueryonclick;