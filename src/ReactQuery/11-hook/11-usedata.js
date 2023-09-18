import axios from "axios";
import { useQuery } from "react-query";

const dataFetch = () => {
    return axios.get("example.com/data")
};


export const useProductdata = (onSuccess, onError) => {
    return useQuery("data", dataFetch, {
        onSuccess,
        onError,
        select: (data) => {
            const productName = data.data.map((product) => product.name)
            return productName;
        }
    })
}