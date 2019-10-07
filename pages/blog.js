import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav';

const Blog = () => (
  <>
    <Head>
      <title>Caleb Coffie - Blog</title>
    </Head>
    <div className="nav-container">
        <Nav/>
    </div>
    <div className="content-wrapper">
      <h1>Blog</h1>
      Blog stuff here
    </div>
    <style jsx>{`

    `}</style>
  </>
)

export default Blog
