import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const pooling = () => {
    const dataFetch = ()=>{
        return axios.get("example.com/data")
    };
    const {isLoading, isError, error, isFetching, data} = useQuery("data",dataFetch,{cacheTime: 5000,
        staleTime: 3000,
        refetchInterval: 2000,
    refetchIntervalInBackground:true,
    })
    return (
        <div>
            
        </div>
    );
};
/*** pooling ডাটা রেফেচ করবে রেগুলারলী অথবা নির্দিষ্ট টাইম দিয়ে পারব। রিয়েল্টাইম ডাটা আপডেট করার জন্য ব্যবহার করব।
 * refetchInterval: false default এটা false থাকে।
 * refetchInterval: 2000, অথবা আমরা এটার মধ্যে টাইম সেট করে দিতে পারি।
 * refetchIntervalInBackground:true এটা true করে দিলে ব্রাউজার এর নেটওয়ার্ট এ ফেচ যে হচ্ছে দেখাবে না। Background ফেচ হয়ে যাবে।
 */
export default pooling;