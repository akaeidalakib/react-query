import axios from "axios"
import { useQuery } from "react-query"

const fetchData = (id) => {
    return axios.get(`http//:api/${id}`)
}

export const useProductDetails = (id) => {
    return useQuery(['pd-details', id], () => fetchData(id))
}


/**
 * const fetchData = ({queryKey}) => {
 * const id queryKey[1]
    return axios.get(`http//:api/${id}`)
}

export const useProductDetails = (id) => {
    return useQuery(['pd-details', id], () => fetchData)
}
 */