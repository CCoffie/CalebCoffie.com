import { useState } from "react";
import {consoleData} from "./consoleData";

const constructConsoleOutput = (numKeyPresses) => {
    const messages = consoleData['messages']
    let output = "";
    let currentObjectIndex = 0;
    let currentContentStringIndex = 0;

    // Function to check if end of messages
    const endOfMessages = () => currentObjectIndex >= messages.length;

    // Function to handle moving to next message object
    const nextMesssageObject = () => {
        currentObjectIndex++;
        currentContentStringIndex = 0;

        if (!endOfMessages()) {
            output += '\n';
            if (messages[currentObjectIndex].startingText) {
                output += messages[currentObjectIndex].startingText;
            }
        }
    }

    // Function to handle single output messages
    const singleOutput = () => {
        output += messages[currentObjectIndex].content;
        nextMesssageObject()
    }

    // Function to handle multiple output messages
    const multipleOutput = () => {
        if (currentContentStringIndex+1 > messages[currentObjectIndex].content.length) {
            nextMesssageObject()
        } else {
            output += messages[currentObjectIndex].content[currentContentStringIndex]
            currentContentStringIndex++;
        }
    }

    // Add the initial startingText if it exists
    if (messages[currentObjectIndex].startingText) {
        output += messages[currentObjectIndex].startingText;
    }

    // Loop through for each key press and construct output
    for (let i = 0; i < numKeyPresses; i++) {
        // Check for end of messages
        if (endOfMessages()) break;

        // Single output don't require key presses
        while (!endOfMessages() && messages[currentObjectIndex].outputMethod === "single") {
            singleOutput();
        }

        // Check for end of messages
        if (endOfMessages()) break;

        // Handle multiple key press content
        if (messages[currentObjectIndex].outputMethod === "multiple") {
            multipleOutput();
        }

        // Check for end of messages
        if (endOfMessages()) break;

        // Single output don't require key presses
        while (!endOfMessages() && messages[currentObjectIndex].outputMethod === "single") {
            singleOutput();
        }
    }
    return output;
}

export const consoleInput = (initialValue, initialKeyPresses) => {
  const [value, setValue] = useState(initialValue);
  const [numKeyPresses, setNumKeyPresses] = useState(initialKeyPresses);

  return {
    value,
    setValue,
    numKeyPresses,
    setNumKeyPresses,
    reset: () => {
        setValue(initialValue);
        setNumKeyPresses(0);
    },
    bind: {
      value,
      onKeyPress: (event) => {
          setValue(constructConsoleOutput(numKeyPresses+1));
          setNumKeyPresses(numKeyPresses+1);
      }
    }
  };
};