import axios from 'axios';
import { useQuery } from 'react-query';

const SuccessandErrorCallbacks = () => {
    const onSuccess = (data) => {
        console.log('perform side effect after data fetching', data);
    }
    const onError = (data) => {
        console.log('perform side effect after encounter error', data);
    }


    const dataFetch = () => {
        return axios.get("example.com/data")
    };
    const { isLoading, isError, error, isFetching, data, refetch } = useQuery("data", dataFetch, {
        onSuccess,
        onError
    })
    return (
        <div>

        </div>
    );
};
/**
 * onSuccess() ।। onError() কাস্টম ইরর এবং সাক্সেস হ্যান্ডেলিং করতে পারি
 */
export default SuccessandErrorCallbacks;