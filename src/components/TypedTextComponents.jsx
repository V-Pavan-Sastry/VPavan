import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedTextComponent = () => {
  useEffect(() => {
    const strings = ["V Pavan", "a Developer", "a ML Geek", " a Bot Builder"];
    const options = {
      strings: strings,
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    };
    const typed = new Typed(".auto-type", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span className="auto-type"></span>
    </div>
  );
};

export default TypedTextComponent;
