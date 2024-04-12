import React, { useRef } from "react";

const App = () => {
  // Create a ref for the SpeechSynthesisUtterance instance
  const utteranceRef = useRef(null);
  const speakPredefinedText = (text) => {
    const synthReady = () => {
        if ('speechSynthesis' in window) {
            const synth = window.speechSynthesis;
            
            // Check if voices are available
            if (synth.getVoices().length === 0) {
                console.warn('No voices available for speech synthesis.');
                return;
            }

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = synth.getVoices()[0]; // Set the first available voice

            // Continue with speech synthesis
            synth.speak(utterance);
        } else {
            alert("Text-to-speech is not supported in your browser.");
        }
    };

    if (window.speechSynthesis) {
        // If window.speechSynthesis is already available, execute the code immediately
        synthReady();
    } else {
        // If window.speechSynthesis is not yet available, wait for it to be ready
        window.addEventListener('speechSynthesisReady', synthReady);
    }
};


  

  const handleSpeakClick = () => {
    // Check if there's an existing utterance and cancel it
    console.log("hi")
    if (utteranceRef.current && utteranceRef.current.paused) {
      window.speechSynthesis.cancel();
    }

    // Speak the predefined text
    speakPredefinedText(
      "Web development, an ever-evolving field, plays a central role in the digital transformation of our world. It encompasses two core aspects—front-end development and back-end development—each contributing to the dynamic and interconnected online environment we engage with every day. Developers harness a range of technologies and tools to create websites and applications that are not only visually appealing but also highly functional. This essay delves into the essence of web development and its significance in our interconnected age."
    );
  };

  return (
    <>
      <div className="w-100vw h-32 flex justify-center items-center font-extrabold text-3xl">
        Text to Speech Converter
      </div>
      <div className="flex w-screen h-3/4 justify-center items-center">
        <div className="w-1/2 h-110 shadow-xl shadow-blue-500 rounded-xl">
          <div className="w-full h-8 bg-sky-500"></div>
          <div className="w-full h-16 flex justify-center items-center">
            <img src="https://raw.githubusercontent.com/Golu7667/Text-To-Speech-App/2148bd53d6f090bd0aa0d42e8285c2410e15c42a/my-app/public/speak.svg" className="w-16 h-16" alt="RobotImage"/>
          </div>
          <div>
            <h1 className="text-xl px-16">
              Web development.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-100vw h-16 flex justify-center items-center">
        <button
          className="w-48 h-12 bg-sky-500 hover:bg-sky-700 rounded-md text-white"
          onClick={()=>handleSpeakClick()}
        >
          Speak
        </button>
      </div>
    </>
  );
};

export default App;
