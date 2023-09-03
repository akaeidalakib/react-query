import { ReactQueryDevtools } from 'react-query/devtools'

import React from 'react';

const app = () => {
    return (
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        <div>
            
            </div>
    );
};

export default app;

/**
 * রিয়েক্ট ডেভটুল ইন্সটাল করার পর ২টা প্রপ্স দিতে হবে
 * <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
 */