import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        
        <p className="blue_gradient font-satoshi text-[30px]">Summarisee</p>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/651118070/", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='blue_gradient '>Summarisee</span>
      </h1>
      <h2 className='desc'>
        Summarize all article in a single click with Summarisee, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;