import React from 'react';
import { consoleInput } from './consoleHook';

const ConsoleTextArea = () => {
    const { numKeyPresses, bind } = consoleInput('ccoffie@calebcoffie.com:/$', 0);
    return (
        <>
            <textarea id="console-text-area"
                spellCheck="false"
                onChange={()=>{}}
                {...bind}
            />
            <div id="prompt-to-type" hidden={numKeyPresses > 0}>
                Begin by typing in this box
            </div>
            <style jsx>{`
                #console-text-area {
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    resize: none;
                    outline: none;
                    background: transparent;
                    border: none;
                    font-family: inherit;
                    color: inherit;
                    font-size: inherit;
                    overflow: hidden;
                }
                #prompt-to-type {
                    position: absolute;
                    z-index: 2;
                    top: 50%;
                    width: 100%;
                    font-size: 1.5em;
                    opacity: 1;
                    animation: blinkingText 1.5s infinite;
                }
                @keyframes blinkingText{
                    0%      { opacity: 1; }
                    50%      { opacity: .25; }
                    100%    { opacity: 1; }
                }
            `}</style>
        </>
    )
}
export default ConsoleTextArea



