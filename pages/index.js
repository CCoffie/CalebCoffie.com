import React from 'react'
import Head from 'next/head'
import RetroConsole from '../components/retroConsole'
import ConsoleTextArea from '../components/consoleTextArea';
import ContainerDimensions from 'react-container-dimensions';
import Nav from '../components/nav';

const Home = () => (
  <>
    <Head>
      <title>Caleb Coffie - Home</title>
    </Head>
    <div className="nav-container">
      <Nav/>
    </div>
    <div id="main-container">
      <ContainerDimensions>
        <RetroConsole>
          <ConsoleTextArea/>
        </RetroConsole>
      </ContainerDimensions>
    </div>
    <style jsx>{`
      #main-container {
        width: 100vw;
        height: 90vh;
      }
    `}</style>
  </>
)

export default Home
