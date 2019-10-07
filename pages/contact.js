import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav';

const Contact = () => (
  <>
    <Head>
      <title>Caleb Coffie - Contact</title>
    </Head>
    <div className="nav-container">
        <Nav/>
    </div>
    <div className="content-wrapper">
      <h1>Contact Me</h1>
      {/* <form action="https://getsimpleform.com/messages?form_api_token=6e32dcea2914e736712a281f9b36cb7a" method="post">
        <input type="text" name="name" id="name" placeholder="Name"/>
        <input type="text" name="email" id="email" placeholder="Email"/>
        <textarea name="message" id="message" placeholder="Message"></textarea>
        <input type='submit' value='Send Message' class="button" />
      </form> */}
      Still a WIP...
    </div>
    <style jsx>{`
      
    `}</style>
  </>
)

export default Contact
