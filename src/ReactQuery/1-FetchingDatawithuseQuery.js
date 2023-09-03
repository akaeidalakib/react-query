/* 
const {isLoading, data} = useQuery("data",()=>{
  return axios.get(url)
}) দুইটা আর্গুমেন্ট নেয়। 
১. প্রথম আর্গুমেন্ট key নিবে
২. দ্বিতীয় আর্গুমেন্ত হিসেবে প্রমিস ফানশন নিবে ডাটা ফেচিং করার জন্য।
** ডাটা ফেচ করার পর রিয়েক্ট কিউরি আমাদের isLoading, data, isError, error দিবে।
এই ফানশনটাকে একটু সাজিয়ে লিখতে পারি যেমনঃ
ডাটা ফেচের জন্য দ্বিতীয় আর্গুমেন্টটা আলাদাভাবে লিখতে পারি
const dataFetch = ()=>{
    return axios.get("example.com/data")
};
const {isLoading, data} = useQuery("data",dataFetch)
*/