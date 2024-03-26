import React, { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import RetroConsole from '../components/retroConsole'
import ConsoleTextArea from '../components/consoleTextArea';
// import ContainerDimensions from 'react-container-dimensions';
import Nav from '../components/nav';

const Home = () => {
  const containerRef = useRef();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      setScale(
        Math.min(
          containerRef.current.offsetWidth / 800,
          containerRef.current.offsetHeight / 600
        ))
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect(); // clean up 
  }, []);

  return (
    <>
      <Head>
        <title>Caleb Coffie - Home</title>
      </Head>
      <div className="nav-container">
        <Nav />
      </div>
      <div id="main-container" ref={containerRef}>
        <RetroConsole scale={scale}>
          <ConsoleTextArea />
        </RetroConsole>
      </div>
      <style jsx>{`
      .nav-container{
        height: 10vh;
      }
      #main-container {
        width: 100vw;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
    </>
  )
}

export default Home
