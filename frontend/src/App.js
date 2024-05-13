import React from "react";

const App = () => {
  // Create a ref for the SpeechSynthesisUtterance instance
 


  


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
              Web development
            </h1>
          </div>
        </div>
      </div>
      <div className="w-100vw h-16 flex justify-center items-center">
      
      </div>
    </>
  );
};

export default App;
