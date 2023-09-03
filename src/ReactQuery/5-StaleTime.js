/**
 * const dataFetch = ()=>{
    return axios.get("example.com/data")
};
const {isLoading, isError, error, isFetching, data} = useQuery("data",dataFetch,{cacheTime: 5000,
staleTime: 3000,
})
** stateTime: স্টিল্টাইম এর কাজ হল এখানে যত টাইম দিয়ে রাখবেন এই টাইমের মধ্যে ডাটা রিফেচ করবে না। যদি staleTime  এর মধ্যে ৩০০০ মিলি সেকেন্ড দেয় তাহলে ৩ সেকেন্ড পর্যন্ত ডাটা রিফেচ করবে না। ডিফল্ট ভেলু ০ থাকে।
 */