import React from 'react'

const RetroConsole = (props) => {
    const scale = Math.min(
        props.width / 800,
        props.height / 600
    )
    return (
        <div id="retro-console-container" style={{
            transform: `translate(-50%, -50%) scale(${scale})`,
        }}>
            <div id="main-body"></div>
            <div id="stand"></div>

            <div id="screen">
                <div id="screen-children-wrapper">
                    {props.children}
                </div>
            </div>

            <div id="power-button">
                <span></span>
                <span></span>
            </div>
            <div id="floppy-drive">
                <span id="floppy-drive-slot"></span>
                <span id="floppy-drive-slot-bottom"></span>
                <span id="floppy-drive-slot-button"></span>
                <span id="floppy-drive-slot-light"></span>
            </div>

            <style jsx>{`
            #retro-console-container{
                position: absolute;
                margin: auto;
                display: block;
                width: 800px;
                height: 600px;
                background: black;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                transform-origin: center center;
                text-align: center;
            }

            #main-body {
                position: absolute;
                top: 5%;
                left: 10%;
                width: 80%;
                height: 85%;
                background: #C8BEB7;
                border-radius: 2em;
                z-index: 2;
                box-shadow: .1em 0 1em #2C2C2C;
            }

            #stand {
                position: absolute;
                top: 85%;
                left: 12.5%;
                width: 75%;
                height: 10%;
                background: linear-gradient(#696A6F, #AC9D93);
                border-radius: 0 0 2em 2em;
                z-index: 1;
                box-shadow: .1em .1em 1em #2C2C2C;
            }

            #screen {
                position: absolute;
                top: 10%;
                left: 15%;
                width: 70%;
                height: 65%;
                background: linear-gradient(#2C2C2C, #1D2820);
                border-radius: 20px;
                z-index: 3;
            }
            #screen-children-wrapper {
                color: #19A123;
                font-family: monospace;
                font-size: .875em;
                height: 100%;
                width: 100%;
                padding: 1em;
                display: inline-block;
                box-sizing: border-box;
            }

            #power-button {
                position: absolute;
                top: 79%;
                left: 20%;
                width: 2em;
                height: 2em;
                background: #AC9D93;
                border-radius: 50%;
                box-shadow: 0 0 .2em #2C2C2C;
                z-index: 3;
            }
            #power-button > span:nth-child(1) {
                position: absolute;
                width: 80%;
                height: 80%;
                border: .15em solid #2C2C2C;
                border-radius: 50%;
                left: 10%;
                top: 10%;
                box-sizing: border-box;
            }
            #power-button > span:nth-child(2) {
                position: absolute;
                width: 20%;
                height: 60%;
                border: .1em solid #AC9D93;
                background: #2C2C2C;
                border-radius: .5em;
                left: 40%;
                top: 0;
                box-sizing: border-box;
            }

            #floppy-drive-slot {
                position: absolute;
                width: 30%;
                height: 3%;
                left: 50%;
                top: 79%;
                background: linear-gradient(#2C2C2C, #382929);
                border-radius: .5em;
                z-index: 3;
            }
            #floppy-drive-slot-bottom {
                position: absolute;
                width: 14%;
                height: 2%;
                left: 58%;
                top: 82%;
                background: linear-gradient(#382929, #C8BEB7);
                z-index: 3;
            }
            #floppy-drive-slot-button {
                position: absolute;
                width: 3%;
                height: 2%;
                left: 74%;
                top: 82.5%;
                background: #AC9D93;
                border-radius: .2em;
                box-shadow: 0 0 .1em #2C2C2C;
                z-index: 3;
            }
            #floppy-drive-slot-light {
                position: absolute;
                width: 1.5%;
                height: 1.5%;
                left: 80%;
                top: 81%;
                background: #ACACAC;
                border-radius: .2em;
                z-index: 3;
                animation: blinkingLight 1s infinite;
            }
            @keyframes blinkingLight{
                0%      { background: #04C00A; }
                25%     { background: #ACACAC; }
                50%     { background: #04C00A; }
                99%     { background: #ACACAC; }
                100%    { background: #04C00A; }
            }
        `}</style>
        </div>
    )
}
export default RetroConsole



