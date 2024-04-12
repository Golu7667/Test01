import React from "react";

const App = () => {
  const speakPredefinedText = (text) => {
    if ("speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    } else {
      alert("Text-to-speech is not supported in your browser.");
    }
  };

  return (
    <>
      <div className="w-100vw h-32 flex justify-center items-center font-extrabold text-3xl">
        Text to Speech Converter
      </div>
      <div className="flex w-screen h-3/4  justify-center items-center">
        <div className="w-1/2  h-110  shadow-xl shadow-blue-500 rounded-xl ">
          <div className="w-full h-8 bg-sky-500"></div>
          <div className="w-full h-16 flex justify-center items-center">
            <img src="https://raw.githubusercontent.com/Golu7667/Text-To-Speech-App/2148bd53d6f090bd0aa0d42e8285c2410e15c42a/my-app/public/speak.svg" className="w-16 h-16" alt="RobotImage"/>
          </div>
          <div>
            <h1 className="text-xl px-16">
              Web development, an ever-evolving field, plays a central role in
              the digital transformation of our world. It encompasses two core
              aspects—front-end development and back-end development—each
              contributing to the dynamic and interconnected online environment
              we engage with every day. Developers harness a range of
              technologies and tools to create websites and applications that
              are not only visually appealing but also highly functional. This
              essay delves into the essence of web development and its
              significance in our interconnected age.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-100vw h-16 flex justify-center items-center">
        <button
          className="w-48 h-12 bg-sky-500 hover:bg-sky-700 rounded-md text-white"
          onClick={() =>
            speakPredefinedText(
              "Web development, an ever-evolving field, plays a central role in the digital transformation of our world. It encompasses two core aspects—front-end development and back-end development—each contributing to the dynamic and interconnected online environment we engage with every day. Developers harness a range of technologies and tools to create websites and applications that are not only visually appealing but also highly functional. This essay delves into the essence of web development and its significance in our interconnected age."
            )
          }
        >
          Speak
        </button>
      </div>
    </>
  );
};

export default App;
