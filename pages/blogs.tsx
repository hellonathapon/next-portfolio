import Head from 'next/head';
import React from 'react';

function Blogs() {
    return (
        <div className="max-w-screen-sm mx-auto w-full h-full pt-20">
            <Head>
                <title>Nathapon | Blogs</title>
                <meta name="description" content="Nathapon Blogs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Blogs go here...</h1>
        </div>
    )
}

export default Blogs;