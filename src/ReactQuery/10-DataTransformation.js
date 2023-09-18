import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const DataTransformation = () => {
    const dataFetch = () => {
        return axios.get("example.com/data")
    };
    const { isLoading, isError, error, isFetching, data, refetch } = useQuery("data", dataFetch, {
        select: (data) => {
            const productName = data.data.map((product) => product.name)
            return productName;
        }
    })
    return (
        <div>
            {data.map((name) => {
                return <div key={name}>{name}</div>
            })}

        </div>
    );
};
/**
 * select: যখন কোন নির্দিষ্ট ডাটার এরে দরকার তখন ব্যবহার করতে পারি।
 * select: ব্যবহার করলে data variable  এর মধ্যে অন্য কোন ডাটা আসবে না।
 */
export default DataTransformation;