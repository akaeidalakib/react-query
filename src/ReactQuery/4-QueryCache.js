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
const {isLoading, isError, error, isFetching, data} = useQuery("data",dataFetch,{cacheTime: 5000})
** isFetching ব্যাকগ্রাউন্ডে ডাটা ফেচ করে কিন্তু ফ্রন্টএন্ডে লোডিং হয়না.।
** cacheTimeঃ রিয়েক্ট কিউরি ডাটা ডিফল্ট ৫ মিনিট cache  করে রাখে আমরা চাইলে সেটার টাইম চেঞ্জ করতে পারি সেটা cacheTime এর মধ্যে বলে দিতে পারি। 

 *** এখানে আমরা খুব সহজেই ইরর হ্যান্ডেলিং করতে পারতেছি। ইররর এর জন্য আলাদা কোন স্টেট নিতে হচ্ছে না।

*/